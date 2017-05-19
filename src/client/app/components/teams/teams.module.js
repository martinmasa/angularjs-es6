import angular from 'angular';

import TeamItemModule from './team-item/team-item.module';

import teamsComponent from './teams.component';

const TeamsModule = angular
  .module('teams', [
    TeamItemModule.name
  ])
  .component('teams', teamsComponent);

export default TeamsModule;
