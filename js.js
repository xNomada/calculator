function sum(...args){
  let total = 0;
  args.forEach((e) => {
    total += e;
  })
  return total;
}

function subtract(...args){
  let total = 0;
  args.forEach((e) => {
    total = total === 0 ? total = e : total - e;
  })
  return total;
}

function multiply(...args){
  let total = 0;
  args.forEach((e) => {
    total = total === 0 ? total = e : total * e;
  })
  return total;
}

function divide(...args){
  let total = args[0];
  args.forEach((e) => {
    total = e === 0 ? 0 : total / e ;
  })
  return total
}
