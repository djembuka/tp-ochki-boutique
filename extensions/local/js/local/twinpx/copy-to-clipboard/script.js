const copyToClipboard = (str, elem) => {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
    str = str.trim();
    navigator.clipboard.writeText(str);
    if (elem) {
      let span = document.createElement('span');
      span.classList.add('b-twpx-copy-icon__note');
      span.innerText = 'Скопировано в буфер';
      elem.querySelector('.b-twpx-copy-icon').appendChild(span);
      setTimeout(() => {
        span.classList.add('b-twpx-copy-icon__note--show');
      }, 0);
      setTimeout(() => {
        span.classList.remove('b-twpx-copy-icon__note--show');
      }, 1000);
      setTimeout(() => {
        span.remove();
      }, 1500);
    }
    return;
  }
  return Promise.reject('The Clipboard API is not available.');
};

if (window.matchMedia('(min-width: 768px)').matches) {
  if (document.querySelectorAll('.b-twpx-copy').length) {
    document.querySelectorAll('.b-twpx-copy').forEach((elem) => {
      let span = document.createElement('span');
      span.classList.add('b-twpx-copy-icon');
      span.setAttribute(
        'style',
        'background-image: url("/local/templates/aas/images/copy.svg")'
      );
      elem.appendChild(span);

      elem.addEventListener('click', () => {
        copyToClipboard(elem.textContent, elem);
      });
    });
  }
}
