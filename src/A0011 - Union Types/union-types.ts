function addOrConcat(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  } else {
    return 'Inválido';
  }
}

console.log(addOrConcat('10', '20'));
