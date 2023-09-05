import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev: any) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(
        classes.Sidebar,
        { [classes.collapsed]: collapsed },
        [className]
      )}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={classes.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={classes.items}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.main}
          className={classes.item}
        >
          <MainIcon className={classes.icon} />
          <span className={classes.link}>{t('Home Page')}</span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.about}
          className={classes.item}
        >
          <AboutIcon className={classes.icon} />
          <span className={classes.link}>{t('About Us')}</span>
        </AppLink>
      </div>
      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={classes.lang} />
      </div>
    </div>
  );
};
