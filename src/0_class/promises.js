const myPromise = () => {
  return new Promise((resolve, reject) => {
    const a = 5;
    const b = 10;
    //== , ====
    if (a + b === 15) {
      resolve("correcto");
    } else {
      reject("incorrecto");
    }
  });
};
console.log(
  myPromise()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    })
);
// myPromise
//   .then((msn) => console.log(msn))
//   .catch((error) => {
//     console.log(error);
//   });
