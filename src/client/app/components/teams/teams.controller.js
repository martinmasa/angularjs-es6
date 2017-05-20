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
    this.TeamsService.setSelectedTeam(team);
  }

  isSelectedTeam(team) {
    const selectedTeam = this.TeamsService.getSelectedTeam();
    return selectedTeam && selectedTeam.id === team.id;
  }
}

export default TeamsController;