import { observer } from 'mobx-react-lite';
import appStore from '../../store/appStore';

const TextBlock = ({ className }) => {
  const { imageHeight, setText } = appStore;

  const changeHandler = ({ target: { value }}) => setText(value);

  return (
    <div className={className}>
      Enter tags
      {
        !!imageHeight &&
        <textarea
          onChange={changeHandler}
          style={{ minHeight: imageHeight}}
          placeholder='tags...'
          className="p-2 focus:border-blue-700 outline-none border-2 border-blue-500 rounded w-full"
        />
      }
    </div>
  );
};

export default observer(TextBlock);