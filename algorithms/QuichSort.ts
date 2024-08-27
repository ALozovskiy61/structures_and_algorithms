const quickSort = <T>(array: T[]): T[] => {
    if (array.length <= 1) {
        return array;
    }

    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex];
    let less: T[] = []; 
    let equal: T[] = []; 
    let greater: T[] = []; 

    for (let i = 0; i < array.length; i++) {
        if (array[i] < pivot) {
            less.push(array[i]);
        } else if (array[i] > pivot) {
            greater.push(array[i]);
        } else {
            equal.push(array[i]);
        }
    }

    return [...quickSort(less), ...equal, ...quickSort(greater)];
}
