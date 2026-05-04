import { EnvironmentTypes, SiteConfig, footerApp, headerApp, shellApp } from '@openedx/frontend-base';
import { authnApp } from '@openedx/frontend-app-authn';
import { instructorDashboardApp } from '@openedx/frontend-app-instructor-dashboard';
import { learnerDashboardApp } from '@openedx/frontend-app-learner-dashboard';
import { notificationsApp } from '@openedx/frontend-app-notifications';
import { createLegacyPluginApp, defaultSlotMap, defaultWidgetMap } from '@openedx/frontend-base-compat';
import envConfig, { slotCompatMap, widgetCompatMap } from './src/env.config.compat.jsx';

import '@openedx/frontend-base/shell/style';
import '@edx/brand/core.min.css';
import '@edx/brand/light.min.css';

const legacyPluginApp = createLegacyPluginApp({
  appId: 'io.edly.frontend.app.compat',
  envConfig,
  slotMap: { ...defaultSlotMap, ...slotCompatMap },
  widgetMap: { ...defaultWidgetMap, ...widgetCompatMap },
});

const siteConfig: SiteConfig = {
  siteId: 'frontend-template-dev',
  siteName: 'Frontend Template Dev',
  baseUrl: 'http://apps.local.openedx.io:8080',
  lmsBaseUrl: 'http://local.openedx.io:8000',
  cmsBaseUrl: 'http://studio.local.openedx.io:8001',
  loginUrl: 'http://local.openedx.io:8000/login',
  logoutUrl: 'http://local.openedx.io:8000/logout',
  commonAppConfig: {
    SUPPORT_URL: 'https://example.com/help/',
  },

  environment: EnvironmentTypes.DEVELOPMENT,
  apps: [
    shellApp,
    headerApp,
    footerApp,
    authnApp,
    learnerDashboardApp,
    {
      ...instructorDashboardApp,
      config: {
        ...instructorDashboardApp.config,
        SUPPORT_URL: 'https://example.com/help/instructor',
      },
    },
    notificationsApp,
    legacyPluginApp
  ],
  externalRoutes: [
    {
      role: 'org.openedx.frontend.role.profile',
      url: 'http://apps.local.openedx.io:1995/profile/'
    },
    {
      role: 'org.openedx.frontend.role.account',
      url: 'http://apps.local.openedx.io:1997/account/'
    },
    {
      role: 'org.openedx.frontend.role.logout',
      url: 'http://local.openedx.io:8000/logout'
    },
  ],

  runtimeConfigJsonUrl: '/api/frontend_site_config/v1/',
  accessTokenCookieName: 'edx-jwt-cookie-header-payload',
};

export default siteConfig;
