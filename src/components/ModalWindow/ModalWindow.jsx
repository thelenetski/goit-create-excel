import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/modal/slice';
import { selectIsOpenModal } from '../../redux/modal/selectors';
import styles from './ModalWindow.module.css';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import close from '../../assets/close.png';
import Logo from '../Logo/Logo';

const ModalWindow = ({ children }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsOpenModal);

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  useEffect(() => {
    isOpen
      ? document.body.classList.add('no-scroll')
      : document.body.classList.remove('no-scroll');
  }, [isOpen]);

  return createPortal(
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModalHandler}
        className={styles.modalWrapper}
        ariaHideApp={false}
        overlayClassName={styles.modalOverlay}
      >
        <Logo />
        <button className={styles.btnClose} onClick={closeModalHandler}>
          <img src={close} alt="close" />
        </button>
        <div className={styles.modalContent}>{children}</div>
      </Modal>
    </>,
    document.getElementById('modal-root')
  );
};

export default ModalWindow;
