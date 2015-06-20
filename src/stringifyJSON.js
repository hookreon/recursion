// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if(typeof obj === 'string') {
  	return '"' + obj + '"';
  }

  if(Array.isArray(obj)) {
  	var arrResult = [];
  	for(var i = 0; i < obj.length; i++) {
  		arrResult.push(stringifyJSON(obj[i]));
  	}
  	return '[' + arrResult + ']';
  } 

  if(obj && typeof obj === 'object') {
  	var objResults =[];
  	for(var key in obj) {
  	  if(typeof obj[key] === 'function') {
        return '{}';
  	  }
  	  objResults.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
  	} 
  	return '{' + objResults.join() + '}';
  }

  return '' + obj + '';
};
