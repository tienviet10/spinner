const loading = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];

const slowCount = (i, delay) => {
  if (i === loading.length) return process.stdout.write("\r Hello there!\n");
  setTimeout(() => {
    process.stdout.write(loading[i]);
    slowCount(i + 1, 200);
  }, delay);
};

slowCount(0, 100);


