import { useMemo } from 'react';
import { observer } from "mobx-react-lite";
import { BUTTON_STATE, classes } from './constants';
import appStore from '../../store/appStore';

const stateToText = {
  [BUTTON_STATE.OK]: 'Submit',
  [BUTTON_STATE.DISABLED]: 'Please, enter some tags, and attach image'
};

const GuestButton = ({ hasImage }) => {
  const { text } = appStore;

  const state = useMemo(() => {
    if (text.length && hasImage) return BUTTON_STATE.OK;
    return BUTTON_STATE.DISABLED;
  }, [text, hasImage]);

  const className = classes[state];
  const disabled = state === BUTTON_STATE.INVALID || state === BUTTON_STATE.DISABLED;

  return (
    <button className={className} disabled={disabled}>
      { stateToText[state] }
    </button>
  );
}

export default observer(GuestButton);
