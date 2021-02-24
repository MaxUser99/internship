import { observer } from 'mobx-react-lite';

const ImageBlock = ({ className }) => {
  return (
    <div className={className}>
      image block
    </div>
  );
};

export default observer(ImageBlock);