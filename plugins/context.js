function createContextMenu(options = {}) {
  // Create wrapper
  let menu = document.createElement('div')
  menu.classList.add('contextMenu')

  // Create items
  if ( Array.isArray(options.items) && options.items.length > 0 ) {
    options.items.forEach(item => {
      let menuItem = document.createElement('div')
      menuItem.classList.add('contextItem')
      menuItem.innerHTML = Object.keys(item)

      // Set handlers
      menuItem.addEventListener('click', Object.values(item)[0])

      menu.append(menuItem)
    });
  }

  // Add menu to body
  document.body.append(menu)
  
  return {
      open(e) {
          if(e.target.classList.contains('contextMenu') || e.target.classList.contains('contextItem')) return

          menu.style.display = 'block'
          menu.style.top = e.clientY + 'px'
          menu.style.left = e.clientX + 'px'

          const pageWidth = document.documentElement.clientWidth
          const pageHeight = document.documentElement.clientHeight

          if( (e.clientX + menu.offsetWidth) > pageWidth) {
              menu.style.left = (pageWidth - menu.offsetWidth) + 'px'
          }

          if( (e.clientY + menu.offsetHeight) > pageHeight) {
              menu.style.top = (e.clientY - (menu.offsetHeight + 0)) + 'px'
          }

          // Hover effect
          menu.addEventListener('mouseover', e => {
              if ( e.target.classList.contains('contextItem') ) {
                  e.target.style.background = options.background
                  e.target.style.color = options.color
              }
          })

          menu.addEventListener('mouseout', e => {
              if ( e.target.classList.contains('contextItem') ) {
                  e.target.style.background = ''
                  e.target.style.color = ''
              }
          })
      },
      close() {
          menu.style.display = 'none'
      }
  }
}
