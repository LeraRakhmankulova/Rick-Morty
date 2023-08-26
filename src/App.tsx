import { useState } from "react";
import { Select } from "./components/ui/Select/Select";
import "./styles/index.scss";
import { Option } from "./components/ui/Select/Option";
import { Chart } from "./components/Chart/Chart";

const App = () => {
 
  const [period, setPeriod] = useState<Option["value"]>("month");
  const handleMonthSelect = (period: string) => {
    setPeriod(period);
  };
  const options: Option[] = [
    {
      value: "month",
      title: "За последний месяц",
    },
    {
      value: "half_year",
      title: "За последние 6 месяцев",
    },
    {
      value: "year",
      title: "За последний год",
    },
  ];
  const selectedElement = options.find((item) => item.value === period);
  const selectedOprions = options.filter((item) => item.value !== period);

  return (
    <div className="App">
      <Select
        mode="cells"
        options={selectedOprions}
        selected={selectedElement || null}
        onChange={handleMonthSelect}
      />
      <Chart period={period}/>
    </div>
  );
};

export default App;
