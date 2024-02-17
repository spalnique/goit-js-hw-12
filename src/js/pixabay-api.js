import axios from 'axios';

export class FetchPixabay {
  constructor(requestURL, requestConfig, propsList) {
    this.requestURL = requestURL;
    this.requestConfig = requestConfig;
    this.propsList = propsList;
    this.data;
    this.totalHits;
  }

  set(requestURL, requestConfig, propsList) {
    this.requestURL = requestURL;
    this.requestConfig = requestConfig;
    this.propsList = propsList;
  }

  async get() {
    if (!this.requestURL || !this.requestConfig) return;

    const response = async () =>
      await axios.get(this.requestURL, {
        params: this.requestConfig,
      });

    const data = await response();
    this.totalHits = data.data.totalHits;
    this.data = this.#dataFilter(data.data.hits, this.propsList);
  }

  #dataFilter(data, propsList) {
    return data.map(obj => {
      const filtered = {};
      propsList.forEach(keyName => {
        filtered[keyName] = obj[keyName];
      });
      return filtered;
    });
  }

  static testUserInput(userInput) {
    if (!userInput.trim()) {
      return false;
    }
    return /^[a-z0-9\.\s]+$/gi.test(userInput.trim());
  }
}
