class TeamsService {
  constructor($q) {
    'ngInject';
    
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
}

export default TeamsService;
