# HTML Dynamic text rows

## Using

Include `html-dynamic-text-rows-component.js` at the bottom of your page, just before the ending `</body>` element.
```html
<script src="html-dynamic-text-rows-component.min.js"></script>
<!-- Or, when installed by npm -->
<script src="node_modules/html-dynamic-text-rows-component/html-dynamic-text-rows-component.min.js"></script>
```

Optional: include `html-dynamic-text-rows-component.css` (this is only required when you dynamically add a component with the `dynamic-text-rows` attribute)
```html
<link rel="stylesheet" href="html-dynamic-text-rows-component.min.css">
<!-- Or, when installed by npm -->
<link rel="stylesheet" href="node_modules/html-dynamic-text-rows-component/html-dynamic-text-rows-component.min.css">
```

When you have loaded the component you can use it as followed:
```html
<div dynamic-title-rows="1">Lorem ipsum</div>
```
Where the value of dynamic-title-rows equals the amount of rows the text should be expand over.

## Issues

None (yet)

## Installing
```
 $ npm install html-dynamic-text-rows-component
```

## About
I made this component as an easy way to make text adaptable to its parent container. It does so by starting from 1px, increasing the font-size till it exceeds the maximum amount of rows. It has a fail safe in case it can not reach the desired amount of rows. This could happen when you input 4 rows, but only apply 3 words. See the `example.html` to get a preview of the functionality and use it to experiment.
