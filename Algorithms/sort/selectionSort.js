/**
 * desc: 选择排序
 */

function swap (array, index1, index2) {
    [array[index1], array[index2]] = [array[index2], array[index1]];
 };

function seletionSort (array) {
    let len = array.length,
        min;
    for (let outer = 0; outer < len - 1; outer++) {
        min = outer;
        for (let inner = outer + 1; inner < len; inner++) {
            if (array[inner] < array[min]) {
                min = inner;
            }
        }
        swap(array, outer, min);
    }
    return array;
}