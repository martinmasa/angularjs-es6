class TeamsController {
  constructor(TeamsService) {
    'ngInject';
    
    this.TeamsService = TeamsService;
  }

  $onInit() {
    this.TeamsService.getTeams()
      .then(result => this.teams = result);
  }

  onTeamSelection(team) {
    console.log('SELECTED TEAM', team);
  }
}

export default TeamsController;