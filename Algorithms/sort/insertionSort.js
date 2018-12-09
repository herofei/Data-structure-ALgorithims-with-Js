/**
 * desc: 插入排序
 */

function swap (array, index1, index2) {
    [array[index1], array[index2]] = [array[index2], array[index1]];
 };

function insertionSort (array) {
    let len = array.length,
        temp,
        inner;

    // 循环待排序数组
    for (let outer = 1; outer < len; outer++) {
        temp = array[outer];
        inner = outer;

        // 循环待排序数组前面的有序列
        while (inner > 0 && (array[inner -1] >= temp)) {

            // 前民有序列中大于temp的值都要往后移动
            array[inner] = array[inner - 1];
            --inner;
        }
        array[inner] = temp;
    }
    return array;
}



// 另一种解法 
function insertionSort (array) {
    let len = array.length;

    // 循环待排序数组
    for (let outer = 1; outer < len; outer++) {
        temp = array[outer];

        // 循环待排序数组前面的有序列
        for (let inner = 0; inner < outer; inner++) {
            if (array[inner] > temp) {
                this.splice(inner, 0, temp);
                this.splice(outer, 1);
                break;
            }
        }
    }
    return array;
}