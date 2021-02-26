// Given an integer array Arr[] of size N. The task is to find sum of it.
class Solution {
    sum(arr, n) {
        let acc = 0;
        for (let i = 0; i < arr.length; i++) {
            acc += arr[i];
        }
        return acc;
    }
}