import template from './team-item.html';
import './team-item.scss'

const teamItemComponent = {
  bindings: {
    team: '<',
    selectTeam: '&'
  },
  template
};

export default teamItemComponent;