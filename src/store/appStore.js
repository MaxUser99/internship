import { makeAutoObservable } from 'mobx';

class AppStore {
  text = '';
  image = null;

  constructor() {
    makeAutoObservable(this);
  }

  setText(text) {
    this.text = text;
  }

  setImage = (image) => {
    this.image = image;
  }
}

const appStore = new AppStore();
export default appStore;
