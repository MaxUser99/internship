import { observer } from 'mobx-react-lite';

const SubmitButton = ({ className }) => {
  return (
    <button className={`${className}`}>submit</button>
  );
};

export default observer(SubmitButton);