import './App.css';
import { Toaster } from 'react-hot-toast';
import ModalWindow from './components/ModalWindow/ModalWindow.jsx';
import { modalTypes } from './redux/modal/slice.js';
import { selectTypeModal } from './redux/modal/selectors.js';
import { useSelector } from 'react-redux';
import Logo from './components/Logo/Logo.jsx';
import PromoBox from './components/PromoBox/PromoBox.jsx';
import TitleBlock from './components/TitleBlock/TitleBlock.jsx';
import SignUpMobile from './components/SignUpMobile/SignUpMobile.jsx';
import SignUpForm from './components/SignUpForm/SignUpForm.jsx';

function App() {
  const type = useSelector(selectTypeModal);

  return (
    <div className="main">
      <Logo />
      <PromoBox>Безоплатний вебінар</PromoBox>
      <PromoBox>
        Старт: <b>10 січня 19:30</b>
      </PromoBox>
      <TitleBlock />
      <SignUpMobile />
      <ModalWindow>
        {type === modalTypes.register && <SignUpForm />}
      </ModalWindow>
      <div>
        <Toaster />
      </div>
    </div>
  );
}

export default App;
