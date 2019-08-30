function FizzBuzz(val) 
{
    if (isNaN(val)) {
        return val + " is not a number."
    }
    else 
    {
        returnval="";
        for (var i = 1; i <= val; i++) 
        {
             if (i > 1) returnval += ", ";
            if ((i % 15) === 0) 
            { 
                returnval += "FizzBuzz";
            }
            else if ((i % 5) === 0) 
            { 
                returnval += "Buzz";
            }
            else if ((i % 3) === 0) 
            { 
                returnval += "Fizz";
            }
            else 
            {
                 returnval += i.toString();
            }

                // console.log(returnval);
        }
    }
    return returnval;
}
console.log(FizzBuzz(15)); 