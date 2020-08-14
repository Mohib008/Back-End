// Scope

// . variable lifetime
  // . lexical scoping(var): from when they're declared until when their function ends.
  // . Block Scoping (const, let): until the next } is rearched.

// Hoisting
  // . function defintions are hoisted, but not lexically-scoped initializations. 

  thisIsHoisted();
  
  const thisIsConst = 50;

  const constObj = {}

  let thisIsLet = 40;
  thisIsLet = 30;

  var thisIsVar = 20;
  thisIsVar = 10;

  function thisIsHoisted() {
      console.log("this is a function declared at the bottom of the file!");
  }