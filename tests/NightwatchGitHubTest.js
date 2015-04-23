// Import Page Objects
var NightWatchPage = require('../pages/NightWatchPage')
var NightWatchGitHubPage = require('../pages/NightWatchGitHubPage')

// Pages 
var nightWatchPage, nightWatchGitHubPage
  
// Test 
module.exports = {
  // tags that can be used for cli override
  tags: ['github', 'nightwatch'],

  'Navigate to NightWatch page' : function (browser) {
    nightWatchPage = new NightWatchPage(browser);
    nightWatchPage.navigateToNighWatchPage();
    nightWatchPage.assertUrl();
  },

  'Click on GitHub button' : function (browser) {
    nightWatchPage = new NightWatchPage(browser);
    nightWatchPage.navigateToGithub();
  },

  'Switch to new tab and check NightWatch GitHub Page' : function (browser) {
    nightWatchGitHubPage = new NightWatchGitHubPage(browser);
    nightWatchGitHubPage.swithToTab(browser, 1);
    nightWatchGitHubPage.assertRepo();
  },

  'Switch back to NightWatch page' : function(browser){
    nightWatchGitHubPage = new NightWatchGitHubPage(browser);
    nightWatchGitHubPage.swithToTab(browser, 0);
    nightWatchPage.assertUrl();
  },

  'Goto Twitter Page NightWatch' : function(browser){
    nightWatchPage = new NightWatchPage(browser);
    nightWatchPage.navigateToTwitter();
    nightWatchGitHubPage.swithToTab(browser, 2);
    browser.assert.urlContains('https://twitter.com/nightwatchjs');
  },

  ' Stop browser' : function (browser) {
    browser
      .end();
  }


};