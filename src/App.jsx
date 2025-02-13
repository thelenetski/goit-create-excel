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
import { useMediaQuery } from 'react-responsive';

function App() {
  const type = useSelector(selectTypeModal);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="main">
      <div className="wrapper">
        <div className="sideWrap">
          <Logo />
          <div className="promoWrap">
            <PromoBox>Безоплатний вебінар</PromoBox>
            <PromoBox>
              Старт: <b>10 січня 19:30</b>
            </PromoBox>
          </div>
          <TitleBlock />
          {isMobile && <SignUpMobile />}
        </div>
        {!isMobile && (
          <div className="signupWrap">
            <SignUpForm />
          </div>
        )}
      </div>
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
