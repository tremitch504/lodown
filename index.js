'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * 
 * 
 * identity: returns a value unchanged
 * 
 * @param {*} value: the value to be returned from this function
 * 
 * @returns {*} : the value unchanged
 * 
 */
 
 function identity(value){
    return value;
}
 module.exports.identity = identity;
 
 /**
  * typeOf: Takes and value and returns a string with the name of the datatype.
  * 
  * @param {*} value: any value or datatype
  * 
  * @returns: string: a string saying what kind of datatype the value is.
  * 
  */
  
  function typeOf(value){
    if(Array.isArray(value)){
        return "array"
    } else if(value === null){
        return "null"
    } else if(value instanceof Date){
        return "date"
    } else if(value === undefined){
        return "undefined";
    } else {
        return typeof value;
    }
}
  
  module.exports.typeOf = typeOf;
  
 /** 
   *  first: Will iterate over an array and return the first number of values ending the selection at whatever is the given number. 
   * 
   * @param array: an array of values to iterate over.
   * 
   * @param number: a number representing an index and the end of selecting the first values in the array.
   * 
   * @returns array: an array of the first number of values.
   */
   
   function first(array, number){
    
    let newArr = [];
    if(number <= 0 || typeOf(array) !== "array"){
        return [];
    } else if(number >= array.length){
        return array;
    } else if( isNaN(number)){
        return array[0];
    }
    for(let i = 0; i < number; i++){
        newArr.push(array[i]);
    }
    return newArr;
}
    module.exports.first = first;
   
   /**
    * 
    * last: Function will iterate over an array and will return the last number of values inside the array, starting at the given number and stopping at the last value.
    * 
    *@param {Array}: array of values to be iterate over.
    * 
    * @param {Number}: a number that represents the last values inside the array.
    * 
    * @returns {Array}: an Array of the last elements in the array.
    */
    
    function last(array, number){
let newArr = [];
    if(number < 0 || typeOf(array) !== "array"){
        return [];
    } else if(number > array.length){
        return array;
    } else if(isNaN(number)){
        return array[array.length - 1];
    }
    //iterate over the given array and push the values inside the empty array
    for(let i = array.length - number; i < array.length; i++){
        newArr.push(array[i]);
    }
    return newArr; 
}
    module.exports.last = last;
    
    /**
     * 
     * indexOf: This function iterates over an Array, with a given value, it will check if the values inside the array is the same as the given value.
     * If so, it will return the index where the value is placed.
     * 
     * @param {Array}: an array of values to see what index is the given value placed.
     * @param {*} value: any value to see what index it is placed on inside the array.
     * 
     * @returns {Number}: a number or index where the given value is placed. If the value is not inside the array, it returns a negative 1.
     */
     function indexOf(array, value){
    for(let i = 0; i < array.length; i++){
        if(array[i] === value){
            return i;
        }
    }
    return -1;
}

module.exports.indexOf = indexOf;
     
     
     /**
      * 
      * 
      *contains: This function checks if a given value is inside an array.
      * 
      * @param {Array}: an array of values.
      * 
      * @param {*} value: any value or datatype to see if its inside an array
      * 
      * @returns {Boolean}: returns true if the given value is inside the array, returns false if its not.
      * 
      */
      function contains(array, value){
    return array.includes(value) ? true : false;
};
module.exports.contains = contains;
      
      /**
       * 
       *unique: Iterates over an array, checks to see if there are any values repeating or duplicates inside.
       * 
       *@param {Array}: an array of values with duplicates.
       * @returns {Array}: a new array will be returned with all the values but with the duplicates removed.
       */
       function unique(array){
    let newArr = [];
    for(let i = 0; i < array.length; i++){
        if(!newArr.includes(array[indexOf(array, array[i])])){
            newArr.push(array[i]);
        }
    }
    return newArr;
}

module.exports.unique = unique;

       
 /**
  * 
  * filter: a function that iterates over an array, returns a new array with the values that passes a test from the callback function.
  * 
  * @param {Array}: an array with values to be iterated over
  * @param {Function}: a callback function that takes an element, an index and a array as its arguments, the values from the callback that passes will be added to a new array
  * 
  * @returns {Array}: a new array will be returned with the values that passes the test from the callback function.
  */
  
  function filter(array, callback){
    let newArr = [];
    each(array, function(element, i, array){
        if(callback(element, i,  array) === true){
            newArr.push(element);
        }
    });
    return newArr;
}
  
  module.exports.filter = filter;
  
  /**
   * 
   * reject: a function that iterates over an array, returns a new array with values that comes back false from the callback function
   * 
   * @param {Array}: array of values to be ierated over
   * @param {Function}: callback function that takes an element, index, and an array as its values. Whatver values from the callback function comes back false will be added to a new array
   * 
   * @returns {Array}: a new array with values that comes back false from the callback function.
   * 
   */
   
   function reject(array, callback){
    let newArr = [];
    each(array, function(element, i, array){
        if(callback(element, i,  array) === false){
            newArr.push(element);
        }
    });
    return newArr;
}
   module.exports.reject = reject;
   
   
   /**
    * 
    * partition: a function that iterates over an array, takes the passing values from the callback function into one array and the values that does not pass into another Array. Both arrays will be returned into one Array.
    * 
    * @param {Array}: an array of values to see which values passes and which values don't from the callback function.
    * @param {Function}: a callback function that takes an element, index, and array as its arguments.
    * 
    * @returns {Array}: an array with two sub arrays, if the values from the callback function returns true they will be added to the first Array. The values that doesn't pass from the callback function will be added to the other.
    */
  
  function partition(array, callback){
    let newArr = [[], []];
    each(array, function(element, i, array){
       
        if(callback(element, i, array) === true){
            newArr[0].push(element);
        } else if(callback(element, i, array) === false){
            newArr[1].push(element)     
        }
    });
    return newArr;
}
  module.exports.partition = partition;
  
  /**
   * 
   * 
   * map: Iterates over an Array or Object, and whatever value that comes from the callback function will be added into a new Array.
   * 
   * @param {Array or Object} collection: an Array or object to be iterate over to have access to its values
   * @param {Function}: a callback function that takes  an element, index or key, and its collection as its arguments.
   * 
   * @returns {Array}: an array of the value that comes back from the callback function.
   * 
   */
   function map(collection, callback){
    let newArr = [];
    each(collection, function(element, i, collection){
        newArr.push(callback(element, i, collection))
    });
    return newArr;
}
module.exports.map = map;

/**
 * 
 * 
 * pluck: iterates over an array of objects. With the given property, a new Array with the values that matches the property will be returned.
 * 
 * @param {array}: an array of object to be iterated over.
 * @param {string} property: a string that represents a key.
 * 
 * @returns {array}: a new array with the property's values from the objects inside the given array.
 */
 
 function pluck(array, property){
    let newArr = [];
    map(array, function(element, i, array){
        newArr.push(array[i][property]);
    });
    return newArr;
    
}
module.exports.pluck = pluck;






   /**
    * 
    * every: this functions iterates over an array or object, if all the values from the array passes the test from callback function then true will be returned, false if not.
    * 
    * @param {Array or Object} collection: an Array or Object to be iterated over to see if all the values they pass a test from a callback function.
    * @param {Function}: a callback function  that takes an element, index, and some type of collection as its arguments, will execute some type of test.
    * 
    * @returns {Boolean}: will return true if every value passes the test from the callback function, returns false if one of the values from the callback doesn't pass the test.
    * 
    */
    function every(collection, callback){
    let myBool = true;
    each(collection, function(element, i, collection){
        if(typeof callback === "function"){
            if(!callback(element, i, collection)){
                myBool = false;
            }
        } else if(!element){
            myBool = false;
        }
    });
    return myBool;
};
    module.exports.every = every;
    
    /**
     * 
     * 
     * some: a function that iterates over an array or object, if at least one of the values passes the test from the callback function,  true will be returned. If none of the values passes the test, false will be returned.
     * 
     * @param {Array or Object} collection: an array or object to be iterated over to see if at least one of the values passes a test from the callback function
     * @param {Function}: a callback function that takes an element, index or key, and some type of collection that will run some type of test.
     * 
     * @returns {Boolean}: will return true if at least one the values passes a test from the callback function. Returns false if none of the values passes the test.
     * 
     */
   function some(collection, callback){
    let myBool = false;
    
    each(collection, function(element, i, collection){
        if(typeof callback === "function"){
            if(callback(element, i, collection)){
                myBool = true;
            }
        } else if(element){
            myBool = true;
        }
    });
    return myBool;
}
   module.exports.some = some;
   /**
    * 
    * reduce: a function that iterates over an Array, returns a value that is returned from the last or final callback function call.
    * 
    * @param {Array}: an Array that will be iterated over to have access to its values
    * @param {Function}: a callback function that takes a previous value, a current value, or index.
    * 
    * @param {Seed}: the seed will be the starting point for the accumulator in this function, which can be any value. If a seed is not given the previous element or starting point will be the first value inside the array.
    * 
    * @returns {*} value: any value or datatype that comes back from the final function call.
    */
    function reduce(array, callback, seed){
    let previous = seed;
    if(seed === undefined){
        previous = array[0];
        for(let i = 1; i < array.length; i++){
            previous = callback(previous, array[i], i);
        }
        return previous;
    }
    for(let i = 0; i < array.length; i++){
        previous = callback(previous, array[i], i)
    }
    return previous; 
}
module.exports.reduce = reduce;
    /**
     * 
     * 
     * extend: A function that takes two or more objects, and copys the second object's properties to the first Object.
     * 
     * @param {Object}: an Object to be updated and have copies of the keys from the other Object that is given.
     * @param {Object}: an Object to have its properties copied and places into the first given object.
     * 
     * @returns {Object}: returns an updated version of the first given Object.
     */ 
     function extend(object, ...object1){
    Object.assign(object, ...object1);
    return object;
}
module.exports.extend = extend;