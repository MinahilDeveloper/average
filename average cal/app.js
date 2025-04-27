let sum = 0;
for (let i = 1; i <= 10; i++) 
    
{
  let age = parseInt(prompt(`Enter the age of student ${i}:`));
  sum += age;
}

let average = sum / 10;
alert("The average age is: " + average);
