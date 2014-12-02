/**
 * @author Joseph Jobbings
 */
function trianglePrint() {
	var c = '*';
	var s = c;
	while (s.length < 7) {
		console.log(s);
		s += c;
	}
}

function printFizzBuzz() {
	var low = 1;
	var high = 100;
	do {
		if (low % 3 == 0) {
			console.log("Fizz");
		} else if (low % 5 == 0) {
			console.log("Buzz");
		} else {
			console.log(low);
		}
		low++;
	} while(low-1 < high);
}

function chessBoard(symbol) {
	// if(symbol IS NOT ALPHANUMERIC) alert("a printable character is required in input")
	var x = 8, y = 8, len, line = 0, s = "", first, second;
	while (line < y) {
		len = 0;
		// init on entering loop
		if (line % 2 == 0) {
			first = " ";
			// first char is a space on alternate lines
			second = symbol;
		} else {
			first = symbol;
			second = " ";
		}
		while (len < x) {
			s += (len % 2 == 0 ? first : second); // incremental operator on strings
			len++;
		}
		s += '\n';
		line++;
	}
	console.log(s);
}
