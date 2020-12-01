var Name, litr, km, rashod, gasprice, priceFor1Km;
litr = Number;
km = Number;
gasprice = Number;

Name = prompt('Привет. Как тебя зовут?');
avto = prompt('Напиши марку и модель своего авто');

function sayHello(name) {
    alert("Привет " + Name + ", давай посчитаем расход топлива твоего " + avto + " на 100 км");
}

sayHello(Name);

litr = prompt('Сколько литров ты залил(а)?');
km = prompt('Сколько км ты проехал(а)?');
gasprice = prompt('По какой цене ты заправил(а) топливо (за 1л)?');


function rashodTopliva(rashod) {
    rashod = litr / (km * .01);
    priceFor1Km = (litr * gasprice) / km;
    alert("И так " + Name + ", расход топлива твоего " + avto + " составляет " + (rashod.toFixed(1)) + " литров на 100км");
    alert("Соответсвенно " + Name + ", на 1 км пройденного пути на " + avto + " ты потратил(а) " + (priceFor1Km.toFixed(2)) + " гривен");
    document.write("И так " + Name + ", расход топлива твоего " + avto + " составляет " + (rashod.toFixed(1)) + " литров на 100км<br />");
    document.write("Соответсвенно " + Name + ", на 1 км пройденного пути на " + avto + " ты потратил(а) " + (priceFor1Km.toFixed(2)) + " гривен");
}

rashodTopliva(rashod);