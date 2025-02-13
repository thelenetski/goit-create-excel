import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import css from './SignUpForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { signUp } from '../../redux/auth/operations';
import { closeModal } from '../../redux/modal/slice';
import { selectAuthLoading } from '../../redux/auth/selectors';
import Timer from '../Timer/Timer';
import flag from '../../assets/flag.png';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Name must be at least 3 characters')
    .required('Name is required'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Phone number is required'),
  policy: yup.boolean().oneOf([true], 'Ви повинні погодитися з умовами'),
});

const SignUpForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectAuthLoading);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    dispatch(signUp(data))
      .unwrap()
      .then(() => {
        dispatch(closeModal());
        toast.success('Register successfully!');
      })
      .catch(e => {
        toast.error(e);
      });
  };

  return (
    <>
      <h4 className={css.title}>Реєструйся просто зараз</h4>
      <Timer />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={css.formGroup}>
          <input
            type="text"
            placeholder="Введи своє ім'я"
            {...register('name')}
            className={css.input}
          />
          {errors.name && <p className={css.error}>{errors.name.message}</p>}
        </div>
        <div className={css.formGroup}>
          <input
            type="email"
            placeholder="Введи свій E-mail"
            {...register('email', { required: true })}
            className={css.input}
          />
          {errors.email && <p className={css.error}>{errors.email.message}</p>}
        </div>
        <div className={`${css.formGroup} ${css.phoneBox}`}>
          <img src={flag} alt="ua-flag" />
          <input
            type="tel"
            placeholder="+380 95 -- -- ---"
            {...register('phone')}
            className={css.input}
          />

          {errors.phone && <p className={css.error}>{errors.phone.message}</p>}
        </div>
        <div className={css.privacyWrap}>
          <input
            type="checkbox"
            id="acceptTerms"
            placeholder="policy"
            {...register('policy', { required: true })}
            className={css.checkbox}
          />
          <label htmlFor="acceptTerms">
            Згоден з{' '}
            <a href="#" target="_blank" rel="noopener noreferrer">
              Політика конфиденційності
            </a>{' '}
            та{' '}
            <a href="#" target="_blank" rel="noopener noreferrer">
              Умови користування послугами
            </a>
          </label>
          {errors.policy && (
            <p className={css.error}>{errors.policy.message}</p>
          )}
        </div>

        <button type="submit" className={css.signUpButton}>
          {loading.signUp ? 'Обробка  ...' : 'Зареєструватися'}
        </button>
      </form>
    </>
  );
};

export default SignUpForm;
