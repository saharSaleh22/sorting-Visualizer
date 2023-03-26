async function heapSort(arr) {
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
      await heapify(arr, arr.length, i);
    }
  
    for (let i = arr.length - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      drawArray();
      await sleep(speed*50);
  
      await heapify(arr, i, 0);
    }
  }
  
  async function heapify(arr, n, i) {
    let largest = i; 
    let l = 2 * i + 1; 
    let r = 2 * i + 2; 
  
    if (l < n && arr[l] > arr[largest]) {
      largest = l;
    }
  
  
    if (r < n && arr[r] > arr[largest]) {
      largest = r;
    }
  
  
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      drawArray();
      await sleep(speed*50);
  
      await heapify(arr, n, largest);
    }
  }
  