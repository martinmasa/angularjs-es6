import angular from 'angular';

import appComponent from './app.component';
import './app.scss';

angular
  .module('app', [])
  .component('app', appComponent);
  