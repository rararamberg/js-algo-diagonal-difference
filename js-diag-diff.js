function diagonalDifference(arr) {
  // assign variable for while loop iterations and sum for diagonal directions
  // one variable to start at 0 index (beginning of array)
  // one variable to start at end of array
  let i = 0
  let j = arr.length
  let primary = 0
  let secondary = 0
  // while loop passing conditional that loop through the beginning and end of array
  while (i < arr.length && j > 0) {
    // primary adds the number at start index/array (column/row) to the next index/array (forward direction)
    primary += arr[i][i]
    // secondary adds number at ending index of first array then the next index/array (backward direction)
    secondary += arr[i][j - 1]
    // increment and decrement variables to start at the next index/array row and eventually break the loop
    i++
    j--
  }
  // return the diagonal difference in absolute value between both sums 
  return Math.abs(primary - secondary)
}

// console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]))
console.log(diagonalDifference([[-1, 1, -7, -8], [4, 5, 6, 9], [10, 8, -12, 3], [1, 2, 3, 4]]))
