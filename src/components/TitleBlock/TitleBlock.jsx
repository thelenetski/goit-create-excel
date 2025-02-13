import css from './TitleBlock.module.css';

const TitleBlock = () => {
  return (
    <div className={css.TitleBlockWrap}>
      <h1>Навчіться створювати Excel-таблиці на pro-рівні</h1>
      <p>
        Опануйте функціонал Microsoft Excel, автоматизуйте свою роботу
        <br />
        та створюйте таблиці швидко
        <br /> і в задоволення
      </p>
    </div>
  );
};

export default TitleBlock;
