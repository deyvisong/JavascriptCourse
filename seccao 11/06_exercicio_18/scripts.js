class WordCounter {
  constructor() {}

  countWords(string) {
    if (string.trim() === "") {
      return 0;
    } else {
      const words = string.trim().split(/\s+/);
      return words.length;
    }
  }
}
