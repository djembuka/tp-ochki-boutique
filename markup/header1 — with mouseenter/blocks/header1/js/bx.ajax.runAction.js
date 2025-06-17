window.BX = {
    ajax: {
      runComponentAction(name, type, data) {
        let result;
        if (name === 'twinpx:small-basket') {
          switch (type) {
            case 'init':
              result = new Promise((resolve, reject) => {
                resolve({
                  status: 'success',
                  data: {
                    html: `
    <link rel="stylesheet" href="./components/basket/style.css" />
    
    <div class="slr2-basket-wrapper">
      <div class="slr2-container"></div>
      <div class="slr2-basket-preloader slr2-progress">
        <div class="slr2-progress-indeterminate"></div>
      </div>
    </div>
                    `,
                  },
                  errors: [{ message: 'Error message' }],
                });
                // reject({ errors: [{ code: 2, message: 'statuses error' }] });
              });
              break;
  
            case 'count':
              result = new Promise((resolve, reject) => {
                resolve({
                  status: 'success',
                  data: {
                    count: 10,
                  },
                  errors: [{ message: 'Error message' }],
                });
                // reject({ errors: [{ code: 2, message: 'statuses error' }] });
              });
              break;
  
          }
        }

        if (name === 'twinpx:favorite') {
          switch (type) {  
            case 'count':
              result = new Promise((resolve, reject) => {
                resolve({
                  status: 'success',
                  data: {
                    count: 10,
                  },
                  errors: [{ message: 'Error message' }],
                });
                // reject({ errors: [{ code: 2, message: 'statuses error' }] });
              });
              break;
  
          }
        }
  
        if (name === 'twinpx:top-menu') {
          switch (type) {
            case 'init':
              result = new Promise((resolve, reject) => {
                resolve({
                  status: 'success',
                  data: {
                    html: `
  <link rel="stylesheet" href="./components/menu/style.css" />
  
  <div class="slr2-menu-wrapper">
    <div class="slr2-container">
      <div class="slr2-menu-content">
        <div class="slr2-menu-content__item">
          <a href="">LookBook</a>
        </div>
        <div class="slr2-menu-content__item">
          <a href="">Акции</a>
        </div>
      </div>
    </div>
  </div>
                  `,
                  },
                  errors: [{ message: 'Error message' }],
                });
                // reject({ errors: [{ code: 2, message: 'statuses error' }] });
              });
              break;
          }
        }
  
        if (name === 'twinpx:user-profile') {
          switch (type) {
            case 'init':
              result = new Promise((resolve, reject) => {
                resolve({
                  status: 'success',
                  data: {
                    html: `
<link rel="stylesheet" href="./components/profile/style.css" />

<div class="slr2-profile-wrapper">
  <div class="slr2-profile-content">
    <div class="slr2-profile-content__item">
      <a href="">Персональные данные</a>
      <a href="">История заказа</a>
      <a href="">Профили покупателя</a>
      <a href="">Моя корзина</a>
      <a href="">Подписка</a>
    </div>
    <div class="slr2-profile-content__item slr2-profile-content__item--logout">
      <a href="">Выход</a>
    </div>
  </div>
</div>
                  `,
                  },
                  errors: [{ message: 'Error message' }],
                });
                // reject({ errors: [{ code: 2, message: 'statuses error' }] });
              });
              break;
          }
        }
        return result;
      },
    },
  };