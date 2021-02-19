# Redux

I've been working through the [Modern React with Redux 2020](https://www.udemy.com/share/101WcYBkASeV5bTQ==/) course by Stephen Grider, and using this repo to store all of my projects.

I'll also use this as a place to gather my own notes for working with **React & Redux**.

# The Store

The Store handles the React State, which is the core of working with React.

When React State changes, the component re-renders.

The Store in Redux handles controlling State in React.

# React-Redux

Is the integration layer between React and Redux.

# General Data Loading with Redux

1. **Component** gets renered onto the screen
2. Component's **'componentDidMount'** lifecycle method gets called
3. Call **action creator** from 'componentDidMount'
   > Components are generally responsible for fetching data they need by calling an action creator.
4. Action creator runs code to make an **API request**
5. API **responds** with data
6. Action creator _returns an 'action'_ with the fetched data on the **'payload' property**
   > Action Creators are responsible for making API requests. This is where Redux-Thunk comes into play.
7. Some reducers sees the action, **returns that data** off the 'payload'
8. Because we _generated some new state object_, redux/react-redux will cause our React app to be **rerendered**
   > We get fetched data into a component by generating new state in our redux store, then getting that into our component through mapStateToProps.

# Actions

When componentDidMount fires, create an action that runs code to make an API request, or do something else.

## Normal Action Rules

- Action Creators **must** return action objects.
- Actions must have a **type** property.
- Actions can _optionally_ have a **'payload'**

Do not use Async/Await in your Action Creator, because you will not return an object.

You need to use Promises, to return an object with a type property and dispatch it to the Middleware before going to the Reducers.

# Middleware

It's a plain JS function to be called with every action we dispatch.

Has the ability to STOP, MODIFY or otherwise mess around with actions.

There are tons of open source middleware.

The most popular use of middleware is for dealing with async actions.

Redux-Thunk is going to be used to solve Async/Await function errors.

## Redux-Thunk

The Middleware to help make requests in a Redux application.

We can dispatch any action manually.

### Rules of Redux-Thunk

- Action Creators **can** return _action objects_ directly to the Reducers.

  - If an action object gets returned, it **must** have a _type_
  - If an action object gets returned, it can **optionally** have a _'payload'_

  OR

- Action Creators **can** return _functions_ and automatically call them with the 'dispatch' and 'getState' functions!
  - Though 'dispatch' we can change any data that we want.
  - Through 'getState' we can read or access any data we want.

# Reducers

Reducers receive Actions with a type and payload, and process them before accessing the Redux Store.

## Rules of Reducers

- Must return _any_ value besides 'undefined'
- Produces _'state'_, or data to be used inside of your app using only previous state and the action (reducers are pure)
- Must not return reach 'our of itself' to decide what value to return
- Must not mutate its input 'state' argument

## Updating State Safely with Reducers

Don't use Javascript methods like Push or Pop. Those would mutate the state argument, which exists in the **same place** in memory.

We need to create brand _new arrays_ or brand _new objects_, from a **new place** in memory, and then pass them into State.

### Follow these examples:

**Removing** an element from an array

```js
state.filter(element => element !== 'hi)
```

**Adding** an element to an array

```js
[...state, 'hi'];
```

**Replacing** an element in an array

```js
state.map(el => el === 'hi ? 'bye' : el)
```

**Updating** a property in an object

```js
{...state, name: 'Sam'}
```

**Adding** a property to an object

```js
{...state, age: 30}
```

**Removing** a property from an object

```js
{...state, age: undefined }
```

OR with Lodash

```js
_.omit(state, 'age');
```
