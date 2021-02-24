import { action, makeAutoObservable } from 'mobx';

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
    console.log('this: ', this);
    this.image = image;
  }
}

const appStore = new AppStore();
export default appStore;
