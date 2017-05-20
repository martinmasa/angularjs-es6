import angular from 'angular';

import TeamsModule from './teams/teams.module';
import PlayersModule from './players/players.module';

const ComponentsModule = angular.module('components', [
  TeamsModule.name,
  PlayersModule.name
]);

export default ComponentsModule;
