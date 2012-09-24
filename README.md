## PSDGuides.js

PSDGuides.js is a simple script to draw photoshop-like guides.

Can be usefull during slicing phase to accomplish pixel-perfect web layouts.

### Usage

```js
PSDGuides({
    canvasWidth : 1000,
    xGuides     : [20, 355, 355, 250, 20],
    yGuides     : [50, 100, 100, 250, 250, 50, 50, 50]
});
```
### Defaults

```js
show        : true, // Boolean : (true, false)
canvas      : document.getElementsByTagName("body")[0],
canvasWidth : 0, // Integer
orientation : "center", // String : ("center", "left", "right")
backColor   : "rgba(132, 170, 234, .25)", // Valid Color
lineColor   : "rgba(73, 141, 255, 1)", // Valid Color
xGuides     : {},
yGuides     : {},
zindex      : 9999
```

#### 960 Grid System

Applying 960 grid system

##### 12-column grid

```js
PSDGuides({
    canvasWidth : 960,
    xGuides     : [10, 60, 10]
});
```

##### 16-column grid

```js
PSDGuides({
    canvasWidth : 960,
    xGuides     : [10, 40, 10]
});
```