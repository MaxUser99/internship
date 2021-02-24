import { makeAutoObservable } from 'mobx';

export const USER_STATUS = {
  GUEST: 'GUEST',
  USER: 'USER',
  SUBSCRIBER: 'SUBSCRIBER'
};

class UserStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  get userStatus() {
    if (!this.user) return USER_STATUS.GUEST;
    return USER_STATUS.USER;
  }
}

const userStore = new UserStore();
export default userStore;
