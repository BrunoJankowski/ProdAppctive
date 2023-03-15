var itemButton = document.getElementsByClassName('plus')
var itemHours = document.getElementsByClassName('hours')

console.log(itemButton, itemHours);

for(var i = 0; i < itemButton.length; i++){
    var button = itemButton[i]
    var hours_ittem = itemHours[i]
    var initial_hours = localStorage.getItem('hours_worked_CS')
    hours_ittem.value = initial_hours
    button.setAttribute('index', i)
    button.addEventListener("click", function(event){
        var button_clicked = event.target
        var index = button_clicked.getAttribute("index")
        var hours_worked = itemHours[index]
        hours_worked.value++ 
        localStorage.setItem('hours_worked_CS', hours_worked.value)
    })

}