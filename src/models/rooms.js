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
  ObservationTower: {
    name: 'Observation Tower',
    description: 'The door leads to a spiral stairway that winds up and up and up to a room with a ' + 
    'glass ceiling and lots of windows. Each window looks out onto a very very different landscape...',
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
    description: 'Shelves, shelves and more shelves. Books, books and more books. Where there aren\'t ' + 
    'shelves there are tables covered with books, charts, maps and graphs. A well-used room for ' + 
    'research on esoteric subjects.',
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
  MasterBedroom: {
    name: 'Master Bedroom',
    description: 'A huge Heart-shaped bed with red satin bedclothes sits alone in ' + 
    'wood-panelled room with a mirrored ceiling.',
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
    description: 'Smells of food waft out the moment you open the door. A large fireplace stands ' + 
    'in one corner, a sink in the other. The center is a huge island with grills, ' + 
    'built-in ovens and pots and pans hanging above it.',
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
    description: 'Shelves with various boxes, cans and jars. Indiscriminate meat chunks hangs ' + 
    'from hooks on the ceiling,a sweet smell slightly rancid smell permeates the small, dark room.',
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
  GameRoom: {
    name: 'Game Room',
    description: 'You enter a room that appers to be filled with trophies of all sorts, from stuffed animals to ' +
    'marksman awards, to mounted heads. You notice the lights give off weird shadows, and out of the corner of your ' +
    'eye you notice something moving, was it a shadow, or something else?',
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
  Catacombs: {
    name: 'Catacombs',
    description: 'After walking through the door you notice the hallway starts leading down into the earth ' +
    'where you see grave after grave.',
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
  SmallBedroom: {
    name: 'Small Bedroom',
    description: 'You enter a bedroom with a small cot, a dresser, and a closet, is there anything around you?',
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
  Sunroom: {
    name: 'Sunroom',
    description: 'You enter an empty room that is surrounded by windows to the outside, but as you look into the windows ' +
    'you realize that it is not night but just empty darkness, a void of nothingness.',
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
  DiningRoom: {
    name: 'Dining Room',
    description: 'As you take in the room you see many things that could possibly hold treasures of the imagination ' +
    'there is a dining room table, cabinets, and what appears to be a corner that is strangley cover in shadows.',
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
  Staircase: {
    name: 'Staircase',
    description: 'The door you opened leads to a stair case that appears to keep rising and rising. All that you see as you ascend is more steps.',
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
  Abbatoir: {
    name: 'Abbatoir',
    description: 'Something about the statue of the falcon draws you in. And when you press on the left eye a section of the wall slides away revealing a small stone room filled with torture devices: an Iron Maiden, the Rack, a Water Board and a table with various clamps, pinchers, flensers and flayers. You realize it would be best not to stay in this room too long.',
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
  Sauna: {
    name: 'Sauna',
    description: 'A deep fog appears behind the door, but it is warm and inviting. You enter into a traditional wet sauna, wood benches along the walls and white fluffy towels on a table just inside the door. A wooden bucket of water sits next to a pile of glowing stones in the center of the room. There is no visible source of fire to heat the stones.',
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
  SubBasement: {
    name: 'Sub-Basement',
    description: 'It\'s even colder, damper and somehow darker down here. Water drips steadily from the ceiling,coming ' +
    'from everywhere and nowhere at once. Empty chests and bundles of moldy cloth line the walls, but you don\'t feel like ' +
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
  SubSubBasement: {
    name: 'Sub-Sub-Basement',
    description: 'A few inches of water cover the floor because water pours out of crumbling hole in the ceiling and flows toward a crack in the far corner of the cave-like room. ' +
    'You must be really really far under the mansion now. The less time spent ' +
    'exploring this room the better.',
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

rooms.notARoom = ['You stare into a void, the void stares back into you. You cannot continue in this direction.',
  'Behind the door is a brick wall, you clearly cannot go this way.',
  'As you open the door and begin to take a step, a giant chasm appears below you. Grabbing the door frame, you pull barely pull yourself back in. You cannot go this way.',
  'A deep fog appears behind the door, you try to step into it but it chokes you. You frantically run to the room behind you. You cannot continue this way.',
  'The door will not open, it\'s locked and the lock is rusted.',
  'You grab the door knob and it falls off in your hand. Looks like this way is blocked to you.',
  'You start to pull the door open, but it\'s jammed. Maybe something on the other side is blocking the way?',
  'You begin to push the door in, something slams it shut against you. You cannot continue in this direction.'
];
rooms.availableRooms = ['Hallway', 'Ballroom', 'Basement', 'ObservationTower', 'Study', 'Bedroom', 'Pantry', 'Kitchen', 'GameRoom', 'Catacomb', 'SmallBedroom', 'Sunroom', 'DiningRoom', 'Staircase', 'Abbatoir', 'Sauna', 'SubBasement', 'SubSubBasement'];

export default rooms;
