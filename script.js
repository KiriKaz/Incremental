var money = 0;
var pickcost = 30;

var increaseby = 1;

function inc1(){
	money += increaseby;
	document.getElementById('mT').innerHTML = money;
}

function buyPick(){
	if(money >= pickcost){
		money -= pickcost
		pickcost *= 3;
		increaseby *= 2;
		document.getElementById('mT').innerHTML = money;
		document.getElementById('buyWorker').value = "Buy a better pick for " + pickcost + "$";
	}
}