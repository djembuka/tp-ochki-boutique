window.addEventListener('load', fetchMobileMenu);
window.addEventListener('resize', fetchMobileMenu);
window.fetchMobileMenuFlag;

function fetchMobileMenu() {
    if ( window.matchMedia( '(max-width: 1024px)' ).matches && !window.fetchMobileMenuFlag) {
        window.fetchMobileMenuFlag = true;
        (async function() {
                try {
                    var response = await fetch(menuAjaxPath);
                    var result = await response.text();
                    var obCatalogMenuTitleElem = document.querySelector('#OBCatalogMenu .ob-catalog-menu__title');
                    var mobileMenu = document.createElement('div');
                    mobileMenu.innerHTML = result;

                    if (obCatalogMenuTitleElem) {
                        obCatalogMenuTitleElem.after(mobileMenu);
                        //events
                        mobileMenu.querySelectorAll( '.ob-catalog-menu__link' ).forEach( function( elem ) {
                                elem.addEventListener( 'click', function(e) {
                                        e.preventDefault();

                                        if ( elem.closest( '.ob-catalog-menu__item' ).className.search( 'active' ) < 0 ) {
                                            //slide up
                                            mobileMenu.querySelectorAll( '.ob-catalog-menu__item.active' ).forEach( function( menuItem ) {
                                                    menuItem.classList.remove( 'active' );
                                                });
                                            $( '.ob-catalog-menu-sub:visible' ).slideUp();
                                        }

                                        //show current
                                        elem.closest( '.ob-catalog-menu__item' ).classList.toggle( 'active' );
                                        $(elem.parentNode.querySelector( '.ob-catalog-menu-sub' )).slideToggle();
                                    });
                            });

                        mobileMenu.querySelectorAll( '.ob-catalog-menu__title' ).forEach( function( elem ) {
                                elem.addEventListener( 'click', clickTitle );
                            });
                    }
                } catch(err) {
                    throw err;
                }
            })();
    }
}