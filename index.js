function identity(value){
    return value;
}
     module.exports.identity = identity;
 
 /**
 tyepOf: Designed to return a string of the datatype. Takes one argument (value) that must pass.
@param: {value} 
return: {any datatype} returns a string epresenting a datatype of value.
 **/
 
  function typeOf( value) {
if (Array.isArray(value)){
        return "array";
    } 
    else if (value === null){
    return 'null';
    
    } else if (value instanceof Date){
        return 'date';
    }
    else {
        return typeof value;
    }
}
    module.exports.typeOf = typeOf();

 
 /**
 first: Designed to return the first element in an array
    With edge case to test if an aray is an array.
@param: {number}
@param: {array}
@return: {arr} return a new array
**/

 function first (array, number){
    var arr= [];
    if (!Array.isArray(array)){
        return arr;
        } if (number === undefined || typeof number !== 'number'){
            return array[0];
        } else if ( number > array.length) {
            return array;
        } else {
            for ( var i = 0; i < number; i++){
                arr.push(array[i]);
            }
            
        } return arr;
}
     module.exports.first = first;
    
    
 /**
 last:  Designed to return the first element in an array
    With edge case to test if an aray is an array.
@param: {number}
@param: {array}
@return: {arr} Returned a new array
**/
 function last ( array, number){
    var arr = [];
    if(!Array.isArray(array)){
        return arr;
    } if (number === undefined || typeof number !== 'number'){
        return array[array.length-1];
    } else if ( number >= array.length){
        return array;
        
    } else if (number < 0) {
        return arr;
        
    } 
    else {
        for (var i = array.length-1; i >= number-1; i--){
            arr.unshift(array[i]);
        }
    }
 return arr;
}
     module.exports.last = last;
     
 /**    
 indexOf: Designed to find the first occurence of a value, and return that value's index
 @param: {array}
 @param: {value}
 @return: {i, -1}: Return an index if that element equals to value
                   Return -1 if element is false;
 **/
 
function indexOf(array, value){
    for( var i = 0; i < array.length; i++){
        if (array[i] === value){
        return i;
        }
} return -1;
};
     module.exports.each = each;
     
     
  /**
  contains: Designed to test if an array holds a value using a contenary operator.
            Uses the includes method to test if array includes value. 
            Uses the ternary operator to test whether true or false.
  @param: {array}
  @param: {value}
  @return: {true or false}: Return boolean if value is inside the array.
  **/
  
function contains(array, value){
    return (array.includes(value) ? true : false);
    };
    module.exports.contains = contains;
    
    
  /**
  each: iterates through either an object or array and performs a function on every element, index, and collection.
  @param:{collection}
  @param:{funct}
  @return: Returns nothing
  **/
  
function each(collection, funct){
    if(Array.isArray(collection)){
       for(let i = 0; i < collection.length; i++){
           funct(collection[i], i, collection);
       }
          }
       else if(typeof collection === 'object'){
        for(var key in collection){
            funct(collection[key], key, collection);
        }
       }
}
module.exports.each = each;


  /**
  unique: Returns a new array of all elements from {array} with duplicates removed using indexOf.
  @param:{array}
  @return:{arr} : Retruns an array of new values..
  **/
  
  function unique(array){
   var arr = [];
 for(let i = 0; i < array.length; i++){
     if(indexOf(arr, array[i]) === -1){
         arr.push(array[i]);
     }
 }
 return arr;
}
module.exports.unique = unique;


 /**
 filter: Designed to run through an array and filter out all truthy values depending on callback
 @param: {array}
 @param: {funct}
 @return:{arr}: returns an array of all truthy values that are filtered in the array.
 **/
 
 function filter(array, funct){
   var arr = [];
  each(array, function(ele, i, array){
      if(funct(ele, i, array) === true) {
      arr.push(ele);
         }
  });
   return arr;
}
module.exports.filter = filter;

 /**
 reject: Designed to run through an array and filter out all falsy values depending on callback
 @param:{array}
 @param:{funct}
 @return:{arr}: Returns an array of all falsy values that are fitlered in the array.
 **/
 
 function reject(array, funct){
   let arr = [];
   each(array, function(ele, i, array){
       if(!funct(ele, i, array)){
           arr.push(ele);
       }
   });
       return arr;
   }
   module.exports.reject = reject;
   
   
 /**
 * partition: Returns an arrray of 2 sub arrays. 1 of those Arrays are all truthy values, while the other are all falsy values. All nested within one array.
 * @param:{array}
 * @return:{[truthyArr, falsyArr]}: returns a new array containing the falsy values and truthy values.
 **/
 
  function partition(array, funct){
    var truthArr = [];
   var falsyArr = [];
each(array, function(ele, i, arr){
if(!funct(ele, i, arr)){
   falsyArr.push(ele);
}
else truthArr.push(ele);
});
   return [truthArr, falsyArr];
}
module.exports.partition = partition;


 /**
 * map: puts the results of the called function, with every element, i, & collection  into a new array.
 * @param: {collection}
 * @param: {funct}
 * @return:{arr}: returns a new array containing result of the modified array.
 **/
 
function map(collection, funct){
   var arr = [];
  each(collection, function(ele, i, collection){
      arr.push(funct(ele,i, collection));
   });
   return arr;
}
module.exports.map = map;


 /**
 * pluck: Returns an array with the value of all properties
 * @param: {collection}
 * @param: {property}
 * @return: {result}: returns an array with the value of all properties
 **/
 
 function pluck(collection, property){
    var result = map(collection, function(ele){
      return ele[property];
   });
   return result;
}
module.exports.pluck = pluck;


 /**
* every: Designed to return a boolean based on the callback function
* @param: {collection}
* @param: {funct}
* @return: {bool}: returns a boolean
 **/
 
 function every(collection, funct){
   var bool = true;
   if(typeof funct === 'function'){ 
       each(collection, function(ele, i, collection){
           if(!funct(ele, i, collection)){ 
            bool = false;
           }
       });
   } else {
       each(collection, function(ele){
         if(!ele) {
             bool = false;
         }
       });
   }
   return bool;
}
module.exports.every = every;


/** some: Checks whether the return value from calling (function) is true or false.
          And if no function is given determine if the element is true of not.
* @param: {collection}
* @param: {funct}
* @return: {bool}
**/
 function some(collection, funct){
   var bool = false;
   if(typeof funct === 'function'){ 
       each(collection, function(ele, i, collection){
           if(funct(ele, i, collection)){ 
            bool = true;
           }
       });
   } 
   else  {
       each(collection, function(ele){
         if(ele) {
             bool = true;
         }
       });
   }
  
   return bool;
}
module.exports.some = some;


/** reduce: Test a provided function for each value of the array. 
            Then the return value of the function is stored in an accumulator (result/total). 
@param: {array}
@param: {funct}
@param: {seed}
@return: {seed} returns a number that is represented as a seed
**/

 function reduce(array, funct, seed){
    if( seed !== undefined){
        for (var i = 0; i < array.length; i++){
            seed = funct(seed, array[i], i);
        }
    } else if (seed === undefined){
        seed = array[0];
        for(var j = 1; j < array.length; j++){
            seed = funct(seed, array[j], j);
        }
    }
    return seed;
}
module.exports.reduce = reduce;

/**extend: copy properties between objects.
@param: {object}
@param: {...moreObjects}
@return: {object}: returns a new object that contains the new properties
**/

 function extend(object, ...moreObjects) {
    for (var i = 0; i < moreObjects.length; i++) {
        for (var key in moreObjects[i]) {
object[key] = moreObjects[i][key];
        }
    } return object;
}
module.exports.extend = extend;
