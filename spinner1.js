const emojiarray = ['😋','💁','👌','😍'];
let timer = 100;
for (let emoji of emojiarray) 
{
  for (let i=0; i<5 ;i++) {
    emoji += emoji;
  }
  setTimeout(() => {
    process.stdout.write(`\r${emoji} `);
  }, timer);
  timer +=200
}


