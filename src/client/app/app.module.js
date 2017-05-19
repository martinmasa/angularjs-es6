import angular from 'angular';

import CommonModule from './common/common.module';
import ComponentsModule from './components/components';

import appComponent from './app.component';

import './app.scss';

angular
  .module('app', [
    CommonModule.name,
    ComponentsModule.name
  ])
  .component('app', appComponent);
