
window.onload = function() {
	(function () {

		getDependecies( function(){

			$( "#top-default" ).click( function(){
				new ExNotification( {
					type : "default",
					title  : getRandTitle(),
					description  : getRandomText(),
					position : "top",
				})
			})

			$( "#right-default" ).click( function(){
				new ExNotification( {
					type : "default",
					title  : getRandTitle(),
					description  : getRandomText(),
					position : "right",
				})
			})

			$( "#top-success" ).click( function(){
				new ExNotification( {
					type : "success",
					title  : getRandTitle(),
					description  : getRandomText(),
					position : "top",
					timer : 1000,
				})
			})

			$( "#right-success" ).click( function(){
				new ExNotification( {
					type : "success",
					title  : getRandTitle(),
					description  : getRandomText(),
					position : "right",
				})
			})

			$( "#top-error" ).click( function(){
				new ExNotification( {
					type : "error",
					title  : getRandTitle(),
					description  : getRandomText(),
					position : "top",
				})
			})

			$( "#right-error" ).click( function(){
				new ExNotification( {
					type : "error",
					title  : getRandTitle(),
					description  : getRandomText(),
					position : "right",
				})
			})

			// setTimeout(function(){
			//
			// 	new ExNotification( {
			// 		type : getRandomState(),
			// 		title  : "canção teste",
			// 		description  : "dqw dqw dqw d qwd qw dqwdksjadnqw kjd qwkjd qwkjd qwkdj qwkjd qwjkqwkd qwd qw dqw d qw d dqw dqw dqw d qwd qw dqwdksjadnqw kjd qwkjd qwkjd qwkdj qwkjd qwjkqwkd qwd qw dqw d qw d",
			// 		position : "top",
			// 		imageUrl : "http://www.wonko.info/ipt/xfiles/interfaces/target.bmp",
			// 		timer : 2000,
			// 	})
			//
			// }, 500 )

		})


	})();
}

function getRandTitle(){
	var mArr = [
		"Message sent!",
		"New Notification!",
		"Hey, you just received a message!",
		"Alert!New message!",
		"Hey, you just received a message!",
	]

	return mArr[ Math.floor((Math.random() * mArr.length) ) ]

}

function getRandomState(){
	var mArr = [
		"error",
		"success",
		"default",
	]

	return mArr[ Math.floor((Math.random() * mArr.length) ) ]
}

function getRandomText(){
	var mArr2 = [
		"You just received a new notification",
		"You got new emails!",
		"Check your profile for more info",
		"Someone just sent a new message",
		// "dqw dqw dqw d qwd qw dqwdksjadnqw kjd qwkjd qwkjd qwkdj qwkjd qwjkqwkd qwd qw dqw d qw d dqw dqw dqw d qwd qw dqwdksjadnqw kjd qwkjd qwkjd qwkdj qwkjd qwjkqwkd qwd qw dqw d qw d"
	]

	return mArr2[ Math.floor((Math.random() * mArr2.length) ) ]
}
