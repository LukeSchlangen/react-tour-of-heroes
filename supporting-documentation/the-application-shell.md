# The Application Shell

## Install the create-react-app CLI

Install the [create-react-app](https://github.com/facebookincubator/create-react-app) CLI, if you haven't already done so.

```
npm install -g create-react-app
```

## Create a new application

Create a new project named `react-tour-of-heroes` with this CLI command.

```
create-react-app react-tour-of-heroes
```

The create-react-app CLI generated a new project with a default application and supporting files.

## Serve the application

Go to the project directory and launch the application.

```
cd react-tour-of-heroes
npm start
```

> The `npm start` command builds the app, starts the development server, watches the source files, and rebuilds the app as you make changes to those files.
> 
> The command also opens a browser to [http://localhost:3000/](http://localhost:3000/).

You should see the app running in your browser.

## React components

The page you see is the _application shell_. The shell is controlled by a React **component** named `App.js`.

_Components_ are the fundamental building blocks of React applications. They display data on the screen, listen for user input, and take action based on that input.

## Change the application title

Open the project in your favorite editor or IDE and navigate to the `src` folder.

You'll find the implementation of the shell `App` component distributed over two files:

- App.js— the component class code, written in JavaScript. JSX stands for JavaScript XML. With React, it's an extension for XML-like code for elements and components.
- App.css— the component's private CSS styles.

Open the component class file (`App.js`) and create a title constant at the top of the file just below the `import` statements.

```JSX
const title = 'Tour of Heroes';
```

In the same file, there is a `render()` method where we write our JSX (which looks a lot like HTML). Remove everything inside of the `return()`. Replace it with the following line of JSX.

```JSX
return (<h1>{title}</h1>);
```

The curly braces are React's _interpolation binding syntax_. This interpolation binding presents the component's title property value inside the HTML header tag.

The browser refreshes and displays the new application title.

Since we aren't using the React logo any more, let's remove this line from our file.

```JSX
import logo from './logo.svg';
```

## Add application styles

Most apps strive for a consistent look across the application. The CLI generated App.css for this purpose. Put your application-wide styles there.

Here's an excerpt from the App.css for the Tour of Heroes sample app.

```CSS
/* Application-wide Styles */
h1 {
  color: #369;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 250%;
}
h2, h3 {
  color: #444;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
}
body {
  margin: 2em;
}
body, input[text], button {
  color: #888;
  font-family: Cambria, Georgia;
}
/* everywhere else */
* {
  font-family: Arial, Helvetica, sans-serif;
}
```

## Final Code Review

Here are the code files discussed on this page.

```JSX
// src/App.js
import React, { Component } from 'react';
import './App.css';

const title = 'Tour of Heroes';

class App extends Component {
  render() {
    return (<h1>{title}</h1>);
  }
}

export default App;

```

```CSS
/* src/App.css */
/* Application-wide Styles */
h1 {
  color: #369;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 250%;
}
h2, h3 {
  color: #444;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
}
body {
  margin: 2em;
}
body, input[text], button {
  color: #888;
  font-family: Cambria, Georgia;
}
/* everywhere else */
* {
  font-family: Arial, Helvetica, sans-serif;
}
```

## Summary

- You created the initial application structure using the create-react-app CLI.
- You learned that React components display data.
- You used the curly braces of interpolation to display the app title.

## Next Up: [The Hero Editor](the-hero-editor.md)

Go Back to Previous: [Introduction](introduction.md)

Go Back Home: [Home](../README.md)