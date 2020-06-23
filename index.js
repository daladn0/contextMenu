// Initization
let menu = createContextMenu({
    items: [
        { 'Add': function handler() { console.log(" 'Add' clicked ") } },
        { 'Remove': function handler() { console.log(" 'Remove' clicked ") } },
        { 'Edit': function handler() { console.log(" 'Edit' clicked ") } },
        { 'Save': function handler() { console.log(" 'Save' clicked ") } },
        { 'Download': function handler() { console.log(" 'Download' clicked ") } },
        { 'ViewCode': function handler() { console.log(" 'ViewCode' clicked ") } },
    ],
    background: '#3d54ff',
    color: '#fff'
});

// Open menu when you clicked on a RMB
document.addEventListener('contextmenu', e => {
    e.preventDefault()
    menu.open(e)
})

// Close menu when you clicked on a LMB
document.addEventListener('click', e => {
    menu.close()
})