class PlayersController {
  constructor($rootScope, PlayersService, TeamsService) {
    'ngInject';

    this.$rootScope = $rootScope;

    this.TeamsService = TeamsService;
    this.PlayersService = PlayersService;
  }
  
  updateVisiblePlayers(event, team) {
    this.visiblePlayers = team ? 
      this.players.filter((player) => player.teamId === team.id) :
      this.players;
  }

  $onInit() {
    this.PlayersService.getPlayers()
      .then(result => this.visiblePlayers = this.players = result);

    this.teamSelectionChangeListener = this.$rootScope.$on('teamSelectionChange', this.updateVisiblePlayers.bind(this));
  }
}

export default PlayersController;
