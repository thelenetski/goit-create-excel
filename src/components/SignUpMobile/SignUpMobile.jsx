import css from './SignUpMobile.module.css';
import { useDispatch } from 'react-redux';
import { openRegistration } from '../../redux/modal/slice';
import Timer from '../Timer/Timer';

const SignUpMobile = () => {
  const dispatch = useDispatch();
  const handlerSignUp = () => {
    dispatch(openRegistration());
  };

  return (
    <div className={css.SignUpMobileWrap}>
      <h4>Реєструйся просто зараз</h4>
      <Timer />
      <button onClick={handlerSignUp}>Зареєструватися</button>
    </div>
  );
};

export default SignUpMobile;
