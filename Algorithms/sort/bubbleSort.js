/**
 * desc: 冒泡排序
 */

 function swap (array, index1, index2) {
    [array[index1], array[index2]] = [array[index2], array[index1]];
 };

function bubbleSort (array) {
    let len = array.length;
    for (let outer = len; outer > 1; outer--) {
        for (let inner = 0; inner < outer; inner++) {
            if (array[inner] > array[outer]) {
                swap(array, inner, outer);
            }
        }
    }
    return array;
}