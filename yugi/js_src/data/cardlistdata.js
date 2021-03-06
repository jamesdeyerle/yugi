/**
 * The minimum set of data to send when synchronizing game state.
 */

goog.provide('yugi.data.CardListData');

goog.require('goog.Disposable');
goog.require('yugi.model.Area');
goog.require('yugi.model.Serializable');



/**
 * The minimum set of data to send when synchronizing game state.
 * @constructor
 * @extends {goog.Disposable}
 * @implements {yugi.model.Serializable}
 */
yugi.data.CardListData = function() {
  goog.base(this);

  /**
   * @type {!Array.<string>}
   * @private
   */
  this.cardKeys_ = [];

  /**
   * @type {!yugi.model.Area}
   * @private
   */
  this.area_ = yugi.model.Area.UNSPECIFIED;
};
goog.inherits(yugi.data.CardListData, goog.Disposable);


/**
 * @return {!Array.<string>} The card keys in the card list.
 */
yugi.data.CardListData.prototype.getCardKeys = function() {
  return this.cardKeys_;
};


/**
 * @param {!Array.<string>} cardKeys The card keys.
 */
yugi.data.CardListData.prototype.setCardKeys = function(cardKeys) {
  this.cardKeys_ = cardKeys;
};


/**
 * @return {!yugi.model.Area} The area for the card list.
 */
yugi.data.CardListData.prototype.getArea = function() {
  return this.area_;
};


/**
 * @param {!yugi.model.Area} area The area for the card list.
 */
yugi.data.CardListData.prototype.setArea = function(area) {
  this.area_ = area;
};


/** @override */
yugi.data.CardListData.prototype.toJson = function() {
  var json = {};
  json['keys'] = this.cardKeys_;
  json['a'] = this.area_;
  return json;
};


/** @override */
yugi.data.CardListData.prototype.setFromJson = function(json) {
  this.area_ = json['a'];
  this.cardKeys_ = json['keys'];
};
