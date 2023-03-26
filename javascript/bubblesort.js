async function bubbleSort() {
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          await sleep(speed * 50);
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          drawArray();
        }
      }
    }
  }