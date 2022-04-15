//LEVEL 1
//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
    let challenge = "30 Days of JavaScript.";
//Print the string on the browser console using console.log()
    console.log(challenge)
//Print the length of the string on the browser console using console.log()
    console.log(challenge.length)
//Change all the string characters to capital letters using toUpperCase() method
    console.log(challenge.toUpperCase())
//Change all the string characters to capital letters using toLowerCase() method
    console.log(challenge.toLowerCase())
//Cut (slice) out the first word of the string using substr() or substring() method
    console.log(challenge.substring(3,7))
//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
    console.log(challenge.substring(3,21))
//Check if the string contains a word Script using includes() method
    console.log(challenge.includes('Script')) 
//Split the string into an array using split() method
   console.log(challenge.split())
//Split the string 30 Days Of JavaScript at the space using split() method
   console.log(challenge.split(" "))
//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
   let newString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
   console.log(newString.split(","))
//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
   console.log(challenge.replace("JavaScript", 'Python'))
//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
   console.log(challenge.charAt(15))
//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
   console.log(challenge.charCodeAt('J'))
//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
   console.log(challenge.indexOf('a'))
//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'))
//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
    let newString2 = 'You cannot end a sentence with because because because is a conjunction'
    console.log(newString2.indexOf('because'))
//Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
    console.log(newString2.lastIndexOf('because'))
//Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
        console.log(newString2.search('because'))
//Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
      let newString3 = '   30 Days Of JavaScript   ';
      console.log(newString3.trim())
//Use startsWith() method with the string 30 Days Of JavaScript and make the result true
     console.log(challenge.startsWith('30'))
//Use endsWith() method with the string 30 Days Of JavaScript and make the result true
    console.log(challenge.endsWith('JavaScript'))
//Use match() method to find all the a’s in 30 Days Of JavaScript
    console.log(challenge.match(/a/g))
//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
    let newString4 = '30 Days of';
    let newString5 = 'JavaScript';
    let space = ' ';
    console.log("newString4 + space + newString5")
//Use repeat() method to print 30 Days Of JavaScript 2 times
    console.log(challenge.repeat(2))

//LEVEL 2
    let quote = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.'\nby John Holmes teaches us to help one another.";
    console.log(quote)

    let quote2 = "\"Love is not patronizing and charity isn't about pity, it is about love. \nCharity and love are the same -- with charity you give love, \nso don't just give money but reach out your hand instead.\"";
    console.log(quote2)

//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
   let num = '9.8';
   console.log(parseFloat(num))  //not 10, we'll use Math.round to make it 10.
   console.log(Math.round (num))

//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
   let num2 = '10';
   console.log(typeof num2)
//Check if 'on' is found in both python and jargon
  let word = 'python';
  console.log(word.includes('on'))
  let word2 = 'jargon';
  console.log(word2.includes('on'))
//I hope this course is not full of jargon. Check if jargon is in the sentence.
  let word3 = "I hope this course is not full of jargon.";
  console.log(word3.includes('jargon'))
//Generate a random number between 0 and 100 inclusively.
let random = Math.random() * 101;
  console.log (Math.floor(random))
//Generate a random number between 50 and 100 inclusively.
   let max = 101;
   let min = 50;
   let values = Math.floor(Math.random() * (max-min) + min);
   console.log (values)
//Generate a random number between 0 and 255 inclusively.
let random3 = Math.random() * 256;
  console.log (Math.floor(random3))
//Access the 'JavaScript' string characters using a random number.
let word4 = 'JavaScript';
let random4 = Math.random()*word4.length;
let random5= Math.floor(random4);
console.log(word4.charAt(random5))

let numbers = "1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125";
console.log (numbers)

let phrase = "You cannot end a sentence with because because because is a conjunction";
console.log(phrase.substring(31,55))

//LEVEL 3
let sentence1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(sentence1.match(/love/g))

console.log(phrase.match(/because/g))

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
console.log(sentence.replace('%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching','I am a teacher and I love teaching. There is nothing as more as rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher? This 30DaysOfJavaScript is also the result of love of teaching'))

//Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let income = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
console.log(income.match(/\d+/g))
