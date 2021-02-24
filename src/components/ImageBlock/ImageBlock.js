import { observer } from 'mobx-react-lite';
import { createRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-regular-svg-icons';
import PlaceholderImage from '../../assets/imagePlaceholder.jpg';
import appStore from '../../store/appStore';
import styles from './imageBlock.module.css';

const ImageBlock = ({ className }) => {
  const inputRef = createRef();

  const { image, setImage } = appStore;

  const fileClickHandler = () => {
    if (!inputRef.current) return;
    inputRef.current.click();
  }

  const fileChangeHandler = ({ target: { files } }) => {
    if (!files.length) return;
    const file = files[0];
    setImage(file);
  }

  const btnClick = (callback) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    callback(e);
  }

  const clearImage = () => setImage(null);

  const imageUrl = image
    ? window.URL.createObjectURL(image)
    : PlaceholderImage;

  return (
    <div className={`${className} flex flex-col`}>
      <p>Please select image</p>
      <div className="relative flex justify-center items-center max-h-full w-full border-blue-500 border-2 rounded bg-gray-200">
        <img className="max-h-full" src={imageUrl} />
        <div className="flex items-center justify-center absolute w-full h-full bg-black transition opacity-0 hover:opacity-100 bg-opacity-0 hover:bg-opacity-50">
          <button onClick={btnClick(fileClickHandler)} className=" icon-btn p-2 m-2 rounded border-2 border-white bg-white hover:border-blue-500 transition">
            <FontAwesomeIcon className="" icon={faEdit} size='lg' />
          </button>
          {
            image &&
            <button onClick={btnClick(clearImage)} className="icon-btn p-2 m-2 rounded border-2 border-white bg-white hover:border-blue-500 transition-all">
              <FontAwesomeIcon className="" icon={faTrashAlt} size='lg' />
            </button>
          }
        </div>
      </div>
      <input ref={inputRef} onChange={fileChangeHandler} type="file" accept="image/*" hidden />
    </div>
  );
};

export default observer(ImageBlock);