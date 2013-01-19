/**
 * Game UI methods and constants.
 */

goog.provide('yugi.game.ui');
goog.provide('yugi.game.ui.Css');
goog.provide('yugi.game.ui.Id');
goog.provide('yugi.game.ui.ZIndex');

goog.require('goog.asserts');
goog.require('goog.dom');
goog.require('yugi');


/**
 * The maximum height of a card in pixels.
 * @type {number}
 * @const
 */
yugi.game.ui.MAX_CARD_HEIGHT = 200;


/**
 * Common CSS classes used throughout the application.
 * @enum {string}
 */
yugi.game.ui.Css = {
  CARD_SIZE: goog.getCssName('yugi-card-size'),
  MODE_SWAPPER_CONTAINER: goog.getCssName('yugi-mode-swapper-container'),
  OPPONENT: goog.getCssName('opponent')
};


/**
 * Unique IDs for elements in yugioh.
 * @enum {string}
 */
yugi.game.ui.Id = {
  OPP_HAND: yugi.uniqueId('opp-hand'),
  PLAYER_HAND: yugi.uniqueId('player-hand'),
  ZONE_MONSTER_1: yugi.uniqueId('zone-monster-1'),
  ZONE_MONSTER_2: yugi.uniqueId('zone-monster-2'),
  ZONE_MONSTER_3: yugi.uniqueId('zone-monster-3'),
  ZONE_MONSTER_4: yugi.uniqueId('zone-monster-4'),
  ZONE_MONSTER_5: yugi.uniqueId('zone-monster-5'),
  ZONE_OPP_MONSTER_1: yugi.uniqueId('zone-opp-monster-1'),
  ZONE_OPP_MONSTER_2: yugi.uniqueId('zone-opp-monster-2'),
  ZONE_OPP_MONSTER_3: yugi.uniqueId('zone-opp-monster-3'),
  ZONE_OPP_MONSTER_4: yugi.uniqueId('zone-opp-monster-4'),
  ZONE_OPP_MONSTER_5: yugi.uniqueId('zone-opp-monster-5')
};


/**
 * The set of z-indices used in the game.  This is kept in sync with the list in
 * game/ui/main.css.
 * @enum {number}
 */
yugi.game.ui.ZIndex = {
  ATTACK_MASK: 200,
  ATTACK: 210,
  CARD: 10
};


/**
 * Gets the element for the given monster zone.
 * @param {number} zone The zone number.
 * @param {boolean=} opt_opponent True if it's the opponent's zone.
 * @return {Element} The monster zone element.
 */
yugi.game.ui.getMonsterZoneElement = function(zone, opt_opponent) {
  var id = yugi.game.ui.getMonsterZoneId(zone, opt_opponent);
  if (id) {
    return goog.dom.getElement(id);
  }
  return null;
};


/**
 * Gets the ID of the element for the given monster zone.
 * @param {number} zone The zone number.
 * @param {boolean=} opt_opponent True if it's the opponent's zone.
 * @return {string} The monster zone ID.
 */
yugi.game.ui.getMonsterZoneId = function(zone, opt_opponent) {
  goog.asserts.assert(0 <= zone && zone <= 4);
  if (opt_opponent) {
    switch (zone) {
      case 0:
        return yugi.game.ui.Id.ZONE_OPP_MONSTER_1;
      case 1:
        return yugi.game.ui.Id.ZONE_OPP_MONSTER_2;
      case 2:
        return yugi.game.ui.Id.ZONE_OPP_MONSTER_3;
      case 3:
        return yugi.game.ui.Id.ZONE_OPP_MONSTER_4;
      case 4:
        return yugi.game.ui.Id.ZONE_OPP_MONSTER_5;
    }
  } else {
    switch (zone) {
      case 0:
        return yugi.game.ui.Id.ZONE_MONSTER_1;
      case 1:
        return yugi.game.ui.Id.ZONE_MONSTER_2;
      case 2:
        return yugi.game.ui.Id.ZONE_MONSTER_3;
      case 3:
        return yugi.game.ui.Id.ZONE_MONSTER_4;
      case 4:
        return yugi.game.ui.Id.ZONE_MONSTER_5;
    }
  }
  // Should never get here because of the assert above.
  throw Error('Invalide monster zone ID requets.');
};
