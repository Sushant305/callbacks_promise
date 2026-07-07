const division = (fnumber, secnumber) => {
  return new Promise((resolve, reject) => {
    if (secnumber === 0) {
      reject("Cannot divide by zero");
    } else {
      let result = fnumber / secnumber;
      console.log(`The Division of ${fnumber} and ${secnumber} is ${result}`);
      resolve(result);
    }
  });
};
const main = async () => {
  try {
    console.log(await division(12, 2));
    console.log(await division(10, 2));
    console.log(await division(0, 2));
    console.log(await division(10, 0));
    console.log(await division(2, 2));
  } catch (error) {
    console.log(error);
  }
};
main()
