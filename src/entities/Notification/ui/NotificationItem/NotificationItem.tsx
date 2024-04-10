import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';
import { Notification } from 'entities/Notification/model';
import cls from './styles.module.scss';

interface NotificationItemProps {
  className?: string;
  item: Notification;
}

export const NotificationItem = memo(({
  className,
  item,
}: NotificationItemProps) => {
  const content = (
    <Card
      className={classNames(cls.NotificationItem, {}, [className])}
      theme={CardTheme.OUTLINED}
    >
      <Text title={item.title} text={item.description} />
    </Card>
  );

  if (item.href) {
    return (
      <a className={cls.link} href={item.href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return content;
});
