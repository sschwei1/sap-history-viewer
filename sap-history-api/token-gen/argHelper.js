const initArguments = (args) => {
  const missingArgs = [];

  args.forEach((el) => {
    const searchTerm = el.key + '=';
    const input = process.argv.find(arg =>
      arg.startsWith(searchTerm) &&
      arg.length > searchTerm.length
    );

    if(input) {
      const val = input.split('=')[1];
      el.value = el.converter ? el.converter(val) : val;
    } else if(el.required) {
      missingArgs.push(el.key);
    }
  });

  if(missingArgs.length > 0) {
    console.log('Missing arguments!', missingArgs);
    process.exit(1);
  }
}

function getArgByKey(args, key) {
  return args.find(e => e.key === key);
}

const parseUsername = (el) => {
  return JSON.parse(el.replaceAll('\'', '"'));
}

module.exports = {
  initArguments,
  getArgByKey,
  parseUsername
}