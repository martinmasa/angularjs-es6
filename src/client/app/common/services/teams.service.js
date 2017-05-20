class TeamsService {
  constructor($rootScope, $q) {
    'ngInject';
    
    this.$rootScope = $rootScope;
    this.$q = $q;

    this.teams = [
      {"id": 1, "name": "Celtics", "city": "Boston"},
      {"id": 2, "name": "Cavaliers", "city": "Cleveland"},
      {"id": 3, "name": "Spurs", "city": "San Antonio"},
      {"id": 4, "name": "Warriors", "city": "Golden State"},
      {"id": 5, "name": "Wizards", "city": "Washington"}
    ];
  }

  getTeams() {
    return this.$q.when(this.teams);
  }

  getSelectedTeam() {
    return this.selectedTeam;
  }
  
  setSelectedTeam(team) {
    this.selectedTeam = team;
    this.$rootScope.$broadcast('teamSelectionChange', team);
  }
}

export default TeamsService;
