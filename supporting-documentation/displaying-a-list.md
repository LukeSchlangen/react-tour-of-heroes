# Display a Heroes List

In this page, you'll expand the Tour of Heroes app to display a list of heroes, and allow users to select a hero and display the hero's details.

## Create Mock Heroes

You'll need some heroes to display.

Eventually you'll get them from a remote data server. For now, you'll create some _mock heroes_ and pretend they came from the server.

Inside of `Heroes.js`, update `this.state` to include the following array of `heroes`.

```JSX
this.state = {
    hero: {
        id: 1,
        name: 'Windstorm',
    },
    heroes: [
        { id: 11, name: 'Mr. Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
    ]
};
```

## Displaying heroes

You're about to display the list of heroes at the top of the `Heroes` component. We have the data as a part of our state, now we need to map them to the DOM. 

### List heroes with .map


Within the `Heroes.js` file, change the `render()` method, remove the current content and add:

- Add an <h2> at the top,
- Below it add an HTML unordered list (<ul>)
- Insert an <li> within the <ul> that displays properties of a hero.
- Sprinkle some CSS classes for styling (you'll add the CSS styles shortly). This part may seem a little unusual, because React uses `className` instead of `class`. This is because `class` is a keyword in javascript, and JSX is an extension of javascript.

```JSX
<div>
    <h2>My Heroes</h2>
    <ul className="heroes">
    <li>
        <span className="badge">{this.state.hero.id}</span> {this.state.hero.name}
    </li>
    </ul>
</div>
```

This allows you to display your one hero from before in the list, but we really want to display all of them. Change the `<li>` to this:

```JSX
{this.state.heroes.map(hero => (
    <li key={hero.id}>
        <span className="badge">{hero.id}</span>
        {hero.name}
    </li>
))}
```

After a refresh, the entire list appears! (Maybe not in the most stylish of ways, but we'll get there.)

`.map` allows us to loop through each hero. We display the hero id and hero name as a part of the `<li>`. The one part that might stick out is they `key` prop on the `<li>`. The `key` prop is for React to keep track of each list item so that if one of them changes, it only needs to update that one (instead of updating the entire DOM). This is one of React's big things (only updating what needs to be updated).

### Style the heroes

The heroes list should be attractive and should respond visually when users hover over and select a hero from the list.

In the first part of the tutorial, you set the basic styles for the entire application in `App.css`. That stylesheet didn't include styles for this list of heroes.

You could add more styles to `styles.css` and keep growing that stylesheet as you add components.

You may prefer instead to define private styles for a specific component and keep everything a component needs— the code, the HTML, and the CSS —together in one place.

This approach makes it easier to re-use the component somewhere else and deliver the component's intended appearance even if the global styles are different.

Within the `Heroes` folder, create a `Heroes.css` file and paste the following CSS:

```CSS
/* src/Heroes/Heroes.css */
/* Heroes component's private CSS styles */

.selected {
  background-color: #CFD8DC !important;
  color: white;
}

.heroes {
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 15em;
}

.heroes li {
  cursor: pointer;
  position: relative;
  left: 0;
  background-color: #EEE;
  margin: .5em;
  padding: .3em 0;
  height: 1.6em;
  border-radius: 4px;
}

.heroes li.selected:hover {
  background-color: #BBD8DC !important;
  color: white;
}

.heroes li:hover {
  color: #607D8B;
  background-color: #DDD;
  left: .1em;
}

.heroes .text {
  position: relative;
  top: -3px;
}

.heroes .badge {
  display: inline-block;
  font-size: small;
  color: white;
  padding: 0.8em 0.7em 0 0.7em;
  background-color: #607D8B;
  line-height: 1em;
  position: relative;
  left: -1px;
  top: -4px;
  height: 1.8em;
  margin-right: .8em;
  border-radius: 4px 0 0 4px;
}
```

Now be sure to bring those styles into the `Heroes` component by adding the following line to `Heroes.js`

```JSX
import './Heroes.css'
```

## Master/Detail



https://angular.io/tutorial/toh-pt2

## Next Up: [Master/Detail Components](master-detail-components.md)

Go Back to Previous: [The Hero Editor](the-hero-editor.md)

Go Back Home: [Home](../README.md)