var sharm = 15;
var hurgada = 25;
var taba = 6;
const quantity = prompt('Пожалуйста введите число учасников группы:', '');
// if (quantyty > 0 && isInteger(quantity) == true) {

if (quantity <= sharm){
    const isComing = confirm('Please confirm reservation in group "Sharm"');
    console.log(isComing);
    if (true) {
        let free_room = sharm - quantity;
        console.log('We have ' + free_room + ' free space(s)');
    } else {
        const isComing2 = confirm('You can choose another group');
        console.log(isComing2);
    }
} else if (quantity <= hurgada) {
    const isComing = confirm('Please confirm reservation in group "Hurgada"');
    console.log(isComing);
        if (true) {
        let free_room = hurgada - quantity;
        console.log('We have ' + free_room + ' free space(s)');
    } else {
        const isComing2 = confirm('You can choose another group');
        console.log(isComing2);
    }
} else if (quantity <= taba) {
    const isComing = confirm('Please confirm reservation in group "Taba"');
    console.log(isComing);
        if (true) {
        let free_room = taba - quantity;
        console.log('We have ' + free_room + ' free space(s)');
    } else {
        const isComing2 = confirm('You can choose another group');
        console.log(isComing2);
    }
} else {
    alert('Sorry, we don\'t have enough rooms for your group!');
}
// } else {
// 	alert('This is not appropriate value');
// }