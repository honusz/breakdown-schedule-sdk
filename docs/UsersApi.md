# BreakdownSchedSdk.UsersApi

All URIs are relative to *http://localhost:3000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersGet**](UsersApi.md#usersGet) | **GET** /users | Get all users
[**usersIdDelete**](UsersApi.md#usersIdDelete) | **DELETE** /users/{id} | Delete a user
[**usersIdGet**](UsersApi.md#usersIdGet) | **GET** /users/{id} | Get a user
[**usersIdPatch**](UsersApi.md#usersIdPatch) | **PATCH** /users/{id} | Update a user
[**usersPost**](UsersApi.md#usersPost) | **POST** /users | Create a user



## usersGet

> [User] usersGet(opts)

Get all users

Only admins can retrieve all users.

### Example

```javascript
import BreakdownSchedSdk from 'breakdown_sched_sdk';
let defaultClient = BreakdownSchedSdk.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BreakdownSchedSdk.UsersApi();
let opts = {
  'name': "name_example", // String | User name
  'role': "role_example", // String | User role
  'sortBy': "sortBy_example", // String | sort by query in the form of field:desc/asc (ex. name:asc)
  'limit': 56, // Number | Maximum number of users
  'page': 1 // Number | Page number
};
apiInstance.usersGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| User name | [optional] 
 **role** | **String**| User role | [optional] 
 **sortBy** | **String**| sort by query in the form of field:desc/asc (ex. name:asc) | [optional] 
 **limit** | **Number**| Maximum number of users | [optional] 
 **page** | **Number**| Page number | [optional] [default to 1]

### Return type

[**[User]**](User.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersIdDelete

> usersIdDelete(id)

Delete a user

Logged in users can delete only themselves. Only admins can delete other users.

### Example

```javascript
import BreakdownSchedSdk from 'breakdown_sched_sdk';
let defaultClient = BreakdownSchedSdk.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BreakdownSchedSdk.UsersApi();
let id = "id_example"; // String | User id
apiInstance.usersIdDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| User id | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersIdGet

> User usersIdGet(id)

Get a user

Logged in users can fetch only their own user information. Only admins can fetch other users.

### Example

```javascript
import BreakdownSchedSdk from 'breakdown_sched_sdk';
let defaultClient = BreakdownSchedSdk.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BreakdownSchedSdk.UsersApi();
let id = "id_example"; // String | User id
apiInstance.usersIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| User id | 

### Return type

[**User**](User.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersIdPatch

> User usersIdPatch(id, inlineObject6)

Update a user

Logged in users can only update their own information. Only admins can update other users.

### Example

```javascript
import BreakdownSchedSdk from 'breakdown_sched_sdk';
let defaultClient = BreakdownSchedSdk.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BreakdownSchedSdk.UsersApi();
let id = "id_example"; // String | User id
let inlineObject6 = new BreakdownSchedSdk.InlineObject6(); // InlineObject6 | 
apiInstance.usersIdPatch(id, inlineObject6, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| User id | 
 **inlineObject6** | [**InlineObject6**](InlineObject6.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## usersPost

> User usersPost(inlineObject5)

Create a user

Only admins can create other users.

### Example

```javascript
import BreakdownSchedSdk from 'breakdown_sched_sdk';
let defaultClient = BreakdownSchedSdk.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BreakdownSchedSdk.UsersApi();
let inlineObject5 = new BreakdownSchedSdk.InlineObject5(); // InlineObject5 | 
apiInstance.usersPost(inlineObject5, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject5** | [**InlineObject5**](InlineObject5.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

