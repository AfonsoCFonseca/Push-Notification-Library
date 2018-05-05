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
	this.position = objOfSpecs.position || "top"
	this.imageUrl = objOfSpecs.imageUrl || null
	this.description = objOfSpecs.description
	this.counter = counterEx;
	this.timer = objOfSpecs.timer || null

	this.id = "exn" + this.counter

	/////////////////////// INIT ///////////////////////

	this._getModel = function(){

		this.descriptionSmall = this.makeShortDescription()

		var img = ""
		var exnClass = ""
		var closeIcon = this.timer == null ? "<div class='closeIcon'><i class='fas fa-times'></i></div>" : ""

		if( this.imageUrl != null ){
			img = "<img class='divExnImg' src='"+this.imageUrl+"'>"
			exnClass = "exn-image"
		}

		var model = "<div id='"+this.id+"' class='exn "+exnClass+" exn-"+this.type+" exn-"+this.position+"'>"+
									"<div class='top-bar'>"+
										closeIcon+
									"</div>"+
									"<div class='body'>"+
										img+
										"<div class='body-text'>"+
											"<div class='titleText'>"+this.title+"</div>"+
											"<div class='descriptionText'>"+this.descriptionSmall+"</div>"+
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

			exAnim._showTop( this , function(){
				self._afterAnimation()
			})

		}
		else if( this.position == "right" ){

			exAnim._showRight( this , function(){
				self._afterAnimation()
			})

		}

	}

	this._afterAnimation = function(){

		this._close()
		this._hover()

	}

	/////////////////////// FUNCTIONS ///////////////////////

	this.makeShortDescription = function(){
		var text = this.description
		const LIMIT = this.imageUrl == null ? 100 : 50

		if( text == null )
			return "Insert description"

		if( text.length > LIMIT )
			text = text.substring( 0,LIMIT ) + "..."

		return text
	}

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

		if( this.timer != null ){
			setTimeout( function(){

				exAnim._close( self , function(){
					self._deleteElement()
				})

			}, self.timer )
		}

		$_ex( document ).on( 'click', '#' + this.id + ">.top-bar>.closeIcon>i", function(){

			exAnim._close( self , function(){
				self._deleteElement()
			})

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
		counterEx = 0;
	},

	_getElement : function( element ){

	},

	getLength : function(){

	},

}
