// 1.

// этот версия кода не получилась почему-то

// var numbers = [10, 20, 30, 50, 235, 3000];
// for(i = 0; i < numbers.length; i++){
//     if(numbers[i][0] == '1'|| numbers[i][0] == '2' || numbers[i][0] =='5'){
//         document.write(numbers[i]+', ');
//     }
// }

var numbers = [10, 20, 30, 50, 235, 3000];

for (var i = 0; i < numbers.length; i++) {
  var num = String(numbers[i]);
  var char = num[0];
  if (char == 1 || char == 2 || char == 5) {
    console.log(num);
  }
}

// 2.
for(j = 20; j > -1; j--){
    console.log(j);
}

// 3.
var enterColor = prompt("Введите Красный, Жёлтый или Зелёный");

function trafficLight() {
    switch (enterColor) {
        case "Красный":
            alert("стой!");
            break;
        case "Жёлтый":
            alert("жди");
            break;
        case "Зелёный":
            alert("едь");
            break;
        default:
            alert("Неправильный ввод");
            break;
    }
}
trafficLight();