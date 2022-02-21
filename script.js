

let menuItems = document.querySelectorAll('.menu__item')
let menuActive

function menuItemActive(){

    if( menuActive ) {
        menuActive.classList.remove( 'menu__link--active' )
        menuActive = null
    }

    menuActive = this
    menuActive.classList.add( 'menu__link--active')

}

menuItems.forEach( ( menuItem ) => {
    menuItem.addEventListener( 'click', menuItemActive )
} )

