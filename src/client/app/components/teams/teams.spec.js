describe('Teams component', () => {
  
  beforeEach(angular.mock.module('teams', ($provide) => {
    $provide.value('TeamsService', {
      getTeams: angular.noop,
      getSelectedTeam: angular.noop,
      setSelectedTeam: angular.noop
    });
  }));
  
  describe('controller', () => {
    let $componentController,
        $q,
        $rootScope,
        TeamsService,
        controller,
        mockTeams = [
          {"id": 1, "name": "Celtics", "city": "Boston"},
          {"id": 2, "name": "Cavaliers", "city": "Cleveland"}
        ];

    beforeEach(inject(($injector) => {
      $componentController = $injector.get('$componentController');
      $rootScope = $injector.get('$rootScope');
      $q = $injector.get('$q');
      TeamsService = $injector.get('TeamsService');

      controller = $componentController('teams', { TeamsService: TeamsService });
    }));
    
    describe('$onInit()', () => {
      it('should get list of teams from service', () => {
        spyOn(TeamsService, 'getTeams').and.callFake(() => $q.when(mockTeams));
          
        controller.teams = null;

        controller.$onInit();

        $rootScope.$digest();

        expect(Array.isArray(controller.teams)).toBe(true);
      });
    });
    
    describe('onTeamSelection()', () => {
      it('should update selected team', () => {
        spyOn(TeamsService, 'setSelectedTeam');

        controller.onTeamSelection(mockTeams[0]);

        expect(TeamsService.setSelectedTeam).toHaveBeenCalledWith(mockTeams[0]);
      });
    });
    
    describe('isSelectedTeam()', () => {
      it('should confirm if team is selected', () => {  
        spyOn(TeamsService, 'getSelectedTeam').and.returnValue(mockTeams[0]);

        expect(controller.isSelectedTeam(mockTeams[0])).toBe(true);
      });
      it('should confirm if team is not selected', () => {  
        spyOn(TeamsService, 'getSelectedTeam').and.returnValue(mockTeams[0]);

        expect(controller.isSelectedTeam(mockTeams[1])).toBe(false);
      });
    });
  });
});
  