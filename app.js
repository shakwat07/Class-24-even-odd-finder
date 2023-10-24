// Even and Odd number Finder
function modulus(a) {
  let num = a;
  num %= 2;
  if (num == 0) {
    document.write("This is an Even Number");
  } else {
    document.write("This is a Odd Number");
  }
}
modulus(Number(prompt()));
