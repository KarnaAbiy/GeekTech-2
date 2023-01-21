// // 1.Написать приложение Counter (Счетчик). 
// Логика у приложения следующая: если число больше нуля, 
// то оно должно быть зеленого цвета, если ноль то серого, 
// если меньше нуля то красного. 
// Должны быть 3 кнопки как на скриншоте: увеличить, сбросить, уменьшить


const counter = document.querySelector("#counter");
const btns = document.querySelectorAll(".btn");

var count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;

    if (styles.contains("increase")) {
      count++;
      counter.classList.add("up");

      setTimeout(() => {
        counter.classList.remove("up");
      }, 500);
    } else if (styles.contains("decrease")) {
      count--;
      counter.classList.add("down");

      setTimeout(() => {
        counter.classList.remove("down");
      }, 500);
    } else {
      count = 0;
    }

    if (count > 0) {
      counter.style.color = "green";
    }

    if (count < 0) {
      counter.style.color = "red";
    }

    if (count === 0) {
      counter.style.color = "grey";
    }

    counter.textContent = count;
  });
});


// 2.
var random_start = 0;
var random_end = 100;

allСycles = 6;

var array= []

for(i=random_start;i<=random_end;i++){
   array.push(i)
}

for(countCycles=1;countCycles<=allСycles;countCycles++){
    console.log(array.splice(Math.random()*array.length,1)[0])
}