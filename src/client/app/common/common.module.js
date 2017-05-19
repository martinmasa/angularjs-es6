import angular from 'angular';

import TeamsService from './services/teams.service';

const CommonModule = angular
  .module('common', [])
  .service('TeamsService', TeamsService);

export default CommonModule;
