var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (arr) {
    return arr[0];
  },

  // returns the last element of an array
  last: function (arr) {
    return arr[arr.length-1];
  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr,value) {
    for (i=0;i<arr.length;i++){
      if (arr[i]===value){
        return i;
      }
    }return -1;
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (arr, value) {
    for (i=arr.length-1;i>=0;i--){
      if (arr[i]===value){
        return i;
      }
    }return -1;
  },

  // returns an array with all elements except for the last element
  initial: function (arr) {
    newArr = [];
    for (i=0;i<arr.length-1;i++){
      newArr[i] = arr[i];
    }
    return newArr;
  },
  
  // returns an array with all falsey values removed
  compact: function(arr) {
    // console.log(arr);
    // console.log(typeof arr[5]);
    var newArr = [];
    for (i=0;i<arr.length;i++){
      if (arr[i]){
        newArr[newArr.length] = arr[i]
      }
    }
    return newArr;
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr, index1,index2) {
    newArr = [];
    // console.log (arr);
    // console.log (index1);
    // console.log (index2);
    for (i=index1;i<index2;i++){
        newArr[newArr.length] = arr[i];
      }
    return newArr;
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(arr, n){
    newArr = [];
    // console.log(arr);
    // console.log(n);
    if (n === undefined){
      for (i=1;i<arr.length;i++){
        newArr[newArr.length] = arr[i];
      }
    }else{
      for (i=n;i<arr.length;i++){
        newArr[newArr.length] = arr[i];
      }
  } 
    // console.log('this is the new arr' +newArr);

    return newArr;
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr, n) {
    newArr = [];
    // console.log(arr);
    // console.log(n);
    if (n === undefined){
      for (i=0;i<arr.length-1;i++){
        newArr[newArr.length] = arr[i];
      }
    }else{
      for (i=0;i<arr.length-n;i++){
        newArr[newArr.length] = arr[i];
      }
  } 
    // console.log('this is the new arr' +newArr);

    return newArr;
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (arr, n) {
    // console.log(arr,n);
    newArr = [];
    if (n===undefined){
      newArr[newArr.length] = arr[0];
    }else if(n>arr.length){
      for (i=0;i<arr.length;i++){
        newArr[newArr.length] = arr[i];
      }
    }else{
      for (i=0;i<n;i++){
        newArr[newArr.length]=arr[i];
      }
    }
    // console.log(newArr);
    // console.log('function run');

    return newArr;
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (arr, n) {
    // console.log(arr,n);
    newArr = [];
    if (n===undefined){
      newArr[newArr.length] = arr[arr.length-1];
    }else if(n>arr.length){
      for (i=0;i<arr.length;i++){
        newArr[newArr.length] = arr[i];
      }
    }else if(n==0){
      return newArr;
    }else{
      for (i=n-1;i<arr.length;i++){
        newArr[newArr.length]=arr[i];
      }
    }
    // console.log(newArr);
    // console.log('function run');

    return newArr;
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(arr, value, n, m) {
    if (n===undefined && m===undefined){
      for (i=0;i<arr.length;i++){
      arr[i] = value;
      }
    }else{
      for (i=n;i<m;i++){
        arr[i]=value;
      }
    }
    return arr;
  },

  // removes all given values from an array
  pull: function (arr,...daArgs) {
    // console.log(arr);
    // console.log(daArgs);
    for (i=0;i<arr.length;i++){
      for (j=0;j<daArgs.length;j++){
        if (arr[i]===daArgs[j]){
          for (k=i;k<arr.length;k++){
            arr[k]=arr[k+1];
          }
          arr.length =arr.length-1;
          if (i===0){
            i=0;
          }else{
            i--;
          }
        }else{
          arr[i];
        }
      }
    }
    // console.log (arr);
    return arr;
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (arr, naughtyArr) {
    // console.log(arr+" this is the arr.");
    // console.log(naughtyArr+" this is the naughtyArr.");
    // debugger;
    for (i=0;i<arr.length;i++){
      var check =0;
      for (j=0;j<naughtyArr.length;j++){
        if (i===naughtyArr[j]){
          check = 0;
          break;
        }else{
          check = 1;
        }
      }if (check ===1){
       arr[i] = 'remove'; 
      }
    }
    
    // console.log(arr);
    for (i=0;i<arr.length;i++){
        if (arr[i]==='remove'){
          for (k=i;k<arr.length;k++){
            arr[k]=arr[k+1];
          }
          arr.length =arr.length-1;
          if (i===0){
            i=0;
          }else{
            i--;
          }
        }else{
          arr[i];
        }
    }
    // console.log (arr);
    return arr;

  },

  // creates an array excluding all the specified values
  without: function(arr, ...daArgs) {
    // console.log(arr);
    // console.log(daArgs);
    newArr=[];

    for(i=0;i<arr.length;i++){
      var checker = 0;
      for (j=0;j<daArgs.length;j++){
        if (arr[i]===daArgs[j]){
          checker = 1;
          break;
        }
      }
      if (checker === 0){
        newArr[newArr.length]=arr[i];
      }
    }
    // console.log(newArr);
      return newArr;
  },

  // returns an array with specified values excluded
  difference: function(arr, naughtyArr) {
    // console.log(arr);
    // console.log(naughtyArr);
    var newArr = [];

    for (i=0;i<arr.length;i++){
      var checker = 0;
      for (j=0;j<naughtyArr.length;j++){
        if (arr[i]===naughtyArr[j]){
        checker = 1;
        // console.log (naughtyArr[j]+' is being checked now.')
        // console.log('This is a naughty value!');
      }
    }
      if (checker === 0){
        newArr[newArr.length]=arr[i];
      }
      // console.log(newArr);
    }

    return newArr;
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function () {
    let numVal = [0];
    let longestArray=0;
    for (let i=0;i<arguments.length;i++){
      // console.log(arguments[i].length);
      numVal[numVal.length] = arguments[i].length;
      // console.log(numberOfValues);
      // console.log(numberOfValues[numberOfValues.length],numberOfValues[numberOfValues.length-1])
      if (numVal[numVal.length-1]>numVal[numVal.length-2]){
        longestArray = numVal[numVal.length-1];
        // console.log(longestArray);
      }else{
        longestArray = longestArray;
      }
    }
    // console.log (longestArray);
    // console.log(arguments);
    let newArr = [];
    // debugger;
    for (let i=0;i<longestArray;i++){
      let subArr = [];
      for (let j=0;j<arguments.length;j++){
        subArr[subArr.length] = arguments[j][i];
        // console.log(arguments[j][i]+" is being accessed now.");
      }
      // console.log(subArr);
      newArr[newArr.length] = subArr;
    } 
    return newArr;
  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function (arr) {
    // console.log(arr);
    // console.log(arr.length);
    newArr=[];
    // debugger;
    for (i=0;i<arr.length;i++){
      // console.log (arr[i] +" is the arr.");
      subArr = [];
      for (j=0;j<arr.length;j++){
        subArr[subArr.length]=arr[j][i];
        // console.log(arr[j][i]+ "is the value at arr"+j+"]["+i);
      }
      // console.log(subArr +"this is the subArr.")
      newArr[newArr.length]=subArr;
    }
    newArr.length=newArr.length-1;
    return newArr;
  },

  // creates an array of elements into groups of length of specified size
  chunk: function(arr, size){
    let times = arr.length/size;
    let isThereARemainder = 0;
    let remainder = arr.length%size;
    if (remainder !==0){
      isThereARemainder = 1;
    }

    // console.log(arr, arr.length, size,times,remainder);
    let newArr = [];
    if (arr.length ===0){
      return newArr;
    }
    if (size===undefined || size===0){
      return newArr;
    }
    // debugger;
    for (let i=0;i<times-isThereARemainder;i++){
      let subArr = [];
      for (let i=0;i<size;i++){
        subArr[subArr.length]=arr[i];
      }
      for (let i=size;i<arr.length;i++){
        arr[i-size]=arr[i];
      }
      arr.length = arr.length-size;

      // console.log(subArr);
      // console.log(arr);
      newArr[newArr.length] = subArr;
      // console.log(newArr +"this is the newArr")
    }

    // console.log(arr+"this is the arr after all that for loops.");

    if (remainder!==0){
      newArr[newArr.length] = arr;
    }
    // console.log(newArr + 'this is the result');


    return newArr;

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function(coll, iteratee) {
    // console.log(coll);
    // console.log(iteratee);
      // debugger;
      for (key in coll){
        iteratee(coll[key],key);
      }
  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function(coll, iteratee) {
    // console.log(coll);
    // console.log(iteratee);
    var result = [];
      // debugger;
      for (key in coll){
        result.push(iteratee(coll[key]));
        
      }
      return result;
  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function(coll,func) {
    // console.log(coll, func);
    newArr = [];

    for (var key in coll){
      // console.log(coll[key]);
      if (func(coll[key])===true){
        // console.log(func(coll[key]));
        newArr[newArr.length]=coll[key];
      }
      // console.log(newArr);
    }
    return newArr;
  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function(coll, func) {
    // console.log(coll,func);
    var sum=0;
    var total = 0;
    for (var key in coll){
      // console.log(coll[key]);
      total += func(sum,coll[key]);
      // console.log(sum);
    }
    // console.log(total);
    return total; 
  }
};
