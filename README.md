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
<img src='https://github.com/afonsofcfonseca/ExNotifications/blob/master/gifs/successNormal.gif'>
```js
new ExNotification( {
		type : "success",
		title  : getRandTitle(),
		description  : getRandomText(),
		position : "top",
	})
```

Success Notification ( right animation )
<img src='https://github.com/afonsofcfonseca/ExNotifications/blob/master/gifs/successNormal.gif'>
```js
new ExNotification( {
		type : "success",
		title  : getRandTitle(),
		description  : getRandomText(),
		position : "right",
	})
```

Error Notification
<img src='https://github.com/afonsofcfonseca/ExNotifications/blob/master/gifs/error.gif'>
```js
new ExNotification( {
		type : "error",
		title  : getRandTitle(),
		description  : getRandomText(),
		position : "top",
	})
```

Image Notification
<img src='https://github.com/afonsofcfonseca/ExNotifications/blob/master/gifs/successImage.gif'>
```js
new ExNotification( {
		type : "success",
		title  : getRandTitle(),
		description  : getRandomText(),
		position : "top",
		imageUrl : "https://image.flaticon.com/icons/png/512/149/149071.png",
	})
```

Timer Notification ( 1 second )
<img src='https://github.com/afonsofcfonseca/ExNotifications/blob/master/gifs/successTimer.gif'>
```js
new ExNotification( {
		type : "success",
		title  : getRandTitle(),
		description  : getRandomText(),
		position : "top",
		timer : 1000,
	})
```
