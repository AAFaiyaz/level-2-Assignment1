{
    function sumArray(numArr) {
        var sum = 0;
        numArr.forEach(function (elem) {
            sum += elem;
        });
        return sum;
    }
    console.log(sumArray([1, 2, 3, 4, 5]));
}
