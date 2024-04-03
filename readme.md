# aznoqmous/deflect

A utility to isolate functions overrides.  
Useful when a library overrides native function, but you need that vanilla flavour.   
(eg: mootools + gmaps js api)

## Example 
```html
<script src="./deflect.js"></script>
<script>
    Deflect.save(Array, "from")
</script>
<script  src="./a.js"></script>
<script src="./b.js"></script>
```

In the above example, if either `a.js` or `b.js` overrides `Array.from` method globally, their definition is saved to use per scope.  
`a.js` `Array.from` definition will not be seen outside of `a.js` script.