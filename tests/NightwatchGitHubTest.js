// Import Page Objects
var NightWatchPage = require('../pages/NightWatchPage')
var NightWatchGitHubPage = require('../pages/NightWatchGitHubPage')

// Pages 
var googlePage, nightWatchPage, nightWatchGitHubPage
  
// Test 
module.exports = {
  // tags that can be used for cli override
  tags: ['github', 'nightwatch'],

  'Navigate to NightWatch page' : function (browser) {
    nightWatchPage = new NightWatchPage(browser);
    nightWatchPage.navigateToNighWatchPage();
  },

  'Click on GitHub button' : function (browser) {
    nightWatchPage = new NightWatchPage(browser);
    nightWatchPage.assertUrl();
    nightWatchPage.navigateToGithub();
  },

  'Switch to new tab and check NightWatch GitHub Page' : function (browser) {
    nightWatchGitHubPage = new NightWatchGitHubPage(browser);
    nightWatchGitHubPage.swithToTab(browser);
    nightWatchGitHubPage.assertRepo();
  },

  ' Stop browser' : function (browser) {
    browser
      .end();
  }


};