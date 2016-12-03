import angular from 'angular';
import character from './character';
import game from './gameController';
// import items from './items';
// import monsters from 'monsters';
import room from './room';

// create the module for controllers
const controllers = angular.module('controllers', []);

controllers.controller('roomController', room);

controllers.controller('gameController', game);
controllers.controller('characterController', character);
// controllers.controller('items', items);
// controllers.controller('monsters', monsters);

export default controllers.name;