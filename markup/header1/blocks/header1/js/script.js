(() => {
  class Slr2HeaderMenu {
    constructor(elem) {
      this.elem = elem;
      this.menuItems = this.elem.querySelectorAll('.slr2-header1__menu-item');
      this.itemsWidth = 0;
      this.edgeIndex;

      this.init();
    }

    init() {
      this.setItemsWidth();
      this.initEdgeIndex();
      this.setItemsHidden();
      this.initResize();
    }

    setItemsWidth() {
      if (window.matchMedia('(min-width: 1200px)').matches) {
        this.menuItems.forEach((item) => {
          item.setAttribute('data-width', item.clientWidth);
        });
      } else {
        this.elem.setAttribute(
          'style',
          'display: block; opacity: 0; position: absolute; top: 0; left: 0; z-index: -1;'
        );

        this.menuItems.forEach((item) => {
          item.setAttribute('data-width', item.clientWidth);
        });

        this.elem.removeAttribute('style');
      }
    }

    initEdgeIndex() {
      this.itemsWidth = 0;
      this.edgeIndex = undefined;

      this.menuItems.forEach((item, index) => {
        this.itemsWidth += Number(item.getAttribute('data-width'));
        if (
          Math.ceil(this.itemsWidth + index * 32 + 32 + 32 + 64) >
            Math.floor(this.elem.clientWidth) &&
          this.edgeIndex === undefined
        ) {
          this.edgeIndex = index - 1;
        }
      });
    }

    setItemsHidden() {
      this.menuItems.forEach((item, index) => {
        if (!this.edgeIndex || index <= this.edgeIndex) {
          item.classList.remove('slr2-header1__menu-item--hidden');
          item.classList.add('slr2-header1__menu-item--visible');
        } else {
          item.classList.remove('slr2-header1__menu-item--visible');
          item.classList.add('slr2-header1__menu-item--hidden');
        }
      });
    }

    initResize() {
      window.addEventListener('resize', () => {
        this.initEdgeIndex();
        this.setItemsHidden();
      });
    }
  }

  // window.addEventListener('load', () => {
  //   new Slr2HeaderMenu(document.querySelector('.slr2-header1__menu'));
  // });

  //basket count updating
  window.addEventListener('DOMContentLoaded', () => {
    ['basket', 'favorite'].forEach((name) => {
      const capitalName = name.charAt(0).toUpperCase() + name.slice(1);

      if (window.seller2[`slr2${capitalName}Component`]) {
        window.seller2[`slr2${capitalName}Component`].updateCount();
      } else {
        document.documentElement.addEventListener(
          `slr2${capitalName}Loaded`,
          () => {
            window.seller2[`slr2${capitalName}Component`].updateCount();
          }
        );
      }

      document.documentElement.addEventListener(
        `slr2${capitalName}CountUpdated`,
        (e) => {
          onCountChanged(e.detail.count, name);
        }
      );
    });
  });

  function onCountChanged(count, name) {
    const icon = document.querySelector(`.slr2-header1__${name}-icon`);

    if (Number(count) > 0 && icon.querySelector('span')) {
      icon.querySelector('span').textContent = count;
      icon.classList.add(`slr2-header1__${name}-full`);
    } else {
      icon.classList.remove(`slr2-header1__${name}-full`);
    }
  }
})();

// window.addEventListener('DOMContentLoaded', () => {
//   const icons = [
//     {
//       name: 'phone',
//       event: 'slr2PhoneLoaded',
//       component: 'slr2PhoneComponent',
//       method: 'toggle',
//     },
//     {
//       name: 'basket',
//       event: 'slr2BasketLoaded',
//       component: 'slr2BasketComponent',
//       method: 'toggle',
//     },
//     {
//       name: 'menu',
//       event: 'slr2MenuLoaded',
//       component: 'slr2MenuComponent',
//       method: 'toggle',
//     },
//     {
//       name: 'mobile-menu',
//       event: 'slr2MobileMenuLoaded',
//       component: 'slr2MobileMenuComponent',
//       method: 'toggle',
//     },
//     {
//       name: 'profile',
//       event: 'slr2ProfileLoaded',
//       component: 'slr2ProfileComponent',
//       method: 'toggle',
//     },
//     {
//       name: 'search',
//       event: 'slr2SearchLoaded',
//       component: 'slr2SearchComponent',
//       method: 'toggle',
//     },
//   ];

//   document.querySelectorAll('.slr2-header1').forEach((slr2Header1) => {
//     icons.forEach((iconObj, index) => {
//       slr2Header1
//         .querySelectorAll(`.slr2-header1__${iconObj.name}-icon`)
//         .forEach((icon) => {
//           if (window[iconObj.component]) {
//             onComponentLoaded(icon, iconObj);
//           } else {
//             document.documentElement.addEventListener(iconObj.event, () => {
//               onComponentLoaded(icon, iconObj);
//             });
//           }
//         });

//       if (index === 1) {
//         //basket
//         if (window[iconObj.component]) {
//           onBasketChanged(
//             slr2Header1,
//             iconObj,
//             window[iconObj.component].getCount()
//           );
//         }
//         document.documentElement.addEventListener(
//           'slr2BasketCountChanged',
//           (e) => {
//             onBasketChanged(slr2Header1, iconObj, e.detail.count);
//           }
//         );
//       }
//     });
//   });

//   function onComponentLoaded(icon, iconObj) {
//     icon.classList.remove('slr2--icon-preloader');
//     icon.addEventListener('click', (e) => {
//       e.preventDefault();
//       if (
//         window[iconObj.component] &&
//         window[iconObj.component][iconObj.method]
//       ) {
//         window[iconObj.component][iconObj.method]();
//       }
//     });
//   }
// });
