function learningScope() {
  console.log("learning var");
  console.log('x:', x);// this is call variable hositing.
  var x = 10;
  console.log('x:', x);
}

//learningScope();

function testGlobal() {// no keword vaiable declartion
  global = 22;
  console.log('global:', global);
  global = 44;
  console.log('global:', global);
}
testGlobal();
console.log('global:', global);
