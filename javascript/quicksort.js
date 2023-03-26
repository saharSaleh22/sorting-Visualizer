async function quickSort(arr) {
    const stack = [[0, arr.length - 1]];
    while (stack.length) {
      const [lo, hi] = stack.pop();
      if (lo >= hi) continue;
      let i = lo - 1,
        j = hi + 1,
        pivot = arr[Math.floor((lo + hi) / 2)];
      while (true) {
        do {
          i++;
        } while (arr[i] < pivot);
        do {
          j--;
        } while (arr[j] > pivot);
        if (i >= j) break;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        drawArray();
        await sleep(speed*50);
      }
      stack.push([lo, j]);
      stack.push([j + 1, hi]);
    }
  }