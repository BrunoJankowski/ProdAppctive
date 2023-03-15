var itemButton = document.getElementsByClassName('plus')
var itemHours = document.getElementsByClassName('hours')
var itemReset = document.getElementsByClassName('reset')
var itemGoal = document.getElementsByClassName('goal')
var containter = document.getElementsByClassName('item')

console.log(itemButton, itemHours);

for(var i = 0; i<itemGoal.length; i++){
    var goal = itemGoal[i]
    var initial_goal = localStorage.getItem('hours_goal_math')
    goal.value =  initial_goal
    var goal_score = goal.value

    goal.addEventListener('change', function(event) {
        var item_goal = event.target.value
        localStorage.setItem('hours_goal_math', item_goal)
      })
}

for(var i = 0; i < itemButton.length; i++){
    var button = itemButton[i]
    var hours_ittem = itemHours[i]
    var reset = itemReset[i]

    var initial_hours = localStorage.getItem('hours_worked_math')
    hours_ittem.value = initial_hours


    button.setAttribute('index', i)
    reset.setAttribute('index', i)
    button.addEventListener("click", function(event){
        var button_clicked = event.target
        var index = button_clicked.getAttribute("index")
        var hours_worked = itemHours[index]
        hours_worked.value++ 
        localStorage.setItem('hours_worked_math', hours_worked.value)
        var score = hours_worked.value
        checkGoal(score, goal_score) //add check goal
    })

    reset.addEventListener("click", function(event){
        var button_clicked = event.target
        var index = button_clicked.getAttribute("index")
        var reset_hours = itemHours[index]
        reset_hours.value = 0
        localStorage.setItem('hours_worked_math', 0)
    })

}

function checkGoal(score, goal_score){
    if(score >= goal_score){
        console.log("YEY");
    }
    
}   