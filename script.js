let a = +prompt('Введите первое число')
let b = +prompt('Введите второе число')
let c = +prompt('Введите третье число')

if(a > b && a < c) {
    alert(a)
}else if(a < b && a > c) {
    alert(a)
}else if(b > a && b < c) {
    alert(b)
}else if(b < a && b > c) {
    alert(b)
}else if(c > a && c < b) {
    alert(c)
}else if(c < a && c > b) {
    alert(c)
}else {
    alert('Ошибка')
}