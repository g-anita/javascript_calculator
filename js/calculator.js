var num = "",
		num2 = "",
		result = 0,
		operator = "";

var screenDisplay = document.querySelector("#screen"),
		numButton = document.querySelectorAll(".num"),
		operatorButton = document.querySelectorAll(".operator"),
		negButton = document.querySelector("#neg"),
		decButton = document.querySelector("#decimal"),
		percentButton = document.querySelector("#percent"),
		clearButton = document.querySelector("#clear"),
		equalButton = document.querySelector("#equal");

init();
numbers();
operators();
equal();
percent();
addNegative();

function init(){
	num = "";
	num2 = "";
	result = 0;
	operator = "";
	screenDisplay.textContent = result;
};

clearButton.addEventListener("click", init);

function equal(){
	equalButton.addEventListener("click", function(){
		arithmetic();
		screenDisplay.textContent = result;
	});
};

function numbers(){
	for (var i = 0; i < numButton.length; i++) {
		numButton[i].addEventListener("click", function(){
			if (num.includes(".")){
				decButton.disabled = true;
			} else {
				decButton.disabled = false;
			}
			num += this.value;
			screenDisplay.textContent = num;
		});
	};
};

function operators(){
	for (var i = 0; i < operatorButton.length; i++) {
		operatorButton[i].addEventListener("click", function(){
			if(num2 === ""){
				num2 = num;
			} else {
				arithmetic();
				num2 = result;
				screenDisplay.textContent = result;
			}
			num = "";
			operator = this.value;
			decButton.disabled = false;
		});
	};
};

function arithmetic(){
	if (operator === "+"){
		result = parseFloat(num2) + parseFloat(num);
	} else if (operator === "-"){
		result = parseFloat(num2) - parseFloat(num);
	} else if (operator === "*"){
		result = parseFloat(num2) * parseFloat(num);
	} else if (operator === "/"){
		result = parseFloat(num2) / parseFloat(num);
	}
	return result;
};

function addNegative(){
	negButton.addEventListener("click", function(){
		if (!num.includes("-")){
		num = "-" + num;
		} else {
		num = num.replace("-", "");
		}
		screenDisplay.textContent = num;
	});
};

function percent(){
	percentButton.addEventListener("click", function(){
		result = (parseFloat(num)/100);
		screenDisplay.textContent = result;
	});
};
