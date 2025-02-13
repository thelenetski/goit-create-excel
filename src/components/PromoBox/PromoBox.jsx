import css from './PromoBox.module.css';

const PromoBox = ({ children }) => {
  return (
    <div className={css.PromoBoxWrap}>
      {children}
      <div>
        <div className={css.square}></div>
        <div className={css.square}></div>
        <div className={css.square}></div>
        <div className={css.square}></div>
      </div>
    </div>
  );
};

export default PromoBox;
