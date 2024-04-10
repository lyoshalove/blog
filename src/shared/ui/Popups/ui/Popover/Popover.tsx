import { classNames } from 'shared/lib/classNames/classNames';
import { Popover as Popup } from '@headlessui/react';
import { ReactNode } from 'react';
import { DropdownDirection } from 'shared/types/ui';
import cls from './Popover.module.scss';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

interface PopoverProps {
    className?: string;
    direction?: DropdownDirection;
    trigger: ReactNode;
    children: ReactNode;
}

export function Popover(props: PopoverProps) {
  const {
    className,
    direction = 'bottom right',
    trigger,
    children,
  } = props;

  const menuClasses = [mapDirectionClass[direction]];

  return (
    <Popup className={classNames(cls.Popover, {}, [className, popupCls.popup])}>
      <Popup.Button className={popupCls.trigger}>{trigger}</Popup.Button>

      <Popup.Panel className={classNames(cls.panel, {}, menuClasses)}>
        {children}
      </Popup.Panel>
    </Popup>
  );
}
