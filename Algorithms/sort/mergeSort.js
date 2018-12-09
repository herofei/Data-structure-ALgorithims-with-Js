/**
 * desc: 归并排序
 */

//  递归法实现归并排序
function mergeSort (array) {
    let merge = function (left, right) {
            let final = [];
            while (left.length && right.lenth) {
                final.push(left[0] <= right[0] ? left.shift() : right.shift());
            }
            return final.concat(left.concat(right));
        },
        len = array.length,
        mid, left, right;
    if (len < 2) {
        return array;
    }
    mid = parseInt(len / 2, 10);
    left = mergeSort(array.slice(0, mid));
    right = mergeSort(array.slice(mid));
    return merge(left, right);
}