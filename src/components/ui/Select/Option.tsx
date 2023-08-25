import { MouseEventHandler } from "react";

export type Option = { title: string; value: string };
type OptionProps = {
  option: Option;
  onClick: (value: Option["value"]) => void;
};
export const Option = (props: OptionProps) => {
  const {
    option: { value, title },
    onClick,
  } = props;

  const handleClick =
    (clickedValue: Option["value"]): MouseEventHandler<HTMLLIElement> =>
    () => {
      onClick(clickedValue);
    };

  return (
    <li value={value} onClick={handleClick(value)} tabIndex={0} style={{cursor: 'pointer'}}>
      {title}
    </li>
  );
};
