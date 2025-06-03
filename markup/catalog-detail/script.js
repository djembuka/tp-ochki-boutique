window.addEventListener('DOMContentLoaded', () => {
  //gallery
  var thumbs = new Swiper(".detail-gallery-thumbs", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var gallery = new Swiper(".detail-gallery", {
    slidesPerView: 1,
    thumbs: {
      swiper: thumbs,
    },
  });

  //zoom
  var zoomThumbs = new Swiper(".detail-zoom-gallery-thumbs", {
    spaceBetween: 12,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: "#elementZoomGalleryThumbsNext",
      prevEl: "#elementZoomGalleryThumbsPrev",
    },
  });
  var zoomGallery = new Swiper(".detail-zoom-gallery", {
    slidesPerView: 1,
    thumbs: {
      swiper: zoomThumbs,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //close
  gallery.on('click', (sw, e) => {
    e.preventDefault();
    
    if (e.target.tagName.toLowerCase() === 'img') {
      zoomGallery.slideTo( gallery.activeIndex, 0 );
      document.getElementById('elementZoomGallery').classList.add('zoom--show');
    }
  });

  document.querySelector('#elementZoomGallery .detail-zoom-gallery-close').addEventListener('click', () => {
    document.getElementById('elementZoomGallery').classList.remove('zoom--show');
  });
});
