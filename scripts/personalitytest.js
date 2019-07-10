
/* Function is fired via an event listener when the Calculate button is clicked */
window.onload = function() {
    document.getElementById("calcbutton").addEventListener("click", calculate);
}

/* Gets the resulting message from the last function on this page in accordance to which radio boxes the user has checked, as returned in the function below */
function calculate() {
    var form_result = getformResult();
    var message = resultMessage(form_result);
    document.getElementById("formresultstext").innerHTML = message;
}

/* I tried out a number of ways to retrieve the value of checked radio boxes, including cycling through an array based on the getElementById function.
However, I have found that the simplest way to do it, with much less code employed, is to employ querySelectors, which return the values; those values are 
then assigned to the variable 'result'.
Although we have not studied querySelectors, I understand their purpose in returning first elements in matching specified selectors.
https://stackoverflow.com/questions/7275597/getting-the-selected-radio-without-using-id-but-name */
function getformResult() {
	var result = {};
    result.age = document.querySelector('input[name=age]:checked').value;
    result.bmi = document.querySelector('input[name=bmi]:checked').value;
    result.diabetes = document.querySelector('input[name=diabetes]:checked').value;
    result.diet = document.querySelector('input[name=diet]:checked').value;
	return result;
}

/* ParseInt method employed to line-up returned integer values from radio boxes so that they can be added to each other */
function resultMessage(form_result) {
	var totalCalc = parseInt(form_result.age) + parseInt(form_result.bmi) + parseInt(form_result.diabetes) + parseInt(form_result.diet);
	if (totalCalc <= 15) {
		message = "Your results show that you currently have a low risk of developing diabetes. However, it is important that you maintain a healthy lifestyle in terms of diet and exercise.";
	} else if (totalCalc <= 25) {
		message = "Your results show that you currently have a medium risk of developing diabetes. For more information on your risk factors, and what to do about them, please visit our diabetes advice website at <a href='http://www.zha.org.zd'>http://www.zha.org.zd</a>";
	} else {
		message = "Your results show that you currently have a HIGH risk of developing diabetes. [Your main risk factors are your BMI and your diet.] We advise that you contact the Health Authority to discuss your risk factors as soon as you can. Please fill in our <a href='contactform.html'>contact form</a> and a member of the Health Authority Diabetes Team will be in contact with you.";
	}
	return message;
}
