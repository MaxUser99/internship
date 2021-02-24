import Header from '../Header/Header';
import ImageBlock from '../ImageBlock/ImageBlock';
import SubmitButton from '../Main/components/SubmitButton/SubmitButton';
import TextBlock from '../Main/components/TextBlock/TextBlock';
import './App.css';

function App() {
  return (
    <div className="grid grid-rows-layout grid-cols-4 gap-4">
      <Header className="col-span-full" />
      <ImageBlock className="col-span-2" />
      <TextBlock className="col-span-2" />
      <SubmitButton className="col-span-full" />
    </div>
  );
}

export default App;
