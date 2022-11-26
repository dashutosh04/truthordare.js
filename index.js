/**
 * --> Truth or Dare API <--
 * Available Functions -> `Truth` , `Dare` , `Wyr` , `Nhie` , `Paranoia`
 */

module.exports = {
  Truth: require("./src/tord.js").truth,
  Dare: require("./src/tord.js").dare,
  Wyr: require("./src/wyr.js").wyr,
  Nhie: require("./src/nhie.js").nhie,
  Paranoia: require("./src/paranoia.js").paranoia,
};
