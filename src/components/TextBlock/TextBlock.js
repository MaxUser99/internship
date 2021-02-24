import { observer } from 'mobx-react-lite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import appStore from '../../store/appStore';

const TextBlock = ({ className }) => {
  const { imageHeight, setText, text } = appStore;

  const changeHandler = ({ target: { value } }) => setText(value);

  const clearText = () => setText('');

  return (
    <div className={className}>
      <div className="flex justify-between">
        <p className="leading-9 font-semibold text-lg">Enter tags</p>
        {
          !!text.length &&
          <button onClick={clearText} className="focus:border-transparent">
            <FontAwesomeIcon icon={faTimesCircle} />
          </button>
        }
      </div>
      {
        !!imageHeight &&
        <textarea
          value={text }
          onChange={changeHandler}
          style={{ minHeight: imageHeight }}
          placeholder='tags...'
          className="p-2 focus:border-blue-700 outline-none border-2 border-blue-500 rounded w-full"
        />
      }
    </div>
  );
};

export default observer(TextBlock);