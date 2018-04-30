
window.onload = function() {
	(function () {

		getDependecies( function(){

			$( "#top" ).click( function(){
				new ExNotification( {
					type : getRandomState(),
					title  : getRandTitle(),
					description  : getRandomText(),
					position : "top",
					imageUrl : "http://www.wonko.info/ipt/xfiles/interfaces/target.bmp",
				})
			})

			$( "#right" ).click( function(){
				new ExNotification( {
					type : getRandomState(),
					title  : getRandTitle(),
					description  : getRandomText(),
					position : "right",
				})
			})

			setTimeout(function(){

				new ExNotification( {
					type : getRandomState(),
					title  : getRandTitle(),
					description  : getRandomText(),
					position : "top",
				})

			}, 500 )

		})


	})();
}

function getRandTitle(){
	var mArr = [
		"Message sent!",
		"New Notification!",
		"Hey, you just received a message!",
		"Alert!New message!",
	]

	return mArr[ Math.floor((Math.random() * mArr.length) ) ]

}

function getRandomState(){
	var mArr = [
		"error",
		"success",
	]

	return mArr[ Math.floor((Math.random() * 2) ) ]
}

function getRandomText(){
	var mArr2 = [
		"You just received a new notification",
		"You got new emails!",
		"Check your profile for more info",
		"Someone just sent a new message",
	]

	return mArr2[ Math.floor((Math.random() * mArr2.length) ) ]
}
