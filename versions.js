//
// prepend any latest versions to the HEAD of this array
// currently we only use [0], but we may move to generating
// more information.
//

var VERSIONS = [
  '2017.3.3',
  '2017.3.2',
  '2017.2.0',
  '2017.1.1'
];

var CURRENT_RELEASE = VERSIONS[0]

if ( ! module ) {
  module = {};
}

module.exports = {
  VERSIONS: VERSIONS,
  CURRENT_RELEASE: CURRENT_RELEASE
}