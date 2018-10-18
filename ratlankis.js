console.log('Calculator started!');
var i;
var input_a = document.getElementById('aukstis');
var input_b = document.getElementById('skersmuo');
var input_c = document.getElementById('arka');
function tikrinti() {
	var a = parseInt(input_a.value);
	var b = parseInt(input_b.value);
	var c = parseInt(input_c.value);
	if (a>300 || a<50 || b>24 || b<13 || 1000<c) { //13cl=330mm, 24cl=610mm
		alert("ERROR");
		input_a.style.color='red';
		input_b.style.color='red';
		input_c.style.color='red';
	}
	else{
		var bkonv = Math.round(b*25.4);
		var ckonv = c*100;
		var sum = a + bkonv;
		document.getElementById('aukstine').innerHTML = 'Padangos aukstis'+ a + '(mm)';
		document.getElementById('skersmenis').innerHTML = 'Ratlankio skersmuo'+ bkonv + '(mm)';
		document.getElementById('arkos_ilgis').innerHTML = 'Arkos ilgis'+ ckonv + '(mm)';

		console.log(sum);
		input_a.style.color='green';
		input_b.style.color='green';
		if (sum < ckonv) {
			document.getElementById('result').innerHTML = 'Ratas tinkamas';
		}
		else{
			document.getElementById('result').innerHTML = 'Per mazas';
		}
	}
	//result.innerHTML=sum;
}