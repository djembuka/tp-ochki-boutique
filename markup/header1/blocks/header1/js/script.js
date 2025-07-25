(() => {
  /*class Slr2HeaderMenu {
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

  window.addEventListener('load', () => {
    new Slr2HeaderMenu(document.querySelector('.slr2-header1__menu'));
  });
  */

  class slr2MenuCollapse {
    constructor(element) {
      this.element = element;
      this.init();
      this.events();
    }

    init() {
      let menuWidth = this.element.getBoundingClientRect().width;
      const items = this.element.querySelectorAll('.menu-collapse__item');
      let itemsWidth = 0;
      let edgeIndex;

      items.forEach((item, index) => {
        itemsWidth += item.getBoundingClientRect().width;

        let summ = itemsWidth + index * 24;
        if (index != items.length - 1) {
          summ += (16 + 20);
        }

        if (summ > menuWidth && edgeIndex === undefined) {
          edgeIndex = index - 1;
        }
      });

      //more button
      const moreButton = document.createElement('div');
      moreButton.classList.add('menu-collapse__more');
      this.element.appendChild(moreButton);

      const subMenu = document.createElement('div');
      subMenu.classList.add('menu-collapse__sub');
      moreButton.appendChild(subMenu);

      let showInterval;
      moreButton.addEventListener('mouseenter', (e) => {
        clearInterval(showInterval);
        moreButton.classList.add('menu-collapse__more--show');
      });
      moreButton.addEventListener('mouseleave', () => {
        showInterval = setTimeout(() => {
          moreButton.classList.remove('menu-collapse__more--show');
        }, 200);
      });

      //append items to submenu
      if (!edgeIndex || edgeIndex === items.length) {
        this.element.classList.add('menu-collapse--no-more');
      } else {
        items.forEach((item, index) => {
          if (index > edgeIndex) {
            subMenu.appendChild(item);
          }
        });
      }

      this.element.classList.add('menu-collapse--visible');
      this.element.classList.add('menu-collapse--ready');
    }

    events() {
      window.addEventListener('resize', () => {
        //hide submenu
        this.element.classList.remove('menu-collapse--visible');
        //move items back
        const subMenu = this.element.querySelector('.menu-collapse__sub');
        const moreButton = this.element.querySelector('.menu-collapse__more');
        subMenu.querySelectorAll('.menu-collapse__item').forEach((item) => {
          moreButton.before(item);
        });
  
        const menuWidth = this.element.getBoundingClientRect().width;
        const items = this.element.querySelectorAll('.menu-collapse__item');
        let itemsWidth = 0;
        let edgeIndex;
  
        items.forEach((item, index) => {
          itemsWidth += item.getBoundingClientRect().width;

          let summ = itemsWidth + index * 24;
          if (index != items.length - 1) {
            summ += (16 + 20);
          }

          if (summ > menuWidth && edgeIndex === undefined) {
            edgeIndex = index - 1;
          }
        });
  
        if (!edgeIndex || edgeIndex === items.length) {
          this.element.classList.add('menu-collapse--no-more');
        } else {
          items.forEach((item, index) => {
            if (index > edgeIndex) {
              subMenu.appendChild(item);
            }
          });
          this.element.classList.remove('menu-collapse--no-more');
        }
  
        this.element.classList.add('menu-collapse--visible');
      });
    }
  }

  window.addEventListener('load', () => {
    new slr2MenuCollapse(document.querySelector('.slr2-header1__menu .menu-collapse'));
  });

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

