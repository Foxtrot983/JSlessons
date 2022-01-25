let	 a, b;
a = Number(prompt());
b = Number(prompt());
let c = 0;

function HelloJs(a, b){
	for (c; c<10; a++){
  	console.log(a);
    b = b + 2;
    ++c;
  }	return [a, b];
};

let result = HelloJs(a, b);
let output1 = result[0];
let output2 = result[1];
alert(`${output1} and ${output2}`);
