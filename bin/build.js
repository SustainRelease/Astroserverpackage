var sites = require('./siteManager.json');
for (let key in sites) {
  console.log("Building " + key + " on port " + sites[key].port);
  require(sites[key].scriptPath)(sites[key].port,sites[key].subRoute);
}
