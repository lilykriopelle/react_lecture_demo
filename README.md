# React Demo

## What is React?
- A JS library for building user interfaces.  The V in front-end MVC. 

## Why React?
- Better separation of concerns.  React combines template and display logic and encourages us to separate concerns along more meaningful lines (not template vs. display, but this component vs. that component) and build more reusable/modular components. 
- React implements a virtual DOM.  In a lot of other front end frameworks, you have to manually manipulate the real browser DOM to get it to reflect the current state of your app.  In React, you don’t have to do any of that.
- React compares the current state of the UI with the desired state of the UI, and then calculates the minimal set of DOM mutations to get from one to the other.  Since DOM mutations are expensive, minimizing them in this way is a BIG WIN.

## Getting Started
- include the library (`<script src=https://fb.me/react-0.13.3.js></script>`)
- add a container element for react to render into (give it an id like ‘content’)
- `React.render` one top level/root component into that container
- React will replace the contents of that container with your component (and its children and their children etc)
- eg. `React.render(<Component/>, document.getElementById(‘content’))`
- to view in the browser, run `python -m SimpleHTTPServer` from the directory with your index.html

## Component
- Responsible for specifying how we want to display data
- Create them using `React.createClass(options)`
- options MUST include a `render` function
- can optionally override lifecycle methods that react invokes at various points (before initial render, after initial render, before subsequent renders, after subsequent renders, before unmounting from the DOM, etc...)

## JSX
- XML-like syntax for describing trees
- compiled to JS (in React, compiled to `React.createElement` trees)
- if we want to evaluate JS code from inside JSX, put the `{code in here}`
- attributes set on a JSX node will become that node’s props

## `Component#render`
- must return a single node as the root, but can contain any number of child nodes
- we don’t need to call `render` manually, as it gets called any time we 1) set state on this component, or 2) receive new props
- render should be a function of `this.props` and `this.state`.  
- we want our props and state to be as minimal as possible.  anything that can be computed as a function of props or state (or both!) should be computed on the fly (from within a call to render).

## Props v. State
- components should not change their own props.  props should change as the result of a state change somewhere up the react element tree.  from within a component, props should be considered immutable.
- a component’s state should only be changed from within that component.  BUT state should never be set on the state object directly (`this.state.name = “Lily” // BAD`), but rather by using the setState function (`this.setState({name: ‘Lily'})`).  Otherwise we risk different components getting out of sync and causing strange bugs.
- most components don’t need to have state, only props.  We should minimize our use of state, and only use for components that need to respond to user interaction or components that have values that need to change over time.
- if we need an event in a child component to trigger a state update in a parent component, we can pass a function down from the parent to the child through props and then use it as a callback in the component where the relevant UI takes place.

## Event Handling
- `<button onClick={this.handleClick}>CLICK ME</button>`
- instance methods are auto-bound, so we don’t have to bind this.handClick to this
- `onCamelCaseEventName={this.methodToInvoke}`: methodToInvoke will be passed a SyntheticEvent - this just a cross-browser wrapper around the browser’s event.  It has the same interface as browser events/jQuery events, but without any browser-specific quirks.
