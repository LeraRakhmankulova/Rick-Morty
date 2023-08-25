import { useState } from "react";
import { Select } from "./components/ui/Select/Select";
import "./styles/index.scss"
import {Option} from './components/ui/Select/Option'

const App = () => {
    const [month, setMonthValue] = useState('');
  const handleMonthSelect = (value: string) => {
    setMonthValue(value);
  };
    const options: Option[] =[
        {
            value: "year",
            title: "За последний месяц"
        },
        {
            value: "half_year",
            title: "За последние 6 месяцев"
        },
        {
            value: "month",
            title: "За последний год"
        }
    ]
    const selectedMonth = options.find((item) => item.value === month);
    return (
        <div className="App">
         <Select
          mode='cells'
          options={options}
          selected={selectedMonth || null}
          onChange={handleMonthSelect}
          placeholder='Выберите месяц'
        />
        </div>
    );
}

export default App;
