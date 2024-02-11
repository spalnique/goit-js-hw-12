import axios, { Axios } from 'axios';

export class FetchPixabay {
  constructor(
    id,
    requestURL,
    requestConfig,
    imagePropsList = ['largeImageURL', 'webformatURL', 'tags'],
    descPropsList = ['likes', 'views', 'comments', 'downloads']
  ) {
    this.id = id;
    this.requestURL = requestURL;
    this.requestConfig = requestConfig;
    this.imagePropsList = imagePropsList;
    this.descPropsList = descPropsList;
    this.data;
    this.imgData;
    this.descData;
  }

  /**
   * @method set() Allows to set manualy request parameters and lists of necessary data to be filtered out of server response.
   * @param {string} [requestURL] Expects a string containing valid base URL required to perform a request.
   * @param {{}} [requestConfig] Expects an object with valid request configuration.
   * @param {[string]} imagePropsList Expects an array of strings specifying image properties to be filtered out of a raw data.
   * @param {[string]} descPropsList Expects an array of strings specifying image description properties to be filtered out of a raw data.
   */

  set(requestURL, requestConfig, imagePropsList, descPropsList) {
    this.requestURL = requestURL;
    this.requestConfig = requestConfig;
    this.imagePropsList = imagePropsList;
    this.descPropsList = descPropsList;
  }

  /**
   * @method getImagesData() Retrieves data from remote server using Axios module.
   * @returns Writes retrieved data into the instance property 'data'.
   */

  async get() {
    if (!this.requestURL || !this.requestConfig) return;

    const data = async () =>
      await axios.get(this.requestURL, {
        params: this.requestConfig,
      });

    this.data = await data();
    this.descData = this.#dataFilter(this.data.data.hits, this.descPropsList);
    this.imgData = this.#dataFilter(this.data.data.hits, this.imagePropsList);
  }

  /**
   * @param {array} propsList Expects an array of strings each specifying a property to be filtered out of a raw data.
   * @returns {object} Returns a new array of objects with requested properties only.
   */

  #dataFilter(data, propsList) {
    return data.map(obj => {
      const filtered = {};
      propsList.forEach(keyName => {
        filtered[keyName] = obj[keyName];
      });
      return filtered;
    });
  }

  /**
   * @param {string} userInput Expects string value for testing.
   * @returns {boolean} Returns true or false.
   */

  static testUserInput(userInput) {
    if (!userInput.trim()) {
      return false;
    }
    return /^[a-z0-9\.\s]+$/gi.test(userInput.trim());
  }
}
