var itemButton = document.getElementsByClassName('plus')
var itemHours = document.getElementsByClassName('hours')

console.log(itemButton, itemHours);

var initial_hours = localStorage.getItem('hours_worked')


for(var i = 0; i < itemButton.length; i++){
    var button = itemButton[i]
    var hours_w = itemHours[i].value
    button.setAttribute('index', i)
    button.addEventListener("click", function(event){
        var button_clicked = event.target
        var index = button_clicked.getAttribute("index")
        var hours_worked = itemHours[index]
        hours_worked.value++ 
        localStorage.setItem('hours_worked', hours_worked.value)
        console.log(initial_hours);
        console.log(hours_w);
        console.log(hours_worked.value);
    })

}