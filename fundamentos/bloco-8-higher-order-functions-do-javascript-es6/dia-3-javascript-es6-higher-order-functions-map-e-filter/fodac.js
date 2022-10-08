function invtPalavra (palavra) {
  let tamanhoPalavra = palavra.length;
  let palavraInvt = '';
  for (i = tamanhoPalavra-1; i >= 0; i--) {
    palavraInvt += palavra[i];
  }
  if (palavraInvt == palavra) {
    console.log('E essa porra');
  } else {
    console.log('Nao e essa porra');
  }
}

invtPalavra('cu');


// if (palavraInvt == palavra) {
//   console.log('E essa porra');
//   console.log(palavraInvt);
// } else {
//   console.log('Nao e essa porra');
//   console.log(palavraInvt);
// }