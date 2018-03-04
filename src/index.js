module.exports = function longestConsecutiveLength(array) {
  if(array.length < 2) {
    return array.length;
  }

  function InsertionSort(array)
  {
    let n = array.length;
    for (let i = 0; i < n; i++)
    { let v = array[ i ], j = i-1;
      while (j >= 0 && array[j] > v)
      { array[j+1] = array[j]; j--; }
      array[j+1] = v;
    }
    return array;
  }

  InsertionSort(array);

  let prevNumber = array[0],
      maxSequence = [],
      i = 0,
      last = true;

  for (let j = 1, max = array.length; j < max; j++) {
   if(array[j] === prevNumber + 1) {
     if(!last) last = true;
     if(!maxSequence[i]) maxSequence[i] = 1;
     maxSequence[i]++;
   } else {
     if(last) {
       i++;
       last = false;
     }
   }
    prevNumber = array[j];
  }

  if(!maxSequence[0]) {
    maxSequence.shift();
  }
  return maxSequence.length > 0 ? Math.max(...maxSequence) : 0;

};
