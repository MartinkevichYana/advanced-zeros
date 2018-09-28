module.exports = function getZerosCount(number, base) {
  // your implementation

  var obj = numberOfPrime(factorization(base));
  var objForMin = {};
  var arr = [];
  var arr1 = [];
  var a = 0;
  var c = 0;
  var min = 0;
  for(var key in obj) {
  	c++;
  	arr.push(key);
  }
  for(var i = 0; i < c; i++) {
  	a = Math.floor(getCountN(number, arr[i]) / obj[arr[i]]);
  	Object.defineProperty(objForMin, i, {
		value: a,
		enumerable: true
	});
  }
  for(var key in objForMin) {
  	arr1.push(objForMin[key]);
  }
  var min = Math.min.apply(null, arr1);
  return min;

}

function getCountN(number, n) {

  var count = 0;
  while(number != 0) {
  	number = Math.floor(number/n);
  	count += number;
  }
  return count;
}

function nextPrimeNumber(n) {

	for(var i = 2; i < n;) {
		if(n % i == 0) {
			n++;
			i = 2;
		} else {
			i++;
		}
	}
	return n;
}

function factorization(num) {

	var j = 0;
	var i = 2;
	var arr = [];
	if(num == 2) {
		arr[0] = 2;
	} else {
		do {

		 	if (num % i == 0) {
		  		arr[j] = i;
		  		j++;
		  		num = num / i;
		 	} else {
		  		i = nextPrimeNumber(i + 1);
		 	}
		}
		while (i < num);
		arr[j] = i;
	}

	return arr;
}

function numberOfPrime(arr) {

	var elem = arr[0];
	var count = 1;
	var obj = {};

	for(var i = 1; i < arr.length; i++) {
		if(elem == arr[i]) {
			count++;
		} else {
			Object.defineProperty(obj, elem, {
				value: count,
				enumerable: true
			});
			elem = arr[i];
			count = 1;
		}
	}

	Object.defineProperty(obj, elem, {
		value: count,
		enumerable: true
	});

	return obj;
}