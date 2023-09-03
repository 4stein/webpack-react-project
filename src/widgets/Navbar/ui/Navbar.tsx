import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';
import classes from './Navbar.module.scss';

interface NavbarProps {
  className: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
      <ul className={classes.links}>
        <li>
          <AppLink to="/" theme={AppLinkTheme.SECONDARY}>
            {t('Home Page')}
          </AppLink>
        </li>
        <li>
          <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
            {t('About Us')}
          </AppLink>
        </li>
      </ul>
    </div>
  );
};
