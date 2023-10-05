import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import classes from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props: any) => {
  const { t } = useTranslation();
  const { className } = props;

  return (
    <div className={classNames(classes.LoginForm, {}, [className])}>
      <Input
        autofocus
        className={classes.input}
        type="text"
        placeholder={t('Enter username')}
      />
      <Input
        className={classes.input}
        type="text"
        placeholder={t('Enter password')}
      />
      <Button className={classes.loginBtn}>{t('Sign in')}</Button>
    </div>
  );
};
