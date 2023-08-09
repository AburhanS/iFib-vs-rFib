// Iterative

function fibonacciNth(n) {
    if (n <= 0) {
        throw new Error ("Invalid number. Fibonacci sequence starts from 1")
    }else if(n === 1 || n === 2){
        return 1;
    }else {
        let a = 1;
        let b = 1;
        for (let i = 3; i <= n; i++) {
            let temp = a + b;
            a = b;
            b = temp;
        }
        return b;
    }
}

console.log(fibonacciNth(7));



// Recursive

function fibonacciNth(n) {
    if(n <= 0){
        throw new Error("Invalid number. Fibonacci sequence starts from 1");
    }else if(n === 1 || n === 2) {
        return 1;
    }else{
      return fibonacciNth(n - 1) + fibonacciNth(n - 2); // recursive call
    }
}

console.log(fibonacciNth(7));