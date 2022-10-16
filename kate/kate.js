    const matrix = [
        [0, 1, '^^'],
        [0, '^^', 2],
        ['^^', 1, 2]
       ];
   function countCats(matrix) {
     let arr = matrix.flat(matrix.length).filter(item => item === '^^');
    //  return arr.length;
     console.log(arr);
   }