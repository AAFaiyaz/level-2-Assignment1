{
  function removeDuplicates(numArr: number[]): number[] {
    const uniqueArr = numArr.filter(
      (num, index) => numArr.indexOf(num) === index
    );
    return uniqueArr;
  }
}
