const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'JFH-Website-master',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

