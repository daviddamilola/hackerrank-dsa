/**
 * ALGORITHM
 * 
 * - divide the array recursively until the elements are two or less.
 * - sort the two items iteratively (base case).
 * - merge in taking one by one from each array such that they are in ascending order.
 * 
 * linearithmic time complexity
 * how?
 * T(n) = a T(n/b) + f(n)
 * 
 *  a: The number of sub-problems is 2 (line 25). So, a = 2.
    b: Each of the sub-problems divides n in half. So, b = 2
    f(n): The work done outside the recursion is the function merge, which has a runtime of O(n) since it visits all the elements on the given arrays.
 */

const mergeSort = (array=[]) => {
    const size = array.length;
    if(size < 2) return array;
    if(size === 2){
        return array[0] > array[1] ? [array[1], array[0]] : array;
    }

    const mid = parseInt(size/2, 10 );
    return merge(mergeSort(array.slice(0, mid)), mergeSort(array.slice(mid)))
}

function merge(array1 = [], array2 = []) {
    const merged = [];
    let array1Index = 0;
    let array2Index = 0;
    // merge elements on a and b in asc order. Run-time O(a + b)
    while (array1Index < array1.length || array2Index < array2.length) {
      if (array1Index >= array1.length || array1[array1Index] > array2[array2Index]) {
        merged.push(array2[array2Index]);
        array2Index += 1;
      } else {
        merged.push(array1[array1Index]);
        array1Index += 1;
      }
    }
    return merged;
  }

  console.log(mergeSort([5,6,7,3,2,21,3,23,532,12,3221,2,22,3231]))