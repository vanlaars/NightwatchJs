var LOCATORS = {
  repoDescription :  '.repository-description',
  currentRepo     : '.js-current-repository',   
}

var TEXT = {
  repoDescriptionText : 'UI automated testing framework based on node.js and selenium webdriver',
  currentRepoText     : 'nightwatch',
}

var timeout = 10000;
var url = 'https://github.com/beatfactor/nightwatch';

function NightWatchGithubPage(browser) {
    this.browser = browser;
}

NightWatchGithubPage.prototype = {
  waitForPageToLoad : function() {
    this.browser.waitForElementVisible(LOCATORS['repoDescription'], timeout)
  },

  swithToTab : function(browser){
    browser.window_handles(function(result){
    var handle = result.value[1];
    browser.switchWindow(handle);
    });  
    console.log('Switched to GitHub tab');
  },

  assertRepo : function(){
    this.browser.assert.urlContains(url);
    this.browser.useCss().waitForElementVisible(LOCATORS['repoDescription'], timeout)
    this.browser.assert.containsText(LOCATORS['repoDescription'], TEXT['repoDescriptionText']);
    this.browser.assert.containsText(LOCATORS['currentRepo'], TEXT['currentRepoText']);
  },

}

module.exports = NightWatchGithubPage

        
      
