describe('TeamsService', () => {
  let TeamsService, 
      $rootScope;

  beforeEach(angular.mock.module('common'));

  beforeEach(inject(($injector) => {
    TeamsService = $injector.get('TeamsService');
    $rootScope = $injector.get('$rootScope');
  }));
  
  describe('constructor()', () => {
    it('should initialise list of teams', () => {
      expect(TeamsService.teams).toBeDefined();
    });
  });
  
  describe('getTeams()', () => {
    it('should get list of teams', () => {
      const expectedTeams = [
        {"id": 3, "name": "Spurs", "city": "San Antonio"},
        {"id": 4, "name": "Warriors", "city": "Golden State"}
      ];
      
      TeamsService.teams = expectedTeams;

      let promise = TeamsService.getTeams();

      promise.then((data) => {
        expect(data).toEqual(expectedTeams);
      });

      $rootScope.$digest();
    });
  });
  
  describe('getSelectedTeam()', () => {
    it('should get the selected team', () => {
      const expectedTeam = {"id": 3, "name": "Spurs", "city": "San Antonio"};

      TeamsService.selectedTeam = expectedTeam;

      expect(TeamsService.getSelectedTeam()).toEqual(expectedTeam);
    });
  });
  
  describe('setSelectedTeam()', () => {
    it('should update the selected team', () => {
      const expectedTeam = {"id": 0, "name": "Monstars", "city": "Outer Space"};

      TeamsService.selectedTeam = null;

      TeamsService.setSelectedTeam(expectedTeam);

      expect(TeamsService.selectedTeam).toEqual(expectedTeam);
    });
    
    it('should broadcast change event with new selected team', () => {
      const expectedTeam = {"id": 0, "name": "Monstars", "city": "Outer Space"};

      TeamsService.selectedTeam = null;

      spyOn($rootScope, '$broadcast');

      TeamsService.setSelectedTeam(expectedTeam);

      expect($rootScope.$broadcast).toHaveBeenCalledWith('teamSelectionChange', expectedTeam);
    });
  });
});
