function idCard()
{
	// I made every effort to make things appear in the order that they were stated in the final.

	var  firstName = document.getElementById("_i_first_name").value;
	var   lastName = document.getElementById("_i_last_name").value;
	var    address = document.getElementById("_i_address").value;

	document.getElementById("postFullName").innerHTML = firstName +" "+lastName;
	document.getElementById("postAddress").innerHTML = address;

	var          age = document.getElementById("_i_age").value;
	var  phonenumber = document.getElementById("_i_phone_number").value;

	var numberArray = [];
	numberArray.push(age);
	numberArray.push(phonenumber);

	// Reinitialize the contents of Age and Phone Number
	// It makes changing the values noticable.
	document.getElementById("postAge").innerHTML = "";
	document.getElementById("postPhoneNumber").innerHTML = "";

	for(var i = 0; i < numberArray.length; i++)
	{
		// This bit of code doesn't make sense, other than to demonstrate the use of an IF statement.
		// So I included it as required.

		// "Write an if/elseif statement within the for loop" - Written singular, so I assumed the use of only one if/elseif.

		// Check to see if the numberArray at index i is less than or equal to 100. 
		// If it is, use DOM innerHTML to write "Age: " plus the variable age.
		if(numberArray[i] <= 100)
		{
			console.log("numberArray["+i+"] is <= 100");
			document.getElementById("postAge").innerHTML = "Age: " + age;
		}
		// Check to see if the numberArray at index i is greater than 100. 
		// If it is, use DOM innerHTML to write "Phone Number: " plus the variable phoneNumber
		else if(numberArray[i] > 100)
		{
			console.log("numberArray["+i+"] is > 100");
			document.getElementById("postPhoneNumber").innerHTML = "Phone Number: " + phonenumber;
		}

		// This would have been more appropriate.
		//document.getElementById("postAge").innerHTML = "Age: " + age;
		//document.getElementById("postPhoneNumber").innerHTML = "Phone Number: " + phonenumber;
	}
}