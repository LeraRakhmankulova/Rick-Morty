import { MouseEventHandler, useEffect, useRef, useState } from "react";
import { Option } from "./Option";
// import  ArrowDown from './../../../assets/arrow.svg';

type SelectProps = {
  selected: Option | null;
  options: Option[];
  placeholder?: Option['title'];
  mode?: "rows" | "cells";
  status?: "default" | "invalid";
  onChange?: (selected: Option["value"]) => void;
  onClose?: () => void;
};

export const Select = (props: SelectProps) => {
  const {
    mode = "rows",
    options,
    placeholder,
    status = "default",
    selected,
    onChange,
    onClose,
  } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const { target } = event;
      if (target instanceof Node && !rootRef.current?.contains(target)) {
        isOpen && onClose?.();
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [isOpen, onClose]);

  const handleOptionClick = (value: Option["value"]) => {
    setIsOpen(false);
    onChange?.(value);
  };
  const handlePlaceHolderClick: MouseEventHandler<HTMLDivElement> = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div ref={rootRef} data-is-active={isOpen} data-mode={mode}>
      <div>arrow</div>
      <div
        data-status={status}
        data-selected={!!selected?.value}
        onClick={handlePlaceHolderClick}
        role="button"
        tabIndex={0}
      >
        {selected?.title || placeholder}
      </div>
      {isOpen && (
        <ul>
          {options.map((option) => (
            <Option
              key={option.value}
              option={option}
              onClick={handleOptionClick}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
