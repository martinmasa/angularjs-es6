import angular from 'angular';

import playersComponent from './players.component';

const PlayersModule = angular
  .module('players', [])
  .component('players', playersComponent);

export default PlayersModule;
