const fetchData = (type: number) => {
  return new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      if (type < 10) {
        resolve(99);
      } else {
        reject("error");
      }
    }, 1000);
  });
};

export { fetchData };
