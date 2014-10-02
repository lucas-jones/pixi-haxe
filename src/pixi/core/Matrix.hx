package pixi.core;

@:native("PIXI.Matrix")
extern class Matrix {

	/**
	 * The Matrix class is now an object, which makes it a lot faster, 
	 * here is a representation of it : 
	 * | a | b | tx|
	 * | c | d | ty|
	 * | 0 | 0 | 1 |
	 *
	 * @class Matrix
	 * @constructor
	*/
	public function new():Void;

	/**
	 * Creates a pixi matrix object based on the array given as a parameter
	 *
	 * @method fromArray
	 * @param array {Array} The array that the matrix will be filled with
	*/
	public function fromArray(array:Array<Dynamic>):Void;

	/**
	 * Creates an array from the current Matrix object
	 *
	 * @method toArray
	 * @param transpose {Boolean} Whether we need to transpose the matrix or not
	 * @return {Array} the newly created array which contains the matrix
	*/
	public function toArray(transpose:Bool):Array<Dynamic>;

	/**
	 * Returns the framing rectangle of the circle as a PIXI.Rectangle object
	 * 
	 * @method getBounds
	 * @return {Rectangle} the framing rectangle
	*/
	public function getBounds():Rectangle;
}