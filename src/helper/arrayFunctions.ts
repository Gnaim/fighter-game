export function getRandomElement<T>(array: Array<T>): T {
  return array[Math.floor(Math.random() * array.length)];
}

export function shuffleArray<T>(array: Array<T>): Array<T> {
  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}
