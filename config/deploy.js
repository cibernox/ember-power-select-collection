module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'ember-power-select-collection',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
