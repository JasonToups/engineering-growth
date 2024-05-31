# Dependency Injection

## Overview
Dependency injection is simply when you have a piece of code which uses another piece of code, and instead of using that code directly, it's passed in instead.

When you pass something in to be used, we call it injection.

We inject the dependent code into the code that uses it.

While this part is quite simple, it unlocks some very powerful side effects that we're going to cover.

## Example
We have a business app where users can chat with their coworkers.

They can also send pictures and files to each other.

![[dependency-injection-example-chat.png]]

When a user sends something, the file gets uploaded to our attachment service.

The attachment service is responsible for storing, retrieving and processing all attachments.

We're going to build up this whole service using dependency injection and we'll see what it enables us to do.

When a user sends a message with an attachment, the message text gets sent to our standard chat service.

We want people to receive their messages almost real time.

So this service is all about speed.

The attachment, on the other hand, gets uploaded to our attachment service.

There's an end point in our note service

/attachment/upload that the app connects to and uploads a file.

The attachment gets stored on the disk temporarily, processed in a few ways

we'll talk about and then uploaded to its final destination.

The default storage location is an S3, a part of Amazon's Web services.

It's a simple storage service that lets you put up files and pull them down.

We have some code here that takes the uploaded file

and then uploads it to S3.

Unfortunately, simple and elegant doesn't always like to co-exist with business.

While S3 is nice and straightforward and most of our clients are okay with it,

we have a few firms that don't want us to permanently store their data.

This means we actually need our service to handle multiple storage locations.

Then, depending on which company a user is from,

we need to put their attachments in the right place.

Most of these picky clients just give us an SFTP server to connect to,

but one really wanted us to use WebDav.

Our first thought might be to simply extend our upload code with some

if statements

and then have the caller of the upload method pass in where to upload the file.

This is awkward for a few reasons.

First, this one class has a ton of responsibility, making the code pretty ugly.

The code for SFTP is intermingled with the code

from AWS and WebDav, even though they're pretty different.

There's a lot of paths the code can take, and that makes the code

harder to understand.

Second, using the class isn't very simple.

We have this one upload function

which needs a bunch of info for where we're going to upload the attachment.

But what info it needs is very different depending on where it's going.

If it's AWS, we need the AWS keys.

If it's SFTP

we need the address and private key and WebDav needs a URL and auth key.

So we're kind of forced

to have a bunch of these

optional variables that need to be filled out in certain cases,

and then comments to tell you which ones to fill out.

This makes it pretty easy for the caller to make a mistake.

And finally, the part of the code that actually calls upload over here

needs to have all of this destination specific context to perform the upload.

But really, at this phase, it just wants to upload.

The part of the code that knows best which company a user is from

and can deduce where the file should go is up here at the beginning of the request.

But right now, we're forced to pass all of this information around.

Let's see what happens if we use dependency injection instead.

Let's create an interface that represents our attachment storage,

which contains a key upload method

that does what the request handler wants to do: Upload an attachment.

Then we create three different implementations of the storage interface.

The configuration for each is passed into their constructor.

There's no

more optional variables that sometimes need to be set.

We require exactly these values and you get an error if you forget one.

So now, once the user is authenticated and we know which company they're from,

we create the storage that the request handler should use.

Instead of the configuration needing to be passed all the way to the request

handler, only the storage is passed to, or injected into, the request handler.

It's not aware of which storage is passed in

or where the file is going, it just knows that it can call upload.

That said, this construction code is still a little

too complex to put here, so let's see if we can clean this up.

If we look at the input here, it's really just this company configuration

and the output is the storage which conforms to the storage interface.

So we can just move this out to a factory.

Great.

But saving to the final storage destination

is the last step of the process.

We have all these other stages that the upload goes through.

We run each upload through a virus scanner.

This checks the files for signatures of obvious viruses.

Then if the file’s an image, we scale it down

to a max width of 2500 pixels.

This is what we display to the user when they click on an image

because it uses less bandwidth and loads faster.

Then the file goes through preview generation.

This is basically the thumbnail that pops up underneath an attachment in the chat

so the user can see what the attachment is without fully downloading it.

Then the last step is encryption.

If we're storing the files on Amazon's S3, we pre encrypt the files

before sending them up.

That way, if there's a security breach at Amazon,

we can say they're encrypted

when we have to send out one of those: ‘We were hacked, btw’, emails.

So let's see how we

can make each of these requirements fit cleanly into our service.

For the virus scanner, we currently use a scanner called Threat Protect.

However, Synergy Security Scanner has much better

detection KPIs and our plan is to switch to it.

But sadly, we haven't finalized the deal with Synergy We're only allowed to test

with it in our development environment, not in production.

No worries.

We can create a shared interface for our two scanners

and on initialization we pick one

and inject

that one into the request handler.

When we launch in development mode, synergy security is initialized

and in production the old Threat Protect scanner is created.

Our request handler just scans the files but doesn't know which

scanner is doing it.

For image scaling,

we use the sharp library in order to inject that,

we simply wrap it up in an image scaler interface.

The interface also contains a method

which tells us if an attachment supports scaling.

We injected into our upload, request and only scale

if the attachment supports it.

Preview generation is the most complex given how many types of attachments

there could be.

We have an interface that represents the different preview generators.

It takes the input file and then returns the preview image.

We have one implementation that handles document files like word docs, slides,

etc. one for videos which extracts a thumbnail from the video

and one for images.

But the image one can thankfully just reuse our image scaler.

We just inject the same image scaler from before into the image preview generator.

So we have all these preview generator classes,

but we only need one at a time depending on which file type is being uploaded.

The upload request shouldn't need to worry about these details.

We’ll inject a factory which takes on the burden of deciding

which preview generator to create.

The factory takes in the mime type of the upload and then returns

the right preview generator to use.

So now the upload can simply just ask the factory for the preview generator

and then use it.

And lastly, we have encryption.

We only have one implementation of encryption.

We use AES but the key is per user and comes from our key service.

So we inject our KeyService into the AesEncryption

and then the AesEncryption into the storage factory.

Then whenever we get a request for a company

that's configured to use AWS, the storage factory

injects the AesEncryption into the new instance of AWSstorage.

Then the upload request gets this final

constructed AWSstorage and simply calls upload without knowing

that there's this whole chain of connected functionality.

And now we have our complete architecture.

You can see that our service is configurable from this one spot,

which makes it super easy to change.

Once our deal with synergy security

goes through, it's just these two lines to change our service.

Want to add preview support for a new file type?

It just slots in like this.

No access to the key server when running the attachment service

on your local development box?

No worries.

We can just use a fixed key when running locally.

Injection basically just lets us pick and choose

from our compatible puzzle pieces and then slot them in when we need them.

You'll notice that the time

in which dependencies are injected varies a bit.

A few dependencies are resolved and injected right at startup,.

This is often the most common scenario in dependency injection.

But some dependencies that are chosen and injected when a request comes in.

In either case, the process is mostly the same.

We have some code that accomplishes something.

It lists the dependencies it needs, and so we fulfill those needs.

You might wonder why go through the hassle of creating interfaces

and injecting things when we only have one implementation?

Like we only have one implementation of encryption.

Well, there's one big thing we haven't talked about.

If you look at our architecture here, most of our components talk to each other

through these interfaces, which are injected in.

This means that each of these connection points we can control what is being used.

We've been using this to choose which implementation to use

in our production service, but we can also make them use no implementation.

We can use injection to inject fake or mock implementations instead,

which basically means we can slice and dice up our architecture

to isolate sections of code during testing.

Let's say we want to write a test for our AWS storage class.

We can use a fake S3

which we run locally that pretends to be the cloud service.

Then our test can call upload, and we can verify that a file got uploaded to S3.

But because of the encryption, we can't actually check the content

of the file and verify that it's correct and didn't get corrupted.

Not to worry.

Let's inject a mock encryption that basically just disables encryption.

When the AWS storage class asks us to encrypt a file

we'll just hand back a file that isn't actually encrypted.

Now our test is able to verify fully that uploading and only uploading works

because we've isolated it away from our dependencies.

What if we wanted to test encryption?

Well, we could mock out the key store to return a key that we control

instead of going all the way to the key service.

Or if we wanted to

integration test both our AWS code and encryption code together.

We could do that by injecting our fake key store into the real encryption

and then inject the real encryption into the AWS storage.

A key thing here is that this is easy to do.

A natural side effect of having nice code

is that it's easy to test without needing to hack around the code structure.

If you find yourself asking, how can I test a private method?

Or I need to set some internal variable in order to test.

That's a signal that you maybe need to pull some stuff out,

that you need to isolate some part of it by separating it and injecting

it instead.

I'm going to try something new with this video.

I truly think you only learn stuff by trying stuff.

So for those subscribed to my Patreon I'm going to start

including some light experiments with videos.

For this one, you can download the attachment service I wrote,

and I want you to reconfigure the service by changing the dependency injection.

And then you get to win some *Aesthetic* points

if you enter the results on the site.