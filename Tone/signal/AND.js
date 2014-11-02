define(["Tone/core/Tone", "Tone/signal/Equal"], function(Tone){

	"use strict";

	/**
	 *  @class and returns 1 when all the inputs are equal to 1
	 *
	 *  @extends {Tone}
	 *  @constructor
	 *  @param {number} [inputCount=2] the number of inputs. NOTE: all inputs are
	 *                                 connected to the single AND input node
	 */
	Tone.AND = function(inputCount){

		inputCount = this.defaultArg(inputCount, 2);

		/**
		 *  the inputs
		 *  @type {Array}
		 */
		this.input = new Array(inputCount);

		/**
		 *  @type {Tone.Equal}
		 *  @private
		 */
		this._equals = new Tone.Equal(inputCount);

		/**
		 *  the output
		 *  @type {Tone.Equal}
		 */
		this.output = this._equals;

		//make each of the inputs an alias
		for (var i = 0; i < inputCount; i++){
			this.input[i] = this._equals;
		}
	};

	Tone.extend(Tone.AND);

	/**
	 *  the number of inputs to consider
	 *  @param {number} inputCount
	 */	
	Tone.AND.prototype.setInputCount = function(inputCount){
		this._equals.setValue(inputCount);
	};

	/**
	 *  clean up
	 */
	Tone.AND.prototype.dispose = function(){
		Tone.prototype.dispose.call(this);
		this._equals.dispose();
		this._equals = null;
	};

	return Tone.AND;
});