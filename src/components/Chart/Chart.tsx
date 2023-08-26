import { FC } from "react";
import { periodsMock } from "../../mocks/periods.mock";
import { Bar } from "./Bar";
import styles from "./index.module.css";
import { Option } from "../ui/Select/Option";

export const Chart: FC<{ period: string }> = ({ period }) => {
  const months: Record<string, string> = {
    January: "Янв",
    February: "Фев",
    March: "Март",
    April: "Апр",
    May: "Май",
    June: "Июнь",
    July: "Июль",
    August: "Авг",
    September: "Сент",
    October: "Окт",
    November: "Нояб",
    December: "Дек",
  };

  // const months = [
  //   "Янв",
  //   "Фев",
  //   "Март",
  //   "Апр",
  //   "Май",
  //   "Июнь",
  //   "Июль",
  //   "Авг",
  //   "Сент",
  //   "Окт",
  //   "Нояб",
  //   "Дек",
  // ];
  return (
    <div className={styles.chart}>
      <ul className={styles.chart__values}>
        <li>10 000</li>
        <li>5 000</li>
        <li>2 000</li>
        <li>1 000</li>
        <li>500</li>
        <li>0</li>
      </ul>
      <div className={styles.chart__bars}>
        {Object.keys(periodsMock["periods"][0]["graph"][`${period}`]).map(
          (el: string, idx: number) => (
            <div className={styles.bar__info} key={idx}>
              <Bar />
              <div className={styles.date}>{period === 'months'? el : months[el]}</div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
