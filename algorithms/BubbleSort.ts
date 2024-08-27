const bubbleSort = (array: number[]): number[]  => {
    let isSwapped;
  
    do {
        isSwapped = false;
      console.log(array);
      array.forEach((item, index) => {
        if (item > array[index + 1]) {
          let tmp = item;
          array[index] = array[index + 1];
          array[index + 1] = tmp;
          isSwapped = true;
        }
      })
    } while (isSwapped);
    return array
  }
