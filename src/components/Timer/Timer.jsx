import Countdown from 'react-countdown';
import css from './Timer.module.css';

const renderer = ({ days, hours, minutes, seconds }) => {
  return (
    <div className={css.timerWrap}>
      <div className={css.timeBox}>
        <p>{String(days).padStart(2, '0')}</p>
        <span>днів</span>
      </div>
      {':'}
      <div className={css.timeBox}>
        <p>{String(hours).padStart(2, '0')}</p>
        <span>годин</span>
      </div>
      {':'}
      <div className={css.timeBox}>
        <p>{String(minutes).padStart(2, '0')}</p>
        <span>хвилин</span>
      </div>
      {':'}
      <div className={css.timeBox}>
        <p>{String(seconds).padStart(2, '0')}</p>
        <span>секунд</span>
      </div>
    </div>
  );
};

const Timer = () => {
  return (
    <Countdown date={new Date('2025-03-01T00:00:00')} renderer={renderer} />
  );
};

export default Timer;
