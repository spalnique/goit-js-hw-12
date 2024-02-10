import rejectedIcon from '../img/rejectedIcon.svg';
import closeIcon from '../img/izitoast-close.svg';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

/**
 * @class - Provides developer with static methods allowing to add and remove loading spinner.
 * @method add() - Adds a spinner as a child of body element.
 * @method remove() - Removes last added spinner.
 */

export class Spinner {
  static markup;

  constructor() {}

  /**
   * @description Adds a spinner to the page.
   */

  static add() {
    const spinnerElem = document.createElement('button');
    document.body.appendChild(spinnerElem);
    spinnerElem.outerHTML = this.markup;
  }

  /**
   * @description Removes previously added spinner from the page.
   */

  static remove() {
    const spinnerElem = document.querySelector('#spinner-container');
    document.body.removeChild(spinnerElem);
  }
}

/**
 * @class - Use to hide or show your element. Requires at least one of CSS classes .visible | .hidden to be described in styles.css.
 */

export class Element {
  constructor() {}

  static show(elem) {
    elem.classList.add('visible');
  }

  static hide(elem) {
    elem.classList.remove('visible');
  }
}

/**
 * @param {string} parentElemQuery Expects a string containing DOM element query (class, id, etc).
 * @param {array} imgData Expects an array of three image properties to look for in data (largeImageURL, thumbnailURL, altText).
 * @param {array} descData Expects an array of additional description properties to look for in data (downloads, size, comments, etc).
 * @param {boolean} showDesc Expects a boolean value to render detailed information or not.
 */

export class Gallery {
  constructor(
    parentElemQuery = '',
    imgData = null,
    descData = null,
    showDesc = document.querySelector('.js-loadmore-button') || true
  ) {
    this.parent = parentElemQuery;
    this.imgData = imgData;
    this.descData = descData;
    this.showDesc = showDesc;
    this.markup = this.#createMarkup(this.imgData, this.descData);
  }

  /**
   * @param {string} result Accepts one of two strings: 'wrong input' | 'nothing found'.
   * @description Displays a popup area providing user with a feedback from the app.
   */

  static showPopup(requestResult, inputElemQuery = 'input') {
    const options = {
      class: 'js-izitoast-message',
      titleColor: '#FFFFFF',
      messageColor: '#FFFFFF',
      message:
        requestResult === 'wrong input'
          ? 'Try something like "kitty", "best friends", "on the Moon" ;)'
          : 'Sorry, there are no images matching your search query. Please try again!',
      backgroundColor: requestResult === 'wrong input' ? '#e0c34c' : '#ef4040',
      progressBarColor: requestResult === 'wrong input' ? '#f7e28b' : '#b51b1b',
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

  /**
   * @param {array} imageData Expects an array of objects containing information related to each image, and alternative text to be shown.
   * @param {array} descriptionData Expects an array of objects containing information related to each image description.
   * @returns {string} Returns a ready for use markup with or without image description.
   */

  #createMarkup(imageData, descriptionData) {
    const description = this.showDesc
      ? descriptionData.map(
          x =>
            `<ul class="js-item-desc">
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
          </ul>`
        )
      : '';

    const markup = imageData
      .map(
        (x, i) =>
          `<li class="js-gallery-item"><a class="js-image-container" href="${
            x.largeImageURL
          }"><img class="js-item-image" src="${x.webformatURL}" alt="${
            x.tags
          }" /></a>${description ? description[i] : ''}</li>`
      )
      .join('\n\n');
    return markup;
  }

  /**
   * @description Adds new markup to the parent element.
   */

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
}