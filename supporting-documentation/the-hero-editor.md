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

## Stopping Point!!!
https://angular.io/tutorial/toh-pt1


## Next Up: [Displaying a List](displaying-a-list.md)

Go Back to Previous: [The Application Shell](the-application-shell.md)

Go Back Home: [Home](../README.md)