function is canadianPostalCode(s) {
  return [A-Z][0-9][A-Z]\s[0-9][A-Z][0-9].test(s);
}

function is visaNumber(s) {
  return [4][0-9]{15}
}

function is masterCard(s) {
  return [5][0-9]{14}
}

function is adaLiteral(s) {
  [-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)? //takes care of integers, fps, and exponents
  [-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?([0-9_]*) //matches underscores->decliteral
  // NEED TO INCLUDE BASED LITERALS
  [-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?([0-9_]*)([0-9A-Fa-f#]*)//last part doesn't match based literals exactly
  
}

function is latinLetter(s) {
}

function div32(s) {
  return (100000)
}

function decRange(s) {
  return \b([0-9]|1[0-9]|2[0-9]|3[0-6])\b
}
