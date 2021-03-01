import { makeAutoObservable } from 'mobx';
import { auth } from './firebase';

export const USER_STATUS = {
  GUEST: 'GUEST',
  USER: 'USER',
  SUBSCRIBER: 'SUBSCRIBER'
};

class UserStore {
  user = null;

  constructor() {
    makeAutoObservable(this);

    auth.onAuthStateChanged(user => {
      this.user = user;
      console.log('user: ', user);
    });
  }

  get userStatus() {
    if (!this.user) return USER_STATUS.GUEST;
    return USER_STATUS.USER;
  }
}

const userStore = new UserStore();
export default userStore;
