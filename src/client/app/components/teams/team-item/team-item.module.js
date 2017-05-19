import angular from 'angular';

import teamItemComponent from './team-item.component';

const TeamItemModule = angular
  .module('teamItem', [])
  .component('teamItem', teamItemComponent);

export default TeamItemModule;
