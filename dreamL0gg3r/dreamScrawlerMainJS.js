    
	//var checkBoxClass = document.getElementsByClassName('checkBoxes').value;
    //var inputFields = document.getElementsByClassName('textFields').value;
    var recurringBox = document.getElementById('recurringBox');
    var nightmareBox = document.getElementById('nightmareBox');
    var symbolicBox = document.getElementById('symbolicBox');
    var vividBox = document.getElementById('vividBox');
    var bizzareBox = document.getElementById('bizzareBox');
    var paralysisBox = document.getElementById('paralysisBox');
    var lucidBox = document.getElementById('lucidBox');
    var propheticBox = document.getElementById('propheticBox');
    var spiritualBox = document.getElementById('spiritualBox');
    var shortDesc = document.getElementById('shortDesc');
    var fullDesc = document.getElementById('fullDesc');
    var significantField = document.getElementById('significantField');
    var datetimeField = document.getElementById('datetimeField');
    var submitButton; //= document.getElementById('submitBtn');
    


window.onload = function()
{
	

	submitButton = document.getElementById('submitBtn');


	submitButton.addEventListener('click', getDreamInfo);
	
}
 

function getDreamInfo()
{
	

	document.getElementById('form_id').submit();
    
	
};

