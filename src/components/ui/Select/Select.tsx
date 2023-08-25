import { FC, useEffect, useRef, useState } from "react";
import { Option } from "./Option";
import { ReactComponent as ArrowIcon } from "./../../../assets/arrow-down.svg";
import styles from "./index.module.css";

type SelectProps = {
  selected: Option | null;
  options: Option[];
  placeholder?: Option["title"];
  mode?: "rows" | "cells";
  status?: "default" | "invalid";
  onChange?: (selected: Option["value"]) => void;
  onClose?: () => void;
};

export const Select: FC<SelectProps> = props => {
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
  const handlePlaceHolderClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div ref={rootRef} data-is-active={isOpen} data-mode={mode}>
      <div className={styles.select}>
        <div
          data-status={status}
          data-selected={!!selected?.value}
          role="button"
          tabIndex={0}
        >
          {selected?.title || placeholder}
        </div>
        <button onClick={handlePlaceHolderClick}>
          <ArrowIcon />
        </button>
      </div>
      {isOpen && (
        <ul className={styles.select__list}>
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
