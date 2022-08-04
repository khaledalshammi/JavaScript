/*
  Promise
  - All
  - All Settled
  - Race
*/

const myFirstPromise = new Promise((res, rej) => {
    setTimeout(() => {
      res("Iam The First Promise");
    }, 5000);
  });
  
  const mySecondPromise = new Promise((res, rej) => {
    setTimeout(() => {
      rej("Iam The Second Promise");
    }, 1000);
  });
  
  const myThirdPromise = new Promise((res, rej) => {
    setTimeout(() => {
      res("Iam The Third Promise");
    }, 2000);
  });

  // if all given are resolved it will return a list that contains all values
  // if one of given is rejected it will reject that element
  // Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(
  //   (resolvedValues) => console.log(resolvedValues),
  //   (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
  // );
  
  // return all result 
  // Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).then(
  //   (resolvedValues) => console.log(resolvedValues),
  //   (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
  // );

  //it will return the first element 
  Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then(
    (resolvedValues) => console.log(resolvedValues),
    (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
  );