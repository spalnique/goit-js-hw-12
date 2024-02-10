import { FetchPixabay } from './js/pixabay-api';
import { Spinner } from './js/render-functions';
import { Element } from './js/render-functions';
import { Gallery } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

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

Element.hide(refs.loadmore);
console.log(refs);

Spinner.markup =
  '<div id="spinner-container" style="padding-top: 25px; display:flex; flex-direction:column; gap:15px; align-items:center;"><span class="js-processing-request">Loading images, please wait...</span><span class="loader"></span></div>';

refs.form.addEventListener('submit', async e => {
  e.preventDefault();
  refs.container.innerHTML = '';
  requestParams.config.q = refs.input.value.trim();

  if (!FetchPixabay.testUserInput(refs.input.value.trim())) {
    refs.form.classList.add('centered');
    Gallery.showPopup('wrong input');
    refs.form.reset();
    return;
  }

  try {
    Spinner.add();
    const requestResult = new FetchPixabay(
      1,
      requestParams.url,
      requestParams.config,
      ['largeImageURL', 'webformatURL', 'tags'],
      ['likes', 'views', 'comments', 'downloads']
    );

    await requestResult.get();
    const imgData = requestResult.imgData;
    const descData = requestResult.descData;
    const totalHits = requestResult.data.data.totalHits;

    if (!totalHits) {
      Spinner.remove();
      refs.form.classList.add('centered');
      Gallery.showPopup('nothing found');
      refs.form.reset();
      return;
    }

    refs.form.classList.remove('centered');

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
    refs.form.reset();
console.log(totalHits);
    if (totalHits > 15) {
      Element.show(refs.loadmore);
    }

    refs.loadmore.addEventListener('click', async () => {
      requestParams.config.page += 1;
      Element.hide(refs.loadmore);
      try {
        Spinner.add();
        const requestResult = new FetchPixabay(
          1,
          requestParams.url,
          requestParams.config,
          ['largeImageURL', 'webformatURL', 'tags'],
          ['likes', 'views', 'comments', 'downloads']
        );

        await requestResult.get();

        console.log(requestResult.data.data.totalHits);
        const imgData = requestResult.imgData;
        const descData = requestResult.descData;

        const gallery = new Gallery(
          '.js-gallery',
          imgData,
          descData,
          refs.checkbox.checked
        );
        Spinner.remove();
        gallery.render('.js-item-image', '.js-gallery-item');
        lightboxInstance.refresh();
        if (imgData.length > 15) {
          Element.show(refs.loadmore);
        }
      } catch (error) {
        console.log(error);
      }
    });
  } catch (error) {
    console.log(error);
  }
});
