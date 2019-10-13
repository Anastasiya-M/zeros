module.exports = function zeros(expression) {
  let exp = expression.split("*"); 
  let amountOf2 = 0;
  let amountOf5 = 0;
  
  for (let i=0; i<exp.length; i++) {
    if (exp[i].indexOf("!!") != -1) { 
      for (let NumberDoubleFactorial = exp[i].slice(0, (exp[i].length - 2)); NumberDoubleFactorial>0; NumberDoubleFactorial = NumberDoubleFactorial-2) {
        let division5 = NumberDoubleFactorial;
        let division2 = NumberDoubleFactorial;
        while (division5 % 5 == 0) {
          amountOf5++;
          division5 = division5/5;
        }
        while (division2 % 2 == 0) {
          amountOf2++;
          division2 = division2/2;
        }
      }
    }
        
    else {
      for (let NumberFactorial=exp[i].slice(0, (exp[i].length - 1)); NumberFactorial>0; NumberFactorial = NumberFactorial-1) {
        let division5 = NumberFactorial;
        let division2 = NumberFactorial;
        while (division5 % 5 == 0) {
          amountOf5++;
          division5 = division5/5;
        }
        while (division2 % 2 == 0) {
          amountOf2++;
          division2 = division2/2;
        }
      }
    }
  }

  if (amountOf2 > amountOf5) {
    return amountOf5;
  }
  else {
    return amountOf2;
  }
}

