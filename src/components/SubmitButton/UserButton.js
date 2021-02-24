import { useMemo } from 'react';
import { observer } from "mobx-react-lite";
import { BUTTON_STATE, classes } from './constants';
import appStore from '../../store/appStore';
import userStore, { USER_STATUS } from '../../store/userStore';

const stateToText = {
  [BUTTON_STATE.OK]: 'Submit',
  [BUTTON_STATE.DISABLED]: 'Please, entere some tags',
  [BUTTON_STATE.INVALID]: 'Please Sign in'
};

const GuestButton = () => {
  const { text } = appStore;
  const { userStatus } = userStore;

  const state = useMemo(() => {
    if (!text.length) return BUTTON_STATE.DISABLED;
    if (userStatus === USER_STATUS.GUEST) return BUTTON_STATE.INVALID;
    return BUTTON_STATE.OK;
  }, [text]);

  const className = classes[state];
  const disabled = state === BUTTON_STATE.INVALID || state === BUTTON_STATE.DISABLED;

  return (
    <button className={className} disabled={disabled}>
      { stateToText[state] }
    </button>
  );
}

export default observer(GuestButton);
