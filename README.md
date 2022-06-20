# React Context

Context provides a way to pass data through the component tree without having to pass props down manually at every level.It solves the problem of props drilling.The React context provides data to components no matter how deep they are in the components tree.

<h5>Context provides a way to pass data through the component tree without having to pass props down manually at every level
</h5>

Creating a context involves 3 steps:

<ol> 
<li> Creating a context </li>
<li> Providing a context </li>
<li> Consuming a context </li> 
</ol>

### Creating a context

The built-in function createContext(default) creates a context instance:

import { createContext } from 'react';
const ColorContext = createContext('Default Value');

The factory function accepts one optional argument: the default value.

### Providing a context

Context.Provider component available on the context instance is used to provide the context to its child components, no matter how deep they are.
First we import context and use it to create our provider.

import ColorContext from './ColorContext';
function App() {
const color= "white";
return (
<ColorContext.Provider value = {color}>

<div className="App">
<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<h1 className="App-title">Use of React Context</h1>
</header>
</div>
</ColorContext.Provider>
);
}

### Consuming a context

Consuming the context can be performed in 2 ways.

The first way, the one I recommend, is to use the useContext(Context) React hook:

import { useContext } from 'react';
function MyComponent() {
const value = useContext(ColorContext);
return <span>{value}</span>;
}

The hook returns the value of the context: value = useContext(ColorContext). The hook also makes sure to re-render the component when the context value changes.

The second way is by using a render function supplied as a child to Context.Consumer special component available on the context instance:

function MyComponent() {
return (
<ColorContext.Consumer>
{value => <span>{value}</span>}
</ColorContext.Consumer>
);
}

## When to use context

The main idea of using the context is to allow your components to access some global data and re-render when that global data is changed.

You can hold inside the context:

<ul> 
<li>global state</li> 
<li> theme </li>
<li>application configuration </li>
<li> authenticated user name </li>
<li> user settings </li>
 <ul>

On the other side, you should think carefully before deciding to use context in your application.

First, integrating the context adds complexity. Creating the context, wrapping everything in the provider, using the useContext() in every consumer — this increases complexity.

Secondly, adding context makes it more difficult to unit test the components. During unit testing, you would have to wrap the consumer components into a context provider. Including the components that are indirectly affected by the context — the ancestors of context consumers!
