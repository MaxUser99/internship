import { makeAutoObservable } from 'mobx';

class AppStore {
  constructor() {
    makeAutoObservable(this);
  }

  text = '';
  image = null;

  setText(text) {
    this.text = text;
  }

  setImage(image) {
    this.image = image;
  }
}

export default new AppStore();
