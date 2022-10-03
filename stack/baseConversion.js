function convertToBase (numInput, Base) {
    const stack = [];
    do {
      const remainder = numInput % Base
      stack.push(remainder);
      numInput = Math.floor(numInput /= Base)
    }while(numInput > 0);
    let converted = "";
    while(stack.length > 0){
      converted += stack.pop();
    }
    return converted;
  }
  
  console.log(convertToBase(434, 10))