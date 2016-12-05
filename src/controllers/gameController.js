import roomMethods from '../models/roomMethods';
import rooms from '../models/rooms';
import gameMethods from '../models/gameMethods';
import charMethods from '../models/characterMethods';
import character from '../models/character';

gameController.$inject = ['$scope'];

export default function gameController($scope) {
  // Initialize the game to start in the Foyer
  $scope.characterHealth = character.hp;
  $scope.inventory = character.inventory;
  $scope.currentRoom = rooms.Foyer;
  $scope.roomInv = rooms.Foyer.inventory;

  // On door click
  $scope.changeRoom = function(currRoom, direction) {
    $scope.currentRoom = roomMethods.getRoom(currRoom, direction);
    $scope.roomInv = $scope.currentRoom.inventory;
  };

  // If user clicks monster
  $scope.monsterClick = function(monster) {
    gameMethods.hurtCharacter(monster);
    $scope.characterHealth = character.hp;
  };

  // On item in room click
  $scope.itemClick = function(item, roomAreaNum, currRoom) {
    charMethods.pickUpItem(item, currRoom);
    $scope.roomInv = currRoom.inventory;
    $scope.inventory = character.inventory;
    $scope.currentRoom[roomAreaNum] = {};
  };

}
