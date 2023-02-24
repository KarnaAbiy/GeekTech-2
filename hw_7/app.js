// №1
class Cars{
    constructor(option){
        this.model = option.model;
        this.color = option.color;
        this.wheels = option.wheels;
    }
    start(){
        console.log("Машина заведена"); 
    }    
}

class Trucks extends Cars{
    constructor(option){
        super(option);
        this.loadCapacity = option.loadCapacity;
    }
}

class Motorcycles extends Cars{
    constructor(option){
        super(option);
        this.speed = option.speed;
    }
}

class PassengerСars extends Cars{
    constructor(option){
        super(option);
        this.comfort = option.comfort;
    }
}


const trucks = new Trucks({
    model: 'Ford',
    color: 'gray',
    wheels: 4,
    loadCapacity: "14 tons"
})
console.log(trucks);
trucks.start();

const motorcycles = new Motorcycles({
    model: 'Audi',
    color: 'black',
    wheels: 2,
    speed: "300 km/h",
})
console.log(motorcycles);
motorcycles.start();

const passengerСars = new PassengerСars({
    model: 'Nissan',
    color: 'silver',
    wheels: 4,
    comfort: "9/10"
})
console.log(passengerСars);
passengerСars.start();

// -----------------------------------------------------------------------------------------  
// -----------------------------------------------------------------------------------------

// №2
class Traffic {
    constructor(selector) {
        this.$element = document.querySelector(selector)
    }

    hide() {
        this.$element.style.backgroundColor = 'white'
    }

    show() {
        this.$element.style.display = 'block'
    }
}

class TrafficLight extends Traffic {
    constructor(options) {
        super(options.selector);
        this.$element.style.width = this.$element.style.height = options.pxTl + 'px'
        this.$element.style.border = options.colorOfTL + ' solid 1px'
        this.$element.style.borderRadius = options.radiusTl + '%'
        this.$element.style.backgroundColor = options.colorTL
    }
}

const redOne = new TrafficLight({
    selector: '.redLit',
    pxTl: 100,
    colorOfTL: 'black',
    radiusTl: 50,
    colorTL: 'red'
})

const yellowOne = new TrafficLight({
    selector: '.yellowLit',
    pxTl: 100,
    colorOfTL: 'black',
    radiusTl: 50,
    colorTL: 'yellow'
    
})

const greenOne = new TrafficLight({
    selector: '.greenLit',
    pxTl: 100,
    colorOfTL: 'black',
    radiusTl: 50,
    colorTL: 'green'
})

let askColor = prompt('Выберите цвет светофора')
if(askColor.toLowerCase() === 'красный'){
    greenOne.hide()
    yellowOne.hide()
}
else if(askColor.toLowerCase() === 'жёлтый'){
    redOne.hide()
    greenOne.hide()
}
else if(askColor.toLowerCase() === 'зелёный'){
    redOne.hide()
    yellowOne.hide()
    
}
else{
    alert("Error")
}

