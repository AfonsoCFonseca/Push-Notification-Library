var exAnim = {

	CLOSE_ANIM_SPEED : 400,
	INIT_POSITION : 2,
	INIT_SPEED_1 : 1000,
	INIT_SPEED_2 : 200,

	_showTop : function( exn, callback ){
		var IP = this.INIT_POSITION
		var IS2 = this.INIT_SPEED_2

		$( exn.elem ).css({ 'top': '', 'bottom': '-10%' }).animate({
				 'top' : ( this.INIT_POSITION + exn.counter ) + '%'
		}, this.INIT_SPEED_1 , function( ){

			$( exn.elem ).animate({
					 'top' : ( IP + ( exn.counter * 2) ) + '%'
			}, IS2 , function( ){

				callback()

			});

		});

	},

	_showRight : function( exn, callback ){

		$( exn.elem ).css({ 'top': ( this.INIT_POSITION + exn.counter * 2) + '%', 'right': '-25%' }).animate({
				 'right' : '25px',
				 'top' : ( this.INIT_POSITION + exn.counter * 2) + '%'
		}, this.INIT_SPEED_1 , function( ){
			callback()
		})

	},

	_close : function( exn , callback ){

		$( exn.elem ).animate({
				 'opacity' : 0,
		}, this.CLOSE_ANIM_SPEED , function( ){
			exn._deleteElement()
		})

	},

}
