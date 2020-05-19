"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AuthTokens = _interopRequireDefault(require("../model/AuthTokens"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject"));

var _InlineObject2 = _interopRequireDefault(require("../model/InlineObject1"));

var _InlineObject3 = _interopRequireDefault(require("../model/InlineObject2"));

var _InlineObject4 = _interopRequireDefault(require("../model/InlineObject3"));

var _InlineObject5 = _interopRequireDefault(require("../model/InlineObject4"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse201"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Auth service.
* @module api/AuthApi
* @version 0.1.0
*/
var AuthApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AuthApi. 
  * @alias module:api/AuthApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AuthApi(apiClient) {
    _classCallCheck(this, AuthApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the authForgotPasswordPost operation.
   * @callback module:api/AuthApi~authForgotPasswordPostCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Forgot password
   * An email will be sent to reset password.
   * @param {module:model/InlineObject3} inlineObject3 
   * @param {module:api/AuthApi~authForgotPasswordPostCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(AuthApi, [{
    key: "authForgotPasswordPost",
    value: function authForgotPasswordPost(inlineObject3, callback) {
      var postBody = inlineObject3; // verify the required parameter 'inlineObject3' is set

      if (inlineObject3 === undefined || inlineObject3 === null) {
        throw new _Error["default"]("Missing the required parameter 'inlineObject3' when calling authForgotPasswordPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/auth/forgot-password', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the authLoginPost operation.
     * @callback module:api/AuthApi~authLoginPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Login
     * @param {module:model/InlineObject1} inlineObject1 
     * @param {module:api/AuthApi~authLoginPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse201}
     */

  }, {
    key: "authLoginPost",
    value: function authLoginPost(inlineObject1, callback) {
      var postBody = inlineObject1; // verify the required parameter 'inlineObject1' is set

      if (inlineObject1 === undefined || inlineObject1 === null) {
        throw new _Error["default"]("Missing the required parameter 'inlineObject1' when calling authLoginPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/auth/login', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the authRefreshTokensPost operation.
     * @callback module:api/AuthApi~authRefreshTokensPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AuthTokens} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Refresh auth tokens
     * @param {module:model/InlineObject2} inlineObject2 
     * @param {module:api/AuthApi~authRefreshTokensPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AuthTokens}
     */

  }, {
    key: "authRefreshTokensPost",
    value: function authRefreshTokensPost(inlineObject2, callback) {
      var postBody = inlineObject2; // verify the required parameter 'inlineObject2' is set

      if (inlineObject2 === undefined || inlineObject2 === null) {
        throw new _Error["default"]("Missing the required parameter 'inlineObject2' when calling authRefreshTokensPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _AuthTokens["default"];
      return this.apiClient.callApi('/auth/refresh-tokens', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the authRegisterPost operation.
     * @callback module:api/AuthApi~authRegisterPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register as user
     * @param {module:model/InlineObject} inlineObject 
     * @param {module:api/AuthApi~authRegisterPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse201}
     */

  }, {
    key: "authRegisterPost",
    value: function authRegisterPost(inlineObject, callback) {
      var postBody = inlineObject; // verify the required parameter 'inlineObject' is set

      if (inlineObject === undefined || inlineObject === null) {
        throw new _Error["default"]("Missing the required parameter 'inlineObject' when calling authRegisterPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/auth/register', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the authResetPasswordPost operation.
     * @callback module:api/AuthApi~authResetPasswordPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reset password
     * @param {String} token The reset password token
     * @param {module:model/InlineObject4} inlineObject4 
     * @param {module:api/AuthApi~authResetPasswordPostCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "authResetPasswordPost",
    value: function authResetPasswordPost(token, inlineObject4, callback) {
      var postBody = inlineObject4; // verify the required parameter 'token' is set

      if (token === undefined || token === null) {
        throw new _Error["default"]("Missing the required parameter 'token' when calling authResetPasswordPost");
      } // verify the required parameter 'inlineObject4' is set


      if (inlineObject4 === undefined || inlineObject4 === null) {
        throw new _Error["default"]("Missing the required parameter 'inlineObject4' when calling authResetPasswordPost");
      }

      var pathParams = {};
      var queryParams = {
        'token': token
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/auth/reset-password', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return AuthApi;
}();

exports["default"] = AuthApi;