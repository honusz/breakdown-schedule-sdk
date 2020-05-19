# BreakdownSchedSdk.AuthApi

All URIs are relative to *http://localhost:3000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authForgotPasswordPost**](AuthApi.md#authForgotPasswordPost) | **POST** /auth/forgot-password | Forgot password
[**authLoginPost**](AuthApi.md#authLoginPost) | **POST** /auth/login | Login
[**authRefreshTokensPost**](AuthApi.md#authRefreshTokensPost) | **POST** /auth/refresh-tokens | Refresh auth tokens
[**authRegisterPost**](AuthApi.md#authRegisterPost) | **POST** /auth/register | Register as user
[**authResetPasswordPost**](AuthApi.md#authResetPasswordPost) | **POST** /auth/reset-password | Reset password



## authForgotPasswordPost

> authForgotPasswordPost(inlineObject3)

Forgot password

An email will be sent to reset password.

### Example

```javascript
import BreakdownSchedSdk from 'breakdown_sched_sdk';

let apiInstance = new BreakdownSchedSdk.AuthApi();
let inlineObject3 = new BreakdownSchedSdk.InlineObject3(); // InlineObject3 | 
apiInstance.authForgotPasswordPost(inlineObject3, (error, data, response) => {
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
 **inlineObject3** | [**InlineObject3**](InlineObject3.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## authLoginPost

> InlineResponse201 authLoginPost(inlineObject1)

Login

### Example

```javascript
import BreakdownSchedSdk from 'breakdown_sched_sdk';

let apiInstance = new BreakdownSchedSdk.AuthApi();
let inlineObject1 = new BreakdownSchedSdk.InlineObject1(); // InlineObject1 | 
apiInstance.authLoginPost(inlineObject1, (error, data, response) => {
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
 **inlineObject1** | [**InlineObject1**](InlineObject1.md)|  | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## authRefreshTokensPost

> AuthTokens authRefreshTokensPost(inlineObject2)

Refresh auth tokens

### Example

```javascript
import BreakdownSchedSdk from 'breakdown_sched_sdk';

let apiInstance = new BreakdownSchedSdk.AuthApi();
let inlineObject2 = new BreakdownSchedSdk.InlineObject2(); // InlineObject2 | 
apiInstance.authRefreshTokensPost(inlineObject2, (error, data, response) => {
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
 **inlineObject2** | [**InlineObject2**](InlineObject2.md)|  | 

### Return type

[**AuthTokens**](AuthTokens.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## authRegisterPost

> InlineResponse201 authRegisterPost(inlineObject)

Register as user

### Example

```javascript
import BreakdownSchedSdk from 'breakdown_sched_sdk';

let apiInstance = new BreakdownSchedSdk.AuthApi();
let inlineObject = new BreakdownSchedSdk.InlineObject(); // InlineObject | 
apiInstance.authRegisterPost(inlineObject, (error, data, response) => {
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
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## authResetPasswordPost

> authResetPasswordPost(token, inlineObject4)

Reset password

### Example

```javascript
import BreakdownSchedSdk from 'breakdown_sched_sdk';

let apiInstance = new BreakdownSchedSdk.AuthApi();
let token = "token_example"; // String | The reset password token
let inlineObject4 = new BreakdownSchedSdk.InlineObject4(); // InlineObject4 | 
apiInstance.authResetPasswordPost(token, inlineObject4, (error, data, response) => {
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
 **token** | **String**| The reset password token | 
 **inlineObject4** | [**InlineObject4**](InlineObject4.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

