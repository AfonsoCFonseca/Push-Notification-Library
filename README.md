### ExNotifications

# Introduction
Javascript Notification Library

# Implementation
 - Put the files exn.min.js and exn.min.css on your project
 - Insert the two lines below on your html with the correct path

Javascript
```js
<script src="/dist/js/exn.min.js"></script>
```
Css
```js
<link href="/dist/css/exn.min.css" rel="stylesheet">
```

# Preview Types

Success Notification ( top animation )
```js
new ExNotification( {
		type : "success",
		title  : getRandTitle(),
		description  : getRandomText(),
		position : "top",
	})
```
<img src='https://github.com/afonsofcfonseca/ExNotifications/blob/master/gifs/successNormal.gif'>

Success Notification ( right animation )
```js
new ExNotification( {
		type : "success",
		title  : getRandTitle(),
		description  : getRandomText(),
		position : "right",
	})
```
<img src='https://github.com/AfonsoCFonseca/Push-Notification-Library/blob/master/gifs/successRight.gif'>

Error Notification
```js
new ExNotification( {
		type : "error",
		title  : getRandTitle(),
		description  : getRandomText(),
		position : "top",
	})
```
<img src='https://github.com/AfonsoCFonseca/Push-Notification-Library/blob/master/gifs/error.gif'>

Image Notification
```js
new ExNotification( {
		type : "success",
		title  : getRandTitle(),
		description  : getRandomText(),
		position : "top",
		imageUrl : "https://image.flaticon.com/icons/png/512/149/149071.png",
	})
```
<img src='https://github.com/AfonsoCFonseca/Push-Notification-Library/blob/master/gifs/successImage.gif'>

Timer Notification ( 1 second )
```js
new ExNotification( {
		type : "success",
		title  : getRandTitle(),
		description  : getRandomText(),
		position : "top",
		timer : 1000,
	})
```
<img src='https://github.com/AfonsoCFonseca/Push-Notification-Library/blob/master/gifs/successTimer.gif'>
