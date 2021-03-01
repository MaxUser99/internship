import { makeAutoObservable } from 'mobx';

export const MODALS = {
  AUTH: "AUTH"
};

class UiStore {
  // openedModal = null;
  openedModal = MODALS.AUTH;

  constructor() {
    makeAutoObservable(this);
  }

  openModal = (modalName) => {
    this.openedModal = modalName;
  }
}

const uiStore = new UiStore();
export default uiStore;
