var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);

  return `Welcome, ${name}. You are number ` + katzDeliLine.length + ` in line.`;
}

function nowServing() {

  if (katzDeliLine.length === 0)
  {
    return "The line is currently empty.";
  }
  else{
    katzDeliLine[0] =  nextPerson;

    katzDeliLine.splice(0,1);

    return "nextPerson";
  }
}
