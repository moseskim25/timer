arg = process.argv.slice(2).map(x => Number(x));

arg = arg.filter(x => !isNaN(x));

const max = Math.max(...arg);

arg.push('\n');

for (let each of arg) {
  if (each < 0) {
  } else if (each === '\n') {
    setTimeout(() => {
      process.stdout.write('\n');
    }, max * 1001);
  } else {
    setTimeout(() => {
      process.stdout.write('.');
    }, each * 1000);
  }
}
