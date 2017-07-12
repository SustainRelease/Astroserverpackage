var sites = require('./siteManager.json');
for (let key in sites) {
  console.log("Building " + key);
  require(sites[key].scriptPath)(sites[key].port,sites[key].subRoute);
}
