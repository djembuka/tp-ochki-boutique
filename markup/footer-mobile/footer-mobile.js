window.addEventListener('load', function() {
    fetchFooterMobileMenu();
});
window.addEventListener('resize', fetchFooterMobileMenu);
window.fetchFooterMobileMenuFlag;

function fetchFooterMobileMenu() {
    if ( window.matchMedia( '(max-width: 1024px)' ).matches && !window.fetchFooterMobileMenuFlag) {
        window.fetchFooterMobileMenuFlag = true;
        (async function() {
                try {
                    var response = await fetch(footerMenuAjaxPath);
                    var result = await response.text();
                    var obFooterCatalogMenuElem = document.querySelector('#OBFooterCatalogMenu');
                    var mobileMenu = document.createElement('div');
                    mobileMenu.innerHTML = result;

                    if (obFooterCatalogMenuElem) {
                        obFooterCatalogMenuElem.appendChild(mobileMenu);
                        //events
                        mobileMenu.querySelectorAll( '.ob-catalog-menu__link' ).forEach( function( elem ) {
                                if ( elem.classList.contains( 'i-link' )) return;

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
                    }
                } catch(err) {
                    throw err;
                }
            })();
    }
}