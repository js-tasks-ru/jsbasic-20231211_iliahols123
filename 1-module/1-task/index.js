function factorial(n) {
    if (n < 0) {
     return "Факториал не определен для отрицательных чисел";
    }
  
    let result = 1;
    
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
  
    return result;
  }
