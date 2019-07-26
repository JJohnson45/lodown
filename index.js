
 
 /**
 Identity: Designed to return the value of the argurment placed in the parameter;
           Takes a value. and returns that value.
    *@Param: {value}
    @return: {value}
 **/
    
   function identity(value){
    return value;
}
     module.exports.identity = identity;
 
 /**
 tyepOf: Designed to return each value as a string. Takes one argument (value) that must pass.
@param: {value}
return: {typeOf value}
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
 first: Designed to test whether an array is an array, and if test passes return an empty array.
    And if the number is undefined or not present then then return the first element.
    Else return the first 'number' of items(i), in the array
    Then return that new array.
@param: {number}
@param: {array}
@return: {arr}
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
 last: Designed to test whether an array is an array, and if test passes return an empty array.
       And if the number is undefined or not present then then return the last element.
       Else return the first 'number' of items(i), in the array
       Then return that new array.
@param: {number}
@param: {array}
@return: {arr}
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
 indexOf: Designed to test what's the the first occurence of a value;
          uses a for loop to loop through ever element
          Uses if statements to test different blocks of code.
          uses strictly equal to test if the first element in the array is equal to value.
          return that index.
          Else return -1.
 @param: {array}
 @param: {value}
 @return: {i, -1}
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
  @return: {true or false}
  **/
  
function contains(array, value){
    return (array.includes(value) ? true : false);
    };
    module.exports.contains = contains;
    
    
  /**
  each: test whether an array or abject using if statements.
        loops through either an object or array and performs a function on every element, index, and collection.
  @param:{collection}
  @param:{funct}
  @return:
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
  @return:{arr}
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
 filter: passes elements through a function that resolved to true once the called function resolved to true. returns a new array
 @param: {array}
 @param: {funct}
 @return:{arr}
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
 reject: passes elements through a function that resolved to false. and returns a new array.
 @param:{array}
 @param:{funct}
 @return:{arr}
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
 partition: Returns an arrray of 2 sub arrays. 1 of those Arrays are all truthy values, while the other are all falsy values. All within one BIG array.
 @param:{array}
 @param:{funct}
 @return:{[truthyArr, falsyArr]}
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
 map: puts the results of the called function, with every element, i, & collection  into a new array.
 @param: {collection}
 @param: {funct}
 @return:{arr}
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
 pluck: Returns an array with the value of all properties
 @param: {collection}
 @param: {property}
 @return: {result}
 **/
 
 function pluck(collection, property){
    var result = map(collection, function(ele){
      return ele[property];
   });
   return result;
}
module.exports.pluck = pluck;


 /**
 every: if the return value of the called function of every element is true, then return true.
 But if one of them are false; return false.
 @param: {collection}
 @param: {funct}
 @return: {bool}
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


/** some: Checks whether the return value from cqlling (function) is true or false.
          And if no function is given determine if the element is true of not.
@param: {collection}
@param: {funct}
@return: {bool}
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
@return: {seed}
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
@return: {object}
**/

 function extend(object, ...moreObjects) {
    for (var i = 0; i < moreObjects.length; i++) {
        for (var key in moreObjects[i]) {
object[key] = moreObjects[i][key];
        }
    } return object;
}
module.exports.extend = extend;