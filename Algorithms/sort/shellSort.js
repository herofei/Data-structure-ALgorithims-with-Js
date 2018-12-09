/**
 * desc: 希尔排序
 */

function shellSort (array) {
    // 步长序列
    let GAPS = [5, 3, 1],
        j;
    for (let g = 0; g < GAPS.length; ++g) {
        for (let i = GAPS[g]; i < array.length; ++i) {
            let temp = array[i];
            for (j = i; j >= GAPS[g] && array[j - GAPS[g]] > temp; j -= GAPS[g]) {
                array[j] = array[j - GAPS[g]];
            }
            array[j] = temp;
            console.log(array);
        }
    }
    return array;
}