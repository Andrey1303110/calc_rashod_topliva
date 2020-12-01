var Name, litrKm, km, rashod, gasprice, priceFor1Km;
litrKm = Number;
km = Number;
gasprice = Number;

Name = prompt('Привет. Как тебя зовут?');
avto = prompt('Напиши марку и модель своего авто');

function sayHello(name) {
    alert("Привет " + Name + ", давай посчитаем сколько км ты можешь проехать на своём " + avto + " при заданном расходе");
}

sayHello(Name);

litrKm = prompt('Какой средний расход у твоего ' + avto + ' ?');
km = prompt('Сколько км тебе необходимо проехать ?');



function rashodTopliva(rashod) {
    rashod = litr / (km * .01);
    priceFor1Km = (litr * gasprice) / km;
    alert("И так " + Name + ", расход топлива твоего " + avto + " составляет " + (rashod.toFixed(1)) + " литров на 100км");
    alert("Соответсвенно " + Name + ", на 1 км пройденного пути на " + avto + " ты потратил(а) " + (priceFor1Km.toFixed(2)) + " гривен");
    document.write("И так " + Name + ", расход топлива твоего " + avto + " составляет " + (rashod.toFixed(1)) + " литров на 100км<br />");
    document.write("Соответсвенно " + Name + ", на 1 км пройденного пути на " + avto + " ты потратил(а) " + (priceFor1Km.toFixed(2)) + " гривен");
}

rashodTopliva(rashod);