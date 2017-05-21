describe('PlayersService', () => {
  let PlayersService,
      $rootScope;

  beforeEach(angular.mock.module('common'));

  beforeEach(inject(($injector) => {
    PlayersService = $injector.get('PlayersService');
    $rootScope = $injector.get('$rootScope');
  }));
  
  describe('constructor()', () => {
    it('should initialise list of players', () => {
      expect(PlayersService.players).toBeDefined();
    });
  });
  
  describe('getPlayers()', () => {
    it('should get list of players', () => {
      const expectedPlayers = [
        {"id": 7, "name": "LaMarcus Aldridge", "position": "F", "teamId": 3},
        {"id": 8, "name": "John Wall", "position": "G", "teamId": 5}
      ];
      
      PlayersService.players = expectedPlayers;

      let promise = PlayersService.getPlayers();

      promise.then((data) => {
        expect(data).toEqual(expectedPlayers);
      });

      $rootScope.$digest();
    });
  }); 
});
