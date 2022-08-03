import { motion } from 'framer-motion';
import type { ChangeEvent, FC, FocusEvent, KeyboardEvent } from 'react';
import { useMemo } from 'react';
import { validateIsValueIsNumeric } from '../../../utils/validator';

export type Props = {
  value: string;
  onChange: (value: string) => void;
  length?: number;
  className?: string;
  gap?: number;
  disabled?: boolean;
};

const OneTimePasswordInput: FC<Props> = ({
  value,
  onChange,
  length = 6,
  className = 'common-input input-focus p-2',
  gap = 20,
  disabled,
}) => {
  const items = useMemo<string[]>(() => {
    const valueArray = value.split('');
    const items: Array<string> = [];

    for (let i = 0; i < length; i++) {
      const char = valueArray[i];

      if (validateIsValueIsNumeric(char)) {
        items.push(char);
      } else {
        items.push('');
      }
    }

    return items;
  }, [value, length]);

  const focusToNextInput = (target: HTMLElement) => {
    const nextElementSibling =
      target.nextElementSibling as HTMLInputElement | null;

    if (nextElementSibling) {
      nextElementSibling.focus();
    }
  };

  const focusToPrevInput = (target: HTMLElement) => {
    const previousElementSibling =
      target.previousElementSibling as HTMLInputElement | null;

    if (previousElementSibling) {
      previousElementSibling.focus();
    }
  };

  const inputOnChange = (e: ChangeEvent<HTMLInputElement>, idx: number) => {
    const target = e.target;
    let targetValue = target.value.trim();
    const isTargetValueDigit = validateIsValueIsNumeric(targetValue);

    if (!isTargetValueDigit && targetValue !== '') {
      return;
    }

    targetValue = isTargetValueDigit ? targetValue : ' ';

    const targetValueLength = targetValue.length;

    if (targetValueLength === 1) {
      const newValue =
        value.substring(0, idx) + targetValue + value.substring(idx + 1);

      onChange(newValue);

      if (!isTargetValueDigit) {
        return;
      }

      focusToNextInput(target);
    } else if (targetValueLength === length) {
      onChange(targetValue);

      target.blur();
    }
  };

  const inputOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    const target = e.target as HTMLInputElement;

    if (key === 'ArrowRight' || key === 'ArrowDown') {
      e.preventDefault();
      return focusToNextInput(target);
    }

    if (key === 'ArrowLeft' || key === 'ArrowUp') {
      e.preventDefault();
      return focusToPrevInput(target);
    }

    const targetValue = target.value;

    target.setSelectionRange(0, targetValue.length);

    if (e.key !== 'Backspace' || targetValue !== '') {
      return;
    }

    focusToPrevInput(target);
  };
  const inputOnFocus = (e: FocusEvent<HTMLInputElement>) => {
    const { target } = e;

    target.setSelectionRange(0, target.value.length);
  };

  return (
    <div
      className="grid"
      style={{ gridTemplateColumns: `repeat(${length}, minmax(0, 1fr))`, gap }}
    >
      {items.map((digit, idx) => (
        <motion.input
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{
            staggerChildren: 0.5,
            delayChildren: 0.5,
            staggerDirection: 1,
            ease: 'easeInOut',
          }}
          key={idx}
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          autoFocus={idx === 0}
          pattern="\d{1}"
          maxLength={1}
          className={className + ' text-center'}
          value={digit}
          onChange={(e) => inputOnChange(e, idx)}
          onKeyDown={inputOnKeyDown}
          onFocus={inputOnFocus}
          disabled={disabled}
        />
      ))}
    </div>
  );
};

export default OneTimePasswordInput;
