import { FetchPixabay } from './js/pixabay-api';
import { Spinner } from './js/render-functions';
import { Element } from './js/render-functions';
import { Gallery } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

async function onclick(e) {
  e.preventDefault();
  try {
    Element.hide(refs.loadmore);
    Spinner.add();
    if (e.type === 'submit') {
      refs.container.innerHTML = '';
      requestParams.config.q = refs.input.value.trim();
      requestParams.config.page = 1;
      if (!FetchPixabay.testUserInput(refs.input.value.trim())) {
        Spinner.remove();
        Gallery.showPopup('wrong input');
        refs.form.reset();
        return;
      }
    } else {
      requestParams.config.page += 1;
    }

    await requestResult.get();
    const imgData = requestResult.imgData;
    const descData = requestResult.descData;
    const totalHits = requestResult.data.data.totalHits;

    if (!totalHits) {
      Spinner.remove();
      Gallery.showPopup('nothing found');
      refs.form.reset();
      return;
    }

    const gallery = new Gallery(
      '.js-gallery',
      imgData,
      descData,
      refs.checkbox.checked
    );

    const lightboxInstance = new SimpleLightbox('.js-gallery a', {
      className: 'lightbox-wrapper',
    });

    Spinner.remove();
    gallery.render('.js-item-image', '.js-gallery-item');
    lightboxInstance.refresh();

    if (
      totalHits - requestParams.config.per_page * requestParams.config.page >
      0
    ) {
      Element.show(refs.loadmore);
    } else {
      Gallery.showPopup('sorry');
      refs.form.reset();
    }
    refs.input.value = '';
  } catch (error) {
    console.log(error);
  }
}

const refs = {
  body: document.querySelector('body'),
  form: document.querySelector('.js-search-form'),
  input: document.querySelector('.js-search-input'),
  container: document.querySelector('.js-gallery'),
  checkbox: document.querySelector('.js-search-checkbox'),
  loadmore: document.querySelector('.js-loadmore-button'),
};

const requestParams = {
  url: 'https://pixabay.com/api/',
  config: {
    key: '42242477-df8643eaa45736c853493b589',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    q: null,
    page: 1,
    per_page: 15,
  },
};

const requestResult = new FetchPixabay(
  1,
  requestParams.url,
  requestParams.config,
  ['largeImageURL', 'webformatURL', 'tags'],
  ['likes', 'views', 'comments', 'downloads']
);

Element.hide(refs.loadmore);

Spinner.markup =
  '<div id="spinner-container" style="padding-top: 25px; display:flex; flex-direction:column; gap:15px; align-items:center;"><span class="js-processing-request">Loading images, please wait...</span><span class="loader"></span></div>';

refs.form.addEventListener('submit', onclick);
refs.loadmore.addEventListener('click', onclick);
document.querySelector('.js-gallery-item');
