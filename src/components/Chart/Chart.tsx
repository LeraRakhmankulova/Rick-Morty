import { Bar } from "./Bar";
import styles from "./index.module.css";

export const Chart = () => {
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
      <Bar/>
    </div>
  );
};
