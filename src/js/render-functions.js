import rejectedIcon from '../img/rejectedIcon.svg';
import closeIcon from '../img/izitoast-close.svg';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export class Spinner {
  static markup;

  constructor() {}

  static add() {
    const spinnerElem = document.createElement('button');
    document.body.appendChild(spinnerElem);
    spinnerElem.outerHTML = this.markup;
  }

  static remove() {
    const spinnerElem = document.querySelector('#spinner-container');
    document.body.removeChild(spinnerElem);
  }
}

export class Element {
  constructor() {}

  static show(elem) {
    elem.classList.remove('hidden');
    elem.classList.add('visible');
  }

  static hide(elem) {
    elem.classList.remove('visible');
    elem.classList.add('hidden');
  }

  static isVisible(elem) {
    return elem.classList.contains('visible');
  }
}

export class Gallery {
  constructor(parentElemQuery, data = null, showDesc) {
    this.parent = parentElemQuery;
    this.data = data;
    this.showDesc = showDesc;
    this.markup = this.#createMarkup(this.data);
  }

  static showPopup(requestResult, inputElemQuery = 'input') {
    const options = {
      class: 'js-izitoast-message',
      titleColor: '#FFFFFF',
      messageColor: '#FFFFFF',
      message:
        requestResult === 'wrong input'
          ? 'Try something like "kitty", "best friends", "on the Moon" ;)'
          : requestResult === 'sorry'
          ? "We're sorry, but you've reached the end of search results."
          : 'Sorry, there are no images matching your search query. Please try again!',
      backgroundColor:
        requestResult === 'wrong input'
          ? '#e0c34c'
          : requestResult === 'sorry'
          ? '#278edd'
          : '#ef4040',
      progressBarColor:
        requestResult === 'wrong input'
          ? '#f7e28b'
          : requestResult === 'sorry'
          ? '#4eb2ff'
          : '#b51b1b',
      messageSize: '16px',
      position: 'topRight',
      displayMode: 'replace',
      pauseOnHover: false,
      iconUrl: rejectedIcon,
      close: false,

      buttons: [
        [
          `<button type="button" style="background-color: transparent;"><img src=${closeIcon}></button>`,
          function (instance, toast) {
            instance.hide({ transitionOut: 'fadeOut' }, toast);
          },
        ],
      ],
      onOpening: function (_, toast) {
        const input = document.querySelector(inputElemQuery);
        input.blur();
        input.addEventListener(
          'focus',
          () => {
            iziToast.hide({ transitionOut: 'fadeOut' }, toast);
          },
          { once: true }
        );
      },
      onClosed: function (_, toast) {
        const input = document.querySelector(inputElemQuery);
        input.removeEventListener(
          'focus',
          () => {
            iziToast.hide({ transitionOut: 'fadeOut' }, toast);
          },
          { once: true }
        );
      },
    };
    iziToast.show(options);
  }

  #createMarkup(data) {
    const markup = data
      .map(x =>
        this.showDesc
          ? `<li class="js-gallery-item js-gallery-item-ext"><a class="js-image-container" href="${x.largeImageURL}"><img class="js-item-image" src="${x.webformatURL}" alt="${x.tags}" /></a>
            <ul class="js-item-desc js-item-desc-ext">
              <li class="js-desc-wrapper">
                <span class="js-desc-prop">Likes</span>
                <span class="js-desc-value">${x.likes}</span>
              </li>
              <li class="js-desc-wrapper">
                <span class="js-desc-prop">Views</span>
                <span class="js-desc-value">${x.views}</span>
              </li>
              <li class="js-desc-wrapper">
                <span class="js-desc-prop">Comments</span>
                <span class="js-desc-value">${x.comments}</span>
              </li>
              <li class="js-desc-wrapper">
                <span class="js-desc-prop">Downloads</span>
                <span class="js-desc-value">${x.downloads}</span>
              </li>
            </ul>
          </li>`
          : `<li class="js-gallery-item"><a class="js-image-container" href="${x.largeImageURL}"><img class="js-item-image" src="${x.webformatURL}" alt="${x.tags}" /></a>
            <ul class="js-item-desc">
              <li class="js-desc-wrapper">
                <span class="js-desc-prop">Likes</span>
                <span class="js-desc-value">${x.likes}</span>
              </li>
              <li class="js-desc-wrapper">
                <span class="js-desc-prop">Views</span>
                <span class="js-desc-value">${x.views}</span>
              </li>
              <li class="js-desc-wrapper">
                <span class="js-desc-prop">Comments</span>
                <span class="js-desc-value">${x.comments}</span>
              </li>
              <li class="js-desc-wrapper">
                <span class="js-desc-prop">Downloads</span>
                <span class="js-desc-value">${x.downloads}</span>
              </li>
            </ul>
          </li>`
      )
      .join('\n\n');
    return markup;
  }

  render(imageElemQuery, galleryItemElemQuery) {
    document.querySelector(this.parent).innerHTML += this.markup;

    const images = document.querySelectorAll(imageElemQuery);

    images.forEach((x, i) =>
      x.addEventListener('load', () => {
        document
          .querySelectorAll(galleryItemElemQuery)
          [i].classList.add('visible');
      })
    );
  }

  toggleDesc(descElemQuery, showDesc) {
    const parent = document.querySelector(this.parent);
    const itemDesc = document.querySelectorAll(descElemQuery);
    if (!parent.innerHTML) return;

    itemDesc.forEach(x => {
      if (showDesc) {
        x.classList.add('js-item-desc-ext');
        x.parentElement.classList.add('js-gallery-item-ext');
      } else {
        x.classList.remove('js-item-desc-ext');
        x.parentElement.classList.remove('js-gallery-item-ext');
      }
    });
  }
}

export function smoothScroll(itemParentElem, descriptionShown) {
  const containerCSSStyles = window.getComputedStyle(itemParentElem);
  const containerGap = parseFloat(containerCSSStyles.rowGap);
  const itemHeight = parseFloat(
    itemParentElem.lastChild.getBoundingClientRect().height
  );
  window.scrollBy({
    top: descriptionShown
      ? itemHeight * 2.75 + containerGap
      : itemHeight * 2.5 + containerGap,
    behavior: 'smooth',
  });
}
