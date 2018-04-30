var $_ex;
var counterEx = 0;

/////////////////////// SINGLE ELEMENT ///////////////////////

function ExNotification( objOfSpecs ) {
	/////////////////////// VARIABLES ///////////////////////
	var self = this;
	var elem
	var previousStyle

	this.type = objOfSpecs.type || "success"
	this.title = objOfSpecs.title || "Insert Text"
	this.description = objOfSpecs.description || "Insert description"
	this.position = objOfSpecs.position || "top"
	this.imageUrl = objOfSpecs.imageUrl || null

	this.counter = counterEx;

	this.id = "exn" + this.counter
	//this.image

	/////////////////////// INIT ///////////////////////

	this._getModel = function(){

		var img = ""
		var bodyStyle = ""
		if( this.imageUrl != null ){
			img = "<img class='divExnImg' src='"+this.imageUrl+"'>"
			bodyStyle = "style='width: calc(100% - 60px)'"
		}

		var model = "<div id='"+this.id+"' class='exn exn-"+this.type+" exn-"+this.position+"'>"+
									"<div class='top-bar'>"+
										"<div class='closeIcon'><i class='fas fa-times'></i></div>"+
									"</div>"+
									"<div class='body'>"+
										img+
										"<div class='body-text' "+bodyStyle+">"+
											"<div class='titleText'>"+this.title+"</div>"+
											"<div class='descriptionText'>"+this.description+"</div>"+
										"</div>"+
									"</div>"+
								"</div>"


		this._show( model )
	}

	this._show = function( model ){

		$_ex( "body" ).append( model )
		this.elem = $_ex( "#" + this.id )

		this.pushInstanceToArray( )

		this._animation()
	}

/////////////////////// ANIMATION ///////////////////////
	this._animation = function(){
		var INITIAL_POSITION = 2;

		if( this.position == "top" ){

			$_ex( self.elem ).css({ 'top': '', 'bottom': '-10%' }).animate({
					 'top' : ( INITIAL_POSITION + self.counter ) + '%'
			}, 1000 , function( ){

				$_ex( self.elem ).animate({
						 'top' : ( INITIAL_POSITION + ( self.counter * 2) ) + '%'
				}, 200 , function( ){

					self._afterAnimation()

				});

			});

		}
		else if( this.position == "right" ){

			$_ex( self.elem ).css({ 'top': ( INITIAL_POSITION + self.counter * 2) + '%', 'right': '-25%' }).animate({
					 'right' : '25px',
					 'top' : ( INITIAL_POSITION + self.counter * 2) + '%'
			}, 1000 , function( ){

			});

		}

	}

	this._afterAnimation = function(){

		this._close()
		this._hover()

	}

	/////////////////////// FUNCTIONS ///////////////////////

	this._hover = function(){

		$_ex( document ).on( 'mouseenter', '#' + this.id + ">.top-bar" , function(){
			self.previousStyle = $_ex( self.elem ).css( "z-index" )
			$_ex( self.elem ).css( "z-index", "100" )
		})

		$_ex( document ).on( 'mouseleave', '#' + this.id + ">.top-bar", function(){
			$_ex( self.elem ).css( "z-index", self.previousStyle )
		})

	}

	this._close = function(){

		$_ex( document ).on( 'click', '#' + this.id + ">.top-bar>.closeIcon>i", function(){

			$_ex( self.elem ).animate({
					 'opacity' : 0,
			}, 400 , function( ){
				self._deleteElement()
			});

		})

	}

	this._deleteElement = function(){
		$_ex( self.elem ).remove()
		ExNotificationArray._removeElement( this.counter )
	}

/////////////////////// PUSH ///////////////////////
	this.pushInstanceToArray = function(){
		ExNotificationArray._addElement( this )
	}

	/////////////////////// INIT ///////////////////////

	getDependecies( function(	 ){
		counterEx++;
		self._getModel()
	})

}





/////////////////////// JQUERY INSTALL ///////////////////////

var getDependecies = function( callback ){

	//Installs jquery
	    if ( window.jQuery == null )
	    {
				var script = document.createElement("SCRIPT");
				script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js';
				script.type = 'text/javascript';
				script.onload = function() {
						$_ex = window.jQuery;
						callback( "gotit" )
				};
				document.getElementsByTagName("head")[0].appendChild(script);

				var script1 = document.createElement("LINK");
				script1.href = 'https://use.fontawesome.com/releases/v5.0.10/css/all.css';
				script1.rel = 'stylesheet';

				document.getElementsByTagName("head")[0].appendChild(script1);
	    }
			else callback( "gotit" )



}



/////////////////////// ARRAY ///////////////////////


var ExNotificationArray = {
	self : this,
	array : [],


	_addElement : function( element ){
		this.array.push( element )
	},

	_removeElement : function( index ){
		this.array[ index ] = null
		this._clearArray()
	},

	_clearArray : function(){
		for( var i = 0; i < this.array.length; i++ )
			if( this.array[i] != null ) return

		this.array = []
	},

	_getElement : function( element ){

	},

	getLength : function(){

	},

}
