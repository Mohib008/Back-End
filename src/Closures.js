// Closures 

  //. function that refer to variables declared by parent funcntion.
  //. Possible because of scoping.


  /*function makeFunctionArray() {
      const arr = [];

      for (var i = 0; i < 5; i++){
          arr.push(function() {console.log(i)});
      }
      return arr;
  }

  const arr = makeFunctionArray();*/

  functionArray = () => {
      const arr = [];
      for(let i = 0; i < 5; i++){
          arr.push(() => {console.log(i)});
          console.log(i);
      }
      return arr;
  }

  const functionArr = functionArray();