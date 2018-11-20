let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"]

/*
Arrow function 
To verify if is uppercase the first 
word return true if it does not return false
params: word type object
        alphabet type array

*/
function isUperCase({word}, alphabet){
	str = word[0]
	for(i in alphabet){
		if(alphabet[i]===str){	
		 return true		
		}
	}
	return false
}
/*
Arrow function 
Is to send to call the 
method isUperCase
and makes the comparison
params: word type object
        alphabet type array

*/
const upperCase = word => console.log(`${isUperCase(word, alphabet) ? 'You string start with an upper-case':'You string is not start with an upper-case'}`)

const upperCase2 = word => (`${isUperCase(word, alphabet) ? 'You string start with an upper-case':'You string is not start with an upper-case'}`)

let upperWord = {
	word: 'Prescrypto', 
}, 
lowerWord = {
	word: 'prescrypto'
}

 upperCase(upperWord, alphabet)

document.getElementById('resultUp').innerHTML = upperCase2(upperWord, alphabet)

/*
Arrow function 
To find the area of a circle with an radius
params: radius type integer
*/
const calculateArea = (radius) => Math.PI * Math.pow(radius,2)
console.log(`The area de circle is: ${calculateArea(2)}`)

document.getElementById('resultArea').innerHTML = (`The area de circle is: ${calculateArea(2)}`)

/*
Function to sum a numbers of array
params: numbers type array
*/
function sumNumbers(numbers){
	let sum = 0
	for(i in numbers){
	   sum += numbers[i]
	}
   return sum
}
let numbers = [2, 6, 8,123, 567, 89, 234]

console.log('Calues in arrary are: '+ sumNumbers(numbers))
document.getElementById('resultSum').innerHTML = ('The sum of array is: '+sumNumbers(numbers))


function separateChart(str, delimiter){
	let separates = []
	var separatesTemp = []
	for(i in str){
	   if(str[i]==delimiter){
		separates.push(separatesTemp)	
		var separatesTemp = []
	   }else{
		 separatesTemp.push(str[i])
	   }
	}
separates.push(separatesTemp)
return separates
}
function joinCharts(joins){
  let joinsCharts = []
  for(i in joins){
	let childs = ''
	for(x in joins[i]){
	   childs += joins[i][x] 
	}
	joinsCharts.push(childs)
	 
  }
  return joinsCharts
}
str = 'this is the best'
delimiter = ' '

console.log(joinCharts(separateChart(str, delimiter)))

document.getElementById('resultDel').innerHTML = joinCharts(separateChart(str, delimiter))



