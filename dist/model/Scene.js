"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Scene model module.
 * @module model/Scene
 * @version 0.1.0
 */
var Scene = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Scene</code>.
   * @alias module:model/Scene
   * @param episode {String} 
   * @param sceneNumber {String} 
   * @param setting {String} 
   * @param slug {String} 
   * @param timeOfDay {String} 
   * @param scriptDay {String} 
   */
  function Scene(episode, sceneNumber, setting, slug, timeOfDay, scriptDay) {
    _classCallCheck(this, Scene);

    Scene.initialize(this, episode, sceneNumber, setting, slug, timeOfDay, scriptDay);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Scene, null, [{
    key: "initialize",
    value: function initialize(obj, episode, sceneNumber, setting, slug, timeOfDay, scriptDay) {
      obj['episode'] = episode;
      obj['sceneNumber'] = sceneNumber;
      obj['setting'] = setting;
      obj['slug'] = slug;
      obj['timeOfDay'] = timeOfDay;
      obj['scriptDay'] = scriptDay;
    }
    /**
     * Constructs a <code>Scene</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Scene} obj Optional instance to populate.
     * @return {module:model/Scene} The populated <code>Scene</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Scene();

        if (data.hasOwnProperty('episode')) {
          obj['episode'] = _ApiClient["default"].convertToType(data['episode'], 'String');
        }

        if (data.hasOwnProperty('location')) {
          obj['location'] = _ApiClient["default"].convertToType(data['location'], 'String');
        }

        if (data.hasOwnProperty('sceneNumber')) {
          obj['sceneNumber'] = _ApiClient["default"].convertToType(data['sceneNumber'], 'String');
        }

        if (data.hasOwnProperty('setting')) {
          obj['setting'] = _ApiClient["default"].convertToType(data['setting'], 'String');
        }

        if (data.hasOwnProperty('slug')) {
          obj['slug'] = _ApiClient["default"].convertToType(data['slug'], 'String');
        }

        if (data.hasOwnProperty('timeOfDay')) {
          obj['timeOfDay'] = _ApiClient["default"].convertToType(data['timeOfDay'], 'String');
        }

        if (data.hasOwnProperty('scriptDay')) {
          obj['scriptDay'] = _ApiClient["default"].convertToType(data['scriptDay'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Scene;
}();
/**
 * @member {String} episode
 */


Scene.prototype['episode'] = undefined;
/**
 * @member {String} location
 */

Scene.prototype['location'] = undefined;
/**
 * @member {String} sceneNumber
 */

Scene.prototype['sceneNumber'] = undefined;
/**
 * @member {String} setting
 */

Scene.prototype['setting'] = undefined;
/**
 * @member {String} slug
 */

Scene.prototype['slug'] = undefined;
/**
 * @member {String} timeOfDay
 */

Scene.prototype['timeOfDay'] = undefined;
/**
 * @member {String} scriptDay
 */

Scene.prototype['scriptDay'] = undefined;
var _default = Scene;
exports["default"] = _default;