var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);

  return `Welcome, ${name}. You are number ` + katzDeliLine.length + ` in line.`;
}

function nowServing(katzDeliLine) {

  if (katzDeliLine.length === 0)
  {
    return "There is nobody waiting to be served!";
  }
  else{
    let nextPerson = katzDeliLine[0];

    katzDeliLine.splice(0,1);
    return `Currently serving ${nextPerson}.`;
  }
}
