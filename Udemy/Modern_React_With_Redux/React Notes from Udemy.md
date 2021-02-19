# React Notes from Udemy

React components are made using either Javascript functions or classes.

React is split into two separate libraries, React and ReactDOM.

- React knows what a component is and how to make components work together.
- ReactDOM knows how to take a component and make it show up in the DOM.

## JSX

JSX looks like HTML, but it's a special dialect of Javascript, that tells React what to render in a browser.

## Babel

Babel is a command line tool that can take any version of javascript, and spit out a more widely supported ES5 version of it.

 

## Project Directory for a React App

- src
    - folder where we put all of the source code
- public
    - folder where we put static files
- node_modules
    - contains all of the node dependencies required to run the app
- package.json
    - lists all of the dependencies and configures our project.
- package-lock.json
    - records the exact versions of the packages we install
- README.md
    - instructions on how to use this project

## Importing in React Files

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
```

We only import the dependencies that we want to use into each react file when we want to use them.

- import - We want to get code from some other file or dependency
- React - The variable we want to assign this import to
- from - We are about to specify the name of the library or file we are importing from
- 'react' - The name of the dependency **or** path to the file we are importing

### Different Module Systems

The 'import' statement refers to the ES2015 Modules.

A 'require' statement refers to CommonJS Modules to share code between different files. 

# JSX

You can return variables and functions within curly braces within JSX. It's important to remember how to create classes with camelCase in JSX and differentiate that from HTML.

# Components

A component is a function or class that produces HTML to show the user something or handles feedback from the user.

## Function Based Component

A component that passes a function.

## Component Nesting

A component can be shown *inside* of another.

To show a component inside of another, treat the component as an HTML tag.

## Component Reusability

We want to make components that can be easily reused throughout the application.

### Creating a Reusable Component

1. Identify any JSX that appears to be duplicated.
2. Detail the purpose of that block of JSX. Think about a descriptive name for what it does.
3. Create a new file to house this new component.
4. Create a new component in the new file, and paste the JSX into it.
5. Make the new component configurable by using React's 'props' system

### Props

Pass properties from one component into another component, by exporting it from the original file, and then importing that component into another.

Props are a system for passing data from a **Parent** component to a **Child** component. 

Props are stored in an object and passed as an argument into the component function. Whenever props are updated the component is re-rendered.

The goal of props is to customize or configure a child component.

While the component may be static, the prop data passing to the component can be configured for an individual instance of that child component.

### Child Props within Parent Component

If you would like to create a child component to render inside of a parent with different content, then you can pass {props.children} into the parent component from the child component, then pass different content into the parent component.

```jsx
<script type="text/babel" data-presets="env,react">
    const App = () => {
        return (
            <div>
                <Segment>
                    <div className="ui icon header">
                        <i className="pdf file outline icon"></i>
                        No documents are listed for this customer.
                    </div>
                    <div className="ui primary button">Add Document</div>
                </Segment>
                <Segment>
                    <h4 class="ui header">For Your Information</h4>
                    <p>
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                    </p>
                </Segment>
            </div>
        );
    }
    
    const Segment = (props) => {
        return (
            <div className="ui placeholder segment">
                {props.children}
            </div>
            );
    }
```

## Component Configuration

We should be able to configure a component when it is created.

We can reuse buttons and different components that can be customized, even if it's the same base component.

# Class Based Components

The rules of Class Based Components:

1. Must be a Javascript Class
2. Must *extend (subclass)*  React.Component
3. Must define a 'render method that returns some amount of JSX.

## Working with State

1. Only usable with Class-based components
2. It's easy to confuse props with state.
3. 'State' is a JS object that contains data relevant to a component.
4. l**Updating 'state'** on a component causes the component to (almost) instantly re-render.lllllll
5. State must be initialized when a component is created.
6. State can **only**  be updated using the function 'setState'.

# React App Lifecycle for Geolocation Call

1. JS file loaded by browser
2. Instance of App component is created
3. App components 'constructor' function gets called
4. State object is created & assigned to 'this.state' property
5. We call geolocation service
6. React calls the components render method
7. App returns JSX, gets rendered to page as HTML
8. We get the result of Geolocation Call
9. We update our state object with a call to 'this.setState'
10. React sees that we updated the state of a component
11. React calls our 'render' method a second time
12. Render method returns some (updated) JSX
13. React takes that JSX and updates content on the screen

# Conditional Rendering

You can write different return statements with various conditions to render different HTML on the page, depending on different conditions.

```jsx
render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>
    }
    return <div>Loading!</div>
  }
```

# Component Lifecycle Methods

 In the component lifecycle, there are functions that are called in different phases:

1. constructor()
    1. It's a good place to do a one-time setup, and set the initial state.
    2. The constructor function does not need to be written as a full function, simply setting state values as an object at the top of a component serves the same purpose as writing out the constructor function.
2. render()
    1. Some new content becomes visible on screen.
    2. Avoid doing anything besides returning JSX.
3. componentDidMount()
    1. componentDidMount will be invoked as soon as the component mounts.
    2. It's a method that can be used for initial data loading, or invoke another function that will return new data that should be rendered in the component.
    3. Since this method will only be invoked *once*, we can use it to invoke other functions that should only be called one time.
    4. We can put some kind of loading message or something here while we wait for an update.
4. componentDidUpdate()
    1. Sit & wait for updates...
    2. This is a place to do more data loading when state/props change.
    3. We would use this kind of method if a user clicks a button, enters text in a text entry field, or we receive new props from a parent component.
    4. When a component updates, it will re-render, and the render method will be called again.
5. componentWillUnmount()
    1. Sit & wait until this component is no longer shown.
    2. This could be used if we want to cleanup after a component, especially for non-React stuff. We could use this to destroy elements on the DOM.

    # Passing State as Props