# The Hero Editor

The application now has a basic title. Next you will create a new component to display hero information and place that component in the application shell.

## Create the heroes component

Create a new folder in `src` named `Heroes`. Inside the `Heroes` folder, let's create `Heroes.js`.

```JSX
// src/Heroes/Heroes.js
import React, { Component } from 'react';

class Heroes extends Component {
  render() {
    return (<div>The Heroes Component</div>);
  }
}

export default Heroes;
```

You always import `React` and the `Component` class from the `react` library for a new component.

## Add a _hero_ to the Component

Add a `hero` to the `HeroesComponent` for a hero named "Windstorm" by placing this new line below the import statements in `Heroes.js`:

```JSX
const hero = 'Windstorm';
```

## Show the hero

Still in `Heroes.js`, replace the placeholder `<div>The Heroes Component</div>` in the `render` method's `return` with 

```JSX
`<div>{ hero }</div>`
```

## Show the _HeroesComponent_ view

To display the `Heroes` component, you must add it to the template of the shell `App` component. In order to do this, you must `import` the `Heroes` component into `App.js` by including the following `import` statement just below the others:

```JSX
import Heroes from '../Heroes/Heroes';
```

Now add a `<Heroes />` element to the AppComponent template file, just after the `h1` in `App.js`. This is a good time to point out an important requirement of appropriately formatted `JSX`. Here, after adding `<Heroes />` to the `return`, we should have the following:

```JSX
class App extends Component {
  render() {
    return (<h1>{title}</h1><Heroes />);
  }
}
```

If you are still running the server, you will likely see the error `JSX expressions must have one parent element` or `Syntax error: Adjacent JSX elements must be wrapped in an enclosing tag`. They are both saying the same thing:

> The `return` from a `render` method can only have a single parent element

To fix this error, all we need to do is wrap these in a `<div>` tag like this:

```JSX
class App extends Component {
  render() {
    return (<div><h1>{title}</h1><Heroes /></div>);
  }
}
```

Assuming that the `npm start` command is still running, the browser should refresh and display both the application title and the hero name.

## Create a Hero class

A real hero is more than a name.

In `Heroes.js`, Give `Windstorm` an id and name properties by replacing `const hero = 'Windstorm';` with

```JSX
const hero = {
    id: 1,
    name: 'Windstorm',
};
```

The page no longer displays properly because you changed the hero from a string to an object.

## Show the hero object

Update the binding in the `Heroes.js` template to announce the hero's name and show both `id` and `name` in a details layout like this:

```JSX
class Heroes extends Component {
  render() {
    return (
        <div>
            <h2>{ hero.name } Details</h2>
            <div><span>id: </span>{ hero.id }</div>
            <div><span>name: </span>{ hero.name }</div>
        </div>
    );
  }
}
```

Don't forget the enclosing `<div>` tags for proper `JSX`.

## Format with JavaScript .toUpperCase()

Modify the `hero.name` binding like this.

```JSX
<h2>{ hero.name.toUpperCase() } Details</h2>
```

The browser refreshes and now the hero's name is displayed in capital letters.

The single curly brackets allow us to run JavaScript inside of them and edit how things will be displayed on the DOM.

## Edit the Hero

Users should be able to edit the hero name in an `<input>` textbox.

The textbox should both _display_ the hero's `name` property and update that property as the user types. That means data flow from the component object _out to the screen_ and from the screen _back to the object_.

> Note: If you're following along with the Angular Tour of Heroes tutorial, this is probably the largest divergence away since React doesn't suport `Two-way binding` and instead opts for `unidirectional data flow`. There are many other articles and guids that cover the differences, so this tutorial will focus less on the pros and cons of one versus the other. Instead this tutorial will focus more on the implementation in React.


## Unidirectional data flow

Refactor the details area in the `Heroes` component template in `Heroes.js` so it looks like this:

```JSX
<div>
    <h2>{ hero.name.toUpperCase() } Details</h2>
    <div><span>id: </span>{ hero.id }</div>
    <div>
        <label>name:
            <input value={ hero.name } placeholder="name"></input>
        </label>
    </div>
</div>
```

If you are still running the project, you should see the error `Warning: Failed prop type: You provided a 'value' prop to a form field without an 'onChange' handler. This will render a read-only field. If the field should be mutable use 'defaultValue'. Otherwise, set either 'onChange' or 'readOnly'.` in the console. Essentially, we have created an input field without telling React what to do when the value of the input field is changed. React needs us to explicitly tell it what to do when the value of the input field is changed.

## Stopping Point!!!
https://angular.io/tutorial/toh-pt1


## Next Up: [Displaying a List](displaying-a-list.md)

Go Back to Previous: [The Application Shell](the-application-shell.md)

Go Back Home: [Home](../README.md)