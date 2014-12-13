var calculator = {


   one: document.getElementById("one"),
   two: document.getElementById("two"),
   three: document.getElementById("three"),
   four: document.getElementById("four"),
   five: document.getElementById("five"),
   six: document.getElementById("six"),
   seven: document.getElementById("seven"),
   eight: document.getElementById("eight"),
   nine: document.getElementById("nine"),
   zero: document.getElementById("zero"),
   display: document.getElementById("screen"),
   times: document.getElementById("times"),
   plus: document.getElementById("plus"),
   minus: document.getElementById("minus"),
   divide: document.getElementById("divide"),
   percent: document.getElementById("percentage"),
   equals: document.getElementById("equal"),
   plus: document.getElementById("plus"),
   clear: document.getElementById("c"),
   del: document.getElementById("del"),
   dot: document.getElementById("dot"),
 

  clicks: function () {
    one.onclick= function () {
      calculator.display.value+= one.value;
    };

    two.onclick=  function () {
      calculator.display.value+= two.value;
    };

    three.onclick= function () {
      calculator.display.value+= three.value;
    };

    four.onclick= function () {
      calculator.display.value+= four.value;
    };

    five.onclick= function () {
      calculator.display.value+= five.value;
    };

    six.onclick= function () {
      calculator.display.value+= six.value;
    };

    seven.onclick= function () {
      calculator.display.value+= seven.value;
    };

    eight.onclick= function () {
      calculator.display.value+= eight.value;
    };

    nine.onclick= function () {
      calculator.display.value+= nine.value;
    };

    zero.onclick= function () {
      calculator.display.value+= zero.value;
    };

    times.onclick= function () {
      calculator.display.value+= " * ";
    };

    plus.onclick= function () {
      calculator.display.value+= " + ";
    };

    divide.onclick= function () {
      calculator.display.value+= " / ";
    };

    minus.onclick= function () {
      calculator.display.value+= " - ";
    };

    calculator.equals.onclick= function () {
      var answer = eval(calculator.display.value);
      calculator.display.value = answer;
      console.log("evaluated");
    };

    calculator.percent.onclick= function () {
      calculator.display.value+= " % ";
    };

    calculator.clear.onclick= function () {
      calculator.display.value = "";
    };

    calculator.del.onclick= function () {
      calculator.display.value = calculator.display.value.slice(0, -1);
    };

    calculator.dot.onclick = function () {
      calculator.display.value += "."
    }
  }
}

calculator.clicks();