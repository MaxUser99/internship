import { makeAutoObservable } from 'mobx';

export const MODALS = {
  AUTH: "AUTH"
};

class UiStore {
  openedModal = null;

  constructor() {
    makeAutoObservable(this);
  }

  openModal = (modalName) => {
    this.openedModal = modalName;
  }
}

const uiStore = new UiStore();
export default uiStore;
