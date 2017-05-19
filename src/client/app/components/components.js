import angular from 'angular';

import TeamsModule from './teams/teams.module';

const ComponentsModule = angular.module('components', [
  TeamsModule.name
]);

export default ComponentsModule;
