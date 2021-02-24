import { makeAutoObservable } from 'mobx';

class AppStore {
  text = '';
  image = null;
  imageHeight = null;

  constructor() {
    makeAutoObservable(this);
  }

  // get imageHeight() {
  //   console.log('image ref: ', this.imageRef && this.imageRef.offsetHeight);
  //   if (!this.imageRef) return 0;
  //   return this.imageRef.offsetHeight;
  // }

  setImageHeight = (height) => {
    console.log('new height: ', height);
    this.imageHeight = height;
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
