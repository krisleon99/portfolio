let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"]

function isUperCase({word}, alphabet){
	str = word[0]
	for(i in alphabet){
		if(alphabet[i]===str){	
		 return true		
		}
	}
	return false
}

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

//To find the area of a circle with an radius
const calculateArea = (radius) => Math.PI * Math.pow(radius,2)
console.log(`The area de circle is: ${calculateArea(2)}`)

document.getElementById('resultArea').innerHTML = (`The area de circle is: ${calculateArea(2)}`)


let areas = [2, 6, 8,123, 567, 89, 234]
let sum = 0
for(i in areas){
   sum += areas[i]
}
console.log('Calues in arrary are: '+ sum)
document.getElementById('resultSum').innerHTML = ('The sum of array is: '+sum)


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



