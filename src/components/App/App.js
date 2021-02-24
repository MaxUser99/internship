import Header from '../Header/Header';
import ImageBlock from '../ImageBlock/ImageBlock';
import SubmitButton from '../SubmitButton/SubmitButton';
import TextBlock from '../TextBlock/TextBlock';
import './App.css';

function App() {
  return (
    <div className="grid grid-rows-layout gap-4 h-screen">
      <Header className="" />
      <div className="max-w-screen-lg container flex mx-auto flex-col md:flex-row">
        <ImageBlock className="flex flex-col w-full m-2" />
        <TextBlock className="flex flex-col w-full m-2"/>
      </div>
      <SubmitButton className="" />
    </div>
  );
}

export default App;
