import { observer } from 'mobx-react-lite';

const TextBlock = ({ className }) => {
  return (
    <div className={className}>text block</div>
  );
};

export default observer(TextBlock);