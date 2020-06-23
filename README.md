# Import
First thing you have to do is import .css...

![<link rel="stylesheet" href="./styles/context.css">](https://i.imgur.com/RVAmG9B.png)

and .js files:

![<script src="./plugins/context.js"></script>](https://i.imgur.com/0XkzUxW.png)

# Initialization
Then you can initialize the context menu:
![let menu = createContextMenu({
    items: [
        { 'Add': function handler() { console.log(" 'Add' clicked ") } },
        { 'Remove': function handler() { console.log(" 'Remove' clicked ") } }
    ],
    background: '#3d54ff',
    color: '#fff'
});](https://i.imgur.com/K7Q18dG.png)

_createContenxtMenu_ should receive an object as the only parameter

### items
First parameter is items, it's should be an **array** of **objects**

Keys of these objects should be the names of items in the context menu
and the values of these objects should be handlers. *The function that will do something when you click on an item in a menu*

_**If you don't wanna set a handler just set it as null**_
```javascript
    { 'Add': null },
    { 'Remove': function handler() { console.log(" 'Remove' clicked ") } },
```

### background
Should be a **hex** or **rgb** or **rgba** color

It's just an item's background color when you hover over it *item:hover{...}*

### color
Should be a **hex** or **rgb** or **rgba** color

Just like background, but for text's color

# Using

*createContextMenu* returns **open** and **close** methods using which you can open and close the menu, for example:

![document.addEventListener('contextmenu', e => {
    e.preventDefault()
    menu.open(e)
})
](https://i.imgur.com/DCIlOrE.png)

# Result
And here you go..

![Image isn't aviable :(](https://i.imgur.com/M19YqvW.png)
