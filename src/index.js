module.exports = function check(str, bracketsConfig) {
  
  var openBrackets = [];
  var bracketsPair = {};

  for (let i = 0; i < bracketsConfig.length; i++) {
    let key = bracketsConfig[i][0];
    let value = bracketsConfig[i][1];
    bracketsPair[key] = value;
  }
  return bracketsCheck(str, bracketsPair);
}
  


  function bracketsCheck (str, bracketsPair) {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
      let currentSymbol = str[i];
      let topEl = stack[stack.length - 1]
      if (Object.keys(bracketsPair).includes(currentSymbol)) {
        if(Object.values(bracketsPair).includes(currentSymbol)) {
          if (topEl === currentSymbol) {
            stack.pop();
          } else {
            stack.push(currentSymbol);
          }
        } else {
          stack.push(currentSymbol);
        }
      } else if (stack.length === 0) {
        return false;
      } else {
        if (currentSymbol === bracketsPair[stack.pop()]) {
          
        } else {
          return false;
        }
      }
  }
  return stack.length === 0;
  
  /*
  for (let i = 0; i < bracketsConfig.length; i++) {
    openBrackets[i] = bracketsConfig[i][0];
  }
  
  for (let i = 0; i < bracketsConfig.length; i++) {
    bracketsPair[i] = {[bracketsConfig[i][0]]: bracketsConfig[i][1]}
  }
  
  
  for (let i = 0; i < str.length; i++) {
    let currSymb = str[i];

    if (openBrackets.includes(currSymb)) {
      stack.push(currSymb)
    } else {
      if (stack.length === 0) {
        return false;
      } else {
        let topEl = stack[stack.length - 1]
      if (bracketsPair.topEl === currSymb) {
        stack.pop();
      } else {
        return false;
      }
      }
      
    }
  }
  return (stack.length === 0)
*/  
}
