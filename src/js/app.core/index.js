import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';

import AppConfig from './config';
import SERVER from './server';
import setup from './setup';

import AccountService from './services/account';

import LayoutController from './controllers/layout';
import UserController from './controllers/user';

angular
  .module('app.core', ['ui.router', 'ngCookies'])
  .config(AppConfig)
  .run(setup)
  .constant('SERVER', SERVER)
  .service('AccountService', AccountService)
  .controller('LayoutController', LayoutController)
  .controller('UserController', UserController);
