let asteriscos = '';

function quadrado (n) {
  for (i = 1; i <= n; i++) {
    asteriscos += '*';
  }
  
  for (i = 1; i<= n; i++) {
    console.log(asteriscos);
  }
}

quadrado(3);
