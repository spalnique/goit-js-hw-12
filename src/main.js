import { FetchPixabay } from './js/pixabay-api';
import * as render from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

async function onclick(event) {
  event.preventDefault();
  try {
    render.Spinner.add();
    if (event.type === 'submit') {
      refs.container.innerHTML = '';
      requestParams.config.q = refs.input.value.trim();
      requestParams.config.page = 1;
      if (!FetchPixabay.testUserInput(refs.input.value.trim())) {
        render.Spinner.remove();
        render.Gallery.showPopup('wrong input');
        refs.form.reset();
        return;
      }
    } else {
      requestParams.config.page += 1;
    }

    await requestResult.get();
    const imagesFound = requestResult.totalHits;
    const imagesShown =
      requestParams.config.per_page * requestParams.config.page;

    if (!imagesFound) {
      render.Spinner.remove();
      render.Gallery.showPopup('nothing found');
      refs.form.reset();
      return;
    }

    const gallery = new render.Gallery(
      '.js-gallery',
      requestResult.data,
      refs.checkbox.checked
    );

    refs.checkbox.removeEventListener('click', () =>
      gallery.toggleDesc('.js-item-desc', refs.checkbox.checked)
    );
    render.Spinner.remove();
    gallery.render('.js-item-image', '.js-gallery-item');
    refs.checkbox.addEventListener('click', () =>
      gallery.toggleDesc('.js-item-desc', refs.checkbox.checked)
    );
    lightboxInstance.refresh();

    if (imagesFound - imagesShown > 0) {
      render.Element.show(refs.loadmore);
    } else {
      render.Gallery.showPopup('sorry');
      render.Element.hide(refs.loadmore);
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
  requestParams.url,
  requestParams.config,
  [
    'largeImageURL',
    'webformatURL',
    'tags',
    'likes',
    'views',
    'comments',
    'downloads',
  ]
);

const lightboxInstance = new SimpleLightbox('.js-gallery a', {
  className: 'lightbox-wrapper',
});

render.Spinner.markup =
  '<div id="spinner-container" style="padding-top: 25px; display:flex; flex-direction:column; gap:15px; align-items:center;"><span class="js-processing-request">Loading images, please wait...</span><div class="loader"></div></div>';

refs.form.addEventListener('submit', async e => {
  await onclick(e);
});
refs.loadmore.addEventListener('click', async e => {
  await onclick(e);
  render.smoothScroll(refs.container, refs.checkbox.checked);
});

// Код нижче був зроблений виключно у дослідницьких цілях

// refs.input.addEventListener('input', e => {
//   if (!/^[a-z0-9\.\s]+$/gi.test(e.target.value)) {
//     setTimeout(() => {
//       e.target.value = e.target.value.slice(0, -1);
//     }, 100);
//   }
// });
