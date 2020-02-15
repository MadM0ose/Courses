function sampleFunc() {
    console.log ( `${arguments.callee.name}: ${arguments[0]} | ${arguments[1]}` )
}

function modificator(func) {
  let funcBind = func.bind(null, "test", "sample")
  console.log(funcBind) 
}
modificator( sampleFunc )


