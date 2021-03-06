/**
 * Main bootstrapping file which gets the entire application going.
 */

goog.provide('yugi.admin.search');
goog.provide('yugi.admin.search.Main');

goog.require('goog.debug.Logger');
goog.require('goog.dom');
goog.require('yugi.Main');
goog.require('yugi.admin.search.ui.Search');
goog.require('yugi.model.Notifier');
goog.require('yugi.model.Search');
goog.require('yugi.model.Selection');
goog.require('yugi.model.User');
goog.require('yugi.service.AuthService');
goog.require('yugi.ui.footer.Footer');
goog.require('yugi.ui.header.Header');
goog.require('yugi.ui.selection.Selection');



/**
 * The container for all the main components of the application.
 * @param {string} signInOutUrl The URL to use to either sign in or out.
 * @param {string} deckManagerUrl The URL for the deck manager.
 * @param {string} userJson The user object as raw JSON.
 * @constructor
 * @extends {yugi.Main}
 */
yugi.admin.search.Main = function(signInOutUrl, deckManagerUrl, userJson) {
  goog.base(this);

  // Create all of the model/service classes.
  var user = yugi.model.User.register(userJson);
  var authService = yugi.service.AuthService.register(
      signInOutUrl, deckManagerUrl);
  var selectionModel = yugi.model.Selection.register();
  var searchModel = yugi.model.Search.register();
  var notifier = yugi.model.Notifier.register();

  // Render all of the UI components.
  var dom = goog.dom.getDomHelper();

  // Header
  var header = new yugi.ui.header.Header();
  header.render(dom.getElement('header'));

  // Footer
  var footer = new yugi.ui.footer.Footer();
  footer.render(dom.getElement('footer'));

  // Selection
  var selectionComponent = new yugi.ui.selection.Selection();
  selectionComponent.render(dom.getElement('main'));

  // Search
  var searchComponent = new yugi.admin.search.ui.Search();
  searchComponent.render(dom.getElement('main'));

  // Register all the disposables.
  this.registerDisposable(header);
  this.registerDisposable(selectionComponent);
  this.registerDisposable(searchComponent);
  this.registerDisposable(selectionModel);
  this.registerDisposable(searchModel);
  this.registerDisposable(notifier);
  this.registerDisposable(user);
  this.registerDisposable(authService);
};
goog.inherits(yugi.admin.search.Main, yugi.Main);


/**
 * @type {!goog.debug.Logger}
 * @protected
 */
yugi.admin.search.Main.prototype.logger = goog.debug.Logger.getLogger(
    'yugi.admin.search.Main');


/**
 * Main entry point to the program.  All bootstrapping happens here.
 * @param {string} signInOutUrl The URL to use to either sign in or out.
 * @param {string} deckManagerUrl The URL for the deck manager.
 * @param {string} userJson The user object as raw JSON.
 */
yugi.admin.search.bootstrap = function(signInOutUrl, deckManagerUrl, userJson) {
  new yugi.admin.search.Main(signInOutUrl, deckManagerUrl, userJson);
};


// Ensures the symbol will be visible after compiler renaming.
goog.exportSymbol('yugi.admin.search.bootstrap', yugi.admin.search.bootstrap);
