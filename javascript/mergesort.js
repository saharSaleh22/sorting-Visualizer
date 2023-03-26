async function mergeSort(arr) {
    console.log("inside merge");
    if (arr.length <= 1) {
      return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    const leftSorted = await mergeSort(left);
    const rightSorted = await mergeSort(right);
    return merge(leftSorted, rightSorted);
  }
  
  async function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
  
        j++;
      }
    }
    array = result.concat(left.slice(i)).concat(right.slice(j));
    drawArray();
    await sleep(speed * 50);
  
    return array;
  }