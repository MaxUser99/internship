import { observer } from 'mobx-react-lite';
import { useDropzone } from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-regular-svg-icons';
import PlaceholderImage from '../../assets/imagePlaceholder.jpg';
import appStore from '../../store/appStore';

const ImageBlock = ({ className }) => {
  const onDrop = files => {
    if (!files.length) return;
    const file = files[0];
    setImage(file);
  }
  const { getRootProps, getInputProps, isDragActive, inputRef, rootRef } = useDropzone({
    onDrop,
    accept: 'image/*',
    noClick: true,
    multiple: false,
  });
  const { image, setImage, setImageHeight } = appStore;

  const fileClickHandler = () => {
    if (!inputRef.current) return;
    inputRef.current.click();
    console.log('current: ', inputRef.current)
  }

  const btnClick = (callback) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    callback(e);
  }

  const clearImage = () => setImage(null);

  const loadHandler = () => {
    if (!rootRef.current) return;
    const height = rootRef.current.offsetHeight;
    setImageHeight(height);
  }

  const imageUrl = image
    ? window.URL.createObjectURL(image)
    : PlaceholderImage;

  const hoverClasses = isDragActive
    ? ''
    : 'hidden';

  return (
    <div className={`${className}`}>
      <p>Please select image</p>
      <div {...getRootProps()} className="relative flex justify-center items-center max-h-full w-full border-blue-500 border-2 rounded bg-gray-200">
        <img onLoad={loadHandler} id="selected-image" className="max-h-full" src={imageUrl} />
        <div className={`flex items-center justify-center absolute w-full h-full bg-black transition bg-opacity-50 ${hoverClasses}`}>
          <p className="text-white text-xl">Drop Here</p>
        </div>
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
      <input {...getInputProps()} />
    </div>
  );
};

export default observer(ImageBlock);