/**
 * desc: 生成测试数组方法
 */

function createTestArray (len) {
    let array = [];
    for (let i = 0; i < len; i++ ) {
        array[i] = Math.floor(Math.random() * (len + 1));
    }
    return array;
}