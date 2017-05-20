import angular from 'angular';

import TeamsService from './services/teams.service';
import PlayersService from './services/players.service';

const CommonModule = angular
  .module('common', [])
  .service('TeamsService', TeamsService)
  .service('PlayersService', PlayersService);

export default CommonModule;
