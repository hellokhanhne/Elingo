const Loading = require('../assets/icons/Loading.gif');
const Back = require('../assets/icons/Back.png');
const Vietnam = require('../assets/icons/vietnam.png');
const Indonesia = require('../assets/icons/indonesia.png');
const China = require('../assets/icons/china.png');
const Spain = require('../assets/icons/spain.png');
const USA = require('../assets/icons/USA.png');

const Facebook = require('../assets/icons/facebook.png');
const Google = require('../assets/icons/google.png');
const AppStore = require('../assets/icons/app-store.png');
const YouTube = require('../assets/icons/youtube.png');
const TikTok = require('../assets/icons/tik-tok.png');

const socialIcons = {
  Facebook,
  Google,
  AppStore,
  YouTube,
  TikTok,
};

const Happy = require('../assets/icons/happy.png');
const Career = require('../assets/icons/career.png');
const Education = require('../assets/icons/education.png');
const Plane = require('../assets/icons/plane.png');
const Piece = require('../assets/icons/piece.png');

const reasonsIcons = {
  Happy,
  Career,
  Education,
  Plane,
  Piece,
};

const ICONS = {
  Loading,
  Back,
  Vietnam,
  Indonesia,
  China,
  Spain,
  USA,
  ...socialIcons,
  ...reasonsIcons,
};

export default ICONS;
