import { observer } from 'mobx-react-lite';
import appStore from '../../store/appStore';
import { USER_STATUS } from '../../store/userStore';
import GuestButton from './GuestButton';
import SubscriberButton from './SubscriberButton';
import UserButton from './UserButton';

const SubmitButton = () => {
  const { requiredStatus, image } = appStore;

  const hasImage = !!image;

  console.log({ hasImage });
  let button = null;
  if (requiredStatus === USER_STATUS.GUEST) button = <GuestButton hasImage={hasImage} />;
  if (requiredStatus === USER_STATUS.USER) button = <UserButton hasImage={hasImage} />;
  if (requiredStatus === USER_STATUS.SUBSCRIBER) button = <SubscriberButton hasImage={hasImage} />;

  return (
    <div className="flex justify-center items-center">
      { button}
    </div>
  );
};

export default observer(SubmitButton);