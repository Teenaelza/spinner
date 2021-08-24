const spinarray = ['|','/','-','\\'];
let timer = 100;
const spinner2 = (spinarray) => {
  spinarray.forEach(hand => {
    setTimeout(() => {
      process.stdout.write(`\r${hand} `);
    }, timer);
    timer +=200  
  });
}
spinner2(spinarray);



