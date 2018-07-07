//////////////////////////////////////////////////////////////////////////
//  This small program allows users to check whether their area is      //
//  covered by ECS. Below, variables are declared and set.              //
//                                                                      //
//  This program works fine on the front end, but I'd really like to    //
//  implement a loop to look through an array containing service area   //
//  postcodes, instead of clumsily including them in the if statement.  //
//////////////////////////////////////////////////////////////////////////

var userPostcode = 0;  //defines userPostcode and sets value to 0.




//////////////////////////////////////////////////////////////////////////
//  This function takes data from the input box 'postcodeInput on the   //
//  home page, and stores it in the 'userPostcode' variable.            //
//////////////////////////////////////////////////////////////////////////    

function getPostcode() {
        
    userPostcode = document.getElementById('postcodeInput').value;
    //This sets 'userPostcode' to the value from the text box.

}




//////////////////////////////////////////////////////////////////////////
//  This function displays the result to the user, and takes its data   //
//  from the preceding functions.                                       //
//////////////////////////////////////////////////////////////////////////

function displayResult() {
    
    
    if (userPostcode === "3160" || userPostcode === "3161") {
        
        document.getElementById("display").innerHTML = "We service your area! Ready to contact us?";
        
    }
        
    
    
    else {
        
        document.getElementById("display").innerHTML = "We don't usually travel to your area, however, feel free to contact us for a PC build, or if you think you're just out of reach!";
        
    }

}




//////////////////////////////////////////////////////////////////////////
//  This function checks if the entered postcode is the correct length  //
//  and only displays a result if the length is 4.                      //
//  In terms of validation, this is pretty poor, but it's passable.     //
//////////////////////////////////////////////////////////////////////////

function validateEntry() {
    
    if (userPostcode.length == 4) {
        
        displayResult();
    }

    
    
    else {
        
        document.getElementById("display").innerHTML = "Please enter a valid postcode!";
        getPostcode();
        
    }
}




//////////////////////////////////////////////////////////////////////////
//  This function is called when the user clicks the 'Check Postcode'   //
//  button on the homepage. It's purpose is to call other functions.    //
//////////////////////////////////////////////////////////////////////////

function checkService() {
    
    getPostcode();
    validateEntry();
    
}