var sites = require('./siteManager.json');
for (let key in sites) {
  require(sites[key].scriptPath)(sites[key].port,sites[key].subRoute);
}
