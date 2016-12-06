// List of all the rooms in the game

const rooms = {
  Foyer: {
    name: 'Foyer',
    description: 'You\'re in the entry of a large, old house. More of a mansion, really. ' +
    'It looks like no one has kept up with cleaning or repairs in a long time, dust and ' +
    'cobwebs cover every surface, some of the furniture is draped in dingy once-white sheets.' +
    'There doesn\'t seem to be anyone here, might as well take a look around.',
    inventory: [],
    monster: false,
    roomArea1: {},
    roomArea2: {},
    roomArea3: {},
    roomArea4: {},
    roomArea5: {},
    roomArea6: {},
    roomArea7: {},
    roomArea8: {},
    northDoor: '',
    southDoor: '',
    eastDoor: '',
    westDoor: ''
  },
  Hallway: {
    name: 'Hallway',
    description: 'A long stately hallway, lined with fading paintings and dusty statues.' +
    'The lights look like old gas lamps, but none are lit. There\'s a door at the end of the hall.',
    inventory: [],
    monster: false,
    roomArea1: {},
    roomArea2: {},
    roomArea3: {},
    roomArea4: {},
    roomArea5: {},
    roomArea6: {},
    roomArea7: {},
    roomArea8: {},
    northDoor: '',
    southDoor: '',
    eastDoor: '',
    westDoor: ''
  },
  Ballroom: {
    name: 'Ballroom',
    description: 'This was once a magnificent ballroom: a crystal chandelier holds the promise of ' +
    'glittering, if it could only be dusted. The floor is a beautiful patchwork of exotic glossy woods, ' +
    'perfect for gliding along. A small stage must have once held musicians, but it sits empty and ' +
    'forgotten. The lamps cast a low, lonely glow on the once-stately room.',
    inventory: [],
    monster: false,
    roomArea1: {},
    roomArea2: {},
    roomArea3: {},
    roomArea4: {},
    roomArea5: {},
    roomArea6: {},
    roomArea7: {},
    roomArea8: {},
    northDoor: '',
    southDoor: '',
    eastDoor: '',
    westDoor: ''
  },
  Basement: {
    name: 'Basement',
    description: 'It\'s cold, dark, and damp down here. There\'s an echo of dripping water coming ' +
    'from everywhere and nowhere at once. Some barrels line the walls, but you don\'t feel like ' +
    'exploring given how dark it is.',
    inventory: [],
    monster: false,
    roomArea1: {},
    roomArea2: {},
    roomArea3: {},
    roomArea4: {},
    roomArea5: {},
    roomArea6: {},
    roomArea7: {},
    roomArea8: {},
    northDoor: '',
    southDoor: '',
    eastDoor: '',
    westDoor: ''
  },
  Observation_Tower: {
    name: 'Observation Tower',
    description: 'The door leads to a spiral stairway that winds up and up and up to a room with a glass ceiling and lots of windows. Each window looks out onto a very very different landscape...',
    inventory: [],
    monster: false,
    roomArea1: {},
    roomArea2: {},
    roomArea3: {},
    roomArea4: {},
    roomArea5: {},
    roomArea6: {},
    roomArea7: {},
    roomArea8: {},
    northDoor: '',
    southDoor: '',
    eastDoor: '',
    westDoor: ''
  },
  Study: {
    name: 'Study',
    description: 'Shelves, shelves and more shelves. Books, books and more books. Where there aren\'t shelves there are tables covered with books, charts, maps and graphs. A well-used room for research on esoteric subjects.',
    inventory: [],
    monster: false,
    roomArea1: {},
    roomArea2: {},
    roomArea3: {},
    roomArea4: {},
    roomArea5: {},
    roomArea6: {},
    roomArea7: {},
    roomArea8: {},
    northDoor: '',
    southDoor: '',
    eastDoor: '',
    westDoor: ''
  },
  Bedroom: {
    name: 'Bedroom',
    description: 'A huge Heart-shaped bed with red satin bedclothes sits alone in wood-panelled room with a mirrored ceiling.',
    inventory: [],
    monster: false,
    roomArea1: {},
    roomArea2: {},
    roomArea3: {},
    roomArea4: {},
    roomArea5: {},
    roomArea6: {},
    roomArea7: {},
    roomArea8: {},
    northDoor: '',
    southDoor: '',
    eastDoor: '',
    westDoor: ''
  },
  Kitchen: {
    name: 'Kitchen',
    description: 'Smells of food waft out the moment you open the door. A large fireplace stands in one corner, a sink in the other. The center is a huge island with grills, built-in ovens and pots and pans hanging above it.',
    inventory: [],
    monster: false,
    roomArea1: {},
    roomArea2: {},
    roomArea3: {},
    roomArea4: {},
    roomArea5: {},
    roomArea6: {},
    roomArea7: {},
    roomArea8: {},
    northDoor: '',
    southDoor: '',
    eastDoor: '',
    westDoor: ''
  },
  Pantry: {
    name: 'Pantry',
    description: 'Shelves with various boxes, cans and jars. Indiscriminate meat chunks hangs from hooks on the ceiling,a sweet smell slightly rancid smell permeates the small, dark room.',
    inventory: [],
    monster: false,
    roomArea1: {},
    roomArea2: {},
    roomArea3: {},
    roomArea4: {},
    roomArea5: {},
    roomArea6: {},
    roomArea7: {},
    roomArea8: {},
    northDoor: '',
    southDoor: '',
    eastDoor: '',
    westDoor: ''
  }
};

rooms.availableRooms = ['Hallway', 'Ballroom', 'Basement', 'Observation_Tower', 'Study', 'Bedroom', 'Pantry', 'Kitchen'];

export default rooms;
