/**
 * desc: 快速排序
 */

function quickSort (array) {
    let len = array.length;
    if (len < 2) {
        return array;
    }
    let lesser = [],
        greater = [],
        basic = array[0];

    for (let i = 1; i < len; i++) {
        if (array[i] < basic) {
            lesser.push(array[i]);
        } else {
            greater.push(array[i]);
        }
    }
    return quickSort(lesser).concat(basic, quickSort(greater));
}