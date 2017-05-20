class PlayersService {
  constructor($q) {
    'ngInject';
    
    this.$q = $q;

    this.players = [
      {"id": 1, "name": "Lebron James", "position": "F", "teamId": 2},
      {"id": 2, "name": "Steph Curry", "position": "G", "teamId": 4},
      {"id": 3, "name": "Isaiah Thomas", "position": "G", "teamId": 1},
      {"id": 4, "name": "Kevin Durant", "position": "F", "teamId": 4},
      {"id": 5, "name": "Klay Thompson", "position": "G", "teamId": 4},
      {"id": 6, "name": "Kyrie Irving", "position": "G", "teamId": 2},
      {"id": 7, "name": "LaMarcus Aldridge", "position": "F", "teamId": 3},
      {"id": 8, "name": "John Wall", "position": "G", "teamId": 5},
      {"id": 9, "name": "Marcus Smart", "position": "F", "teamId": 1},
      {"id": 10, "name": "Bradley Beal", "position": "G", "teamId": 5}
    ];
  }  

  getPlayers() {
   return this.$q.when(this.players);
  }
}

export default PlayersService;