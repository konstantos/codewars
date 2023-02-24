function bmi(weight, height) {
    let res = weight / height**2;
    if (res <= 18.5) {
        return "Underweight";
    } else if (res <= 25) {
        return "Normal";
    } else if (res <= 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

//* Упрощенная версия:
function bmi(weight, height) {
    let b = weight / height**2;
    return b <= 18.5 ? 'Underweight' : b <= 25.0 ? 'Normal' : b <= 30.0 ? 'Overweight' : 'Obese';
}