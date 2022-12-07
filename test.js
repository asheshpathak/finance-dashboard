var inputArr = [3,4,5,7,8,9]

//987543

var len = inputArr.length;
var max = inputArr[0];
var output = 0 ;
var power = len;

for(var j = 0 ; j<len ; j++)
{
    for(var i = 0;i<len;i++)
    {
        if(inputArr[i]>max)
        {
            max = inputArr[i]
        }
    }

    output = max*(Math.pow(10,power))
    power--
}

console.log(len)
console.log(Math.pow(10,power))
//Finding maximum number
