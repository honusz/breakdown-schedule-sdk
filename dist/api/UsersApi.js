"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject5"));

var _InlineObject2 = _interopRequireDefault(require("../model/InlineObject6"));

var _User = _interopRequireDefault(require("../model/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Users service.
* @module api/UsersApi
* @version 0.1.0
*/
var UsersApi = /*#__PURE__*/function () {
  /**
  * Constructs a new UsersApi. 
  * @alias module:api/UsersApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UsersApi(apiClient) {
    _classCallCheck(this, UsersApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the usersGet operation.
   * @callback module:api/UsersApi~usersGetCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/User>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get all users
   * Only admins can retrieve all users.
   * @param {Object} opts Optional parameters
   * @param {String} opts.name User name
   * @param {String} opts.role User role
   * @param {String} opts.sortBy sort by query in the form of field:desc/asc (ex. name:asc)
   * @param {Number} opts.limit Maximum number of users
   * @param {Number} opts.page Page number (default to 1)
   * @param {module:api/UsersApi~usersGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/User>}
   */


  _createClass(UsersApi, [{
    key: "usersGet",
    value: function usersGet(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'name': opts['name'],
        'role': opts['role'],
        'sortBy': opts['sortBy'],
        'limit': opts['limit'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_User["default"]];
      return this.apiClient.callApi('/users', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersIdDelete operation.
     * @callback module:api/UsersApi~usersIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a user
     * Logged in users can delete only themselves. Only admins can delete other users.
     * @param {String} id User id
     * @param {module:api/UsersApi~usersIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "usersIdDelete",
    value: function usersIdDelete(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling usersIdDelete");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/users/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersIdGet operation.
     * @callback module:api/UsersApi~usersIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a user
     * Logged in users can fetch only their own user information. Only admins can fetch other users.
     * @param {String} id User id
     * @param {module:api/UsersApi~usersIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */

  }, {
    key: "usersIdGet",
    value: function usersIdGet(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling usersIdGet");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _User["default"];
      return this.apiClient.callApi('/users/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersIdPatch operation.
     * @callback module:api/UsersApi~usersIdPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a user
     * Logged in users can only update their own information. Only admins can update other users.
     * @param {String} id User id
     * @param {module:model/InlineObject6} inlineObject6 
     * @param {module:api/UsersApi~usersIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */

  }, {
    key: "usersIdPatch",
    value: function usersIdPatch(id, inlineObject6, callback) {
      var postBody = inlineObject6; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling usersIdPatch");
      } // verify the required parameter 'inlineObject6' is set


      if (inlineObject6 === undefined || inlineObject6 === null) {
        throw new _Error["default"]("Missing the required parameter 'inlineObject6' when calling usersIdPatch");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _User["default"];
      return this.apiClient.callApi('/users/{id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersPost operation.
     * @callback module:api/UsersApi~usersPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a user
     * Only admins can create other users.
     * @param {module:model/InlineObject5} inlineObject5 
     * @param {module:api/UsersApi~usersPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */

  }, {
    key: "usersPost",
    value: function usersPost(inlineObject5, callback) {
      var postBody = inlineObject5; // verify the required parameter 'inlineObject5' is set

      if (inlineObject5 === undefined || inlineObject5 === null) {
        throw new _Error["default"]("Missing the required parameter 'inlineObject5' when calling usersPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _User["default"];
      return this.apiClient.callApi('/users', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return UsersApi;
}();

exports["default"] = UsersApi;