import { makeAutoObservable } from 'mobx';
import { USER_STATUS } from './userStore';

class AppStore {
  text = '';
  image = null;
  imageHeight = null;

  constructor() {
    makeAutoObservable(this);
  }

  get requiredStatus() {
    const trimmedText = this.text.replace(/ /g,'');
    if (trimmedText.length < 200) return USER_STATUS.GUEST;
    if (trimmedText.length < 500) return USER_STATUS.USER;
    return USER_STATUS.SUBSCRIBER;
  }

  setImageHeight = (height) => {
    this.imageHeight = height;
  }

  setText = (text) => {
    this.text = text;
  }

  setImage = (image) => {
    this.image = image;
  }
}

const appStore = new AppStore();
export default appStore;
