let itemCS = document.getElementsByClassName('cs_stats')[0];
let itemCS_goal = document.getElementsByClassName('cs_goal')[0];
let itemCS_table = document.getElementsByClassName('cs_table')[0];

let itemMath = document.getElementsByClassName('math_stats')[0];
let itemMath_goal = document.getElementsByClassName('math_goal')[0];
let itemMath_table = document.getElementsByClassName('math_table')[0];

let itemVA = document.getElementsByClassName('va_stats')[0];
let itemVA_goal = document.getElementsByClassName('va_goal')[0];

let itemEng = document.getElementsByClassName('eng_stats')[0];
let itemEng_goal = document.getElementsByClassName('eng_goal')[0];

let itemPsycho = document.getElementsByClassName('psycho_stats')[0];
let itemPsycho_goal = document.getElementsByClassName('psycho_goal')[0];

let itemPol = document.getElementsByClassName('pl_stats')[0];
let itemPol_goal = document.getElementsByClassName('pl_goal')[0];

var cs_text = localStorage.getItem('hours_worked_CS')
var cs_text_goal = localStorage.getItem('hours_goal_CS')

var math_text = localStorage.getItem('hours_worked_math')
var math_text_goal = localStorage.getItem('hours_goal_math')

var va_text = localStorage.getItem('hours_worked_va')
var va_text_goal = localStorage.getItem('hours_goal_va')

var eng_text = localStorage.getItem('hours_worked_english')
var eng_text_goal = localStorage.getItem('hours_goal_english')

var psycho_text = localStorage.getItem('hours_worked_psycho')
var psycho_text_goal = localStorage.getItem('hours_goal_psycho')

var pl_text = localStorage.getItem('hours_worked_polish')
var pl_text_goal = localStorage.getItem('hours_goal_polish')

let itemProgress = document.getElementsByClassName('progress')[0]

//stars concept
/*var stars_cs = []
var stars_count_cs = parseInt(cs_text)
for(var i = 0; i<stars_count_cs; i++){
    stars_cs.push('X')
}*/

itemCS.innerText = "Done: " + cs_text
itemCS_goal.innerText = "Need: " + cs_text_goal
itemCS_table.innerText = parseFloat(cs_text/cs_text_goal) * 100 + "%"

itemMath.innerText = "Done: " + math_text
itemMath_goal.innerText = "Need: " + math_text_goal
itemMath_table.innerText = parseFloat(math_text/math_text_goal) * 100 + "%"


itemVA.innerText = "Done: " + va_text
itemVA_goal.innerText = "Need: " + va_text_goal

itemEng.innerText = "Done: " + eng_text
itemEng_goal.innerText = "Need: " + eng_text_goal

itemPsycho.innerText = "Done: " + psycho_text
itemPsycho_goal.innerText = "Need: " + psycho_text_goal

itemPol.innerText = "Done: " + pl_text
itemPol_goal.innerText = "Need: " + pl_text_goal


var sum_hours = parseFloat(cs_text + math_text + va_text + eng_text + psycho_text + pl_text)
var sum_goal = parseFloat(cs_text_goal + math_text_goal + va_text_goal + psycho_text_goal + pl_text_goal)
console.log(sum_hours, sum_goal)
var progressAll = parseFloat(sum_goal/sum_hours)*100
itemProgress.innerText = "PROGRESS FOR THIS WEEK: " + progressAll.toFixed(0) + "%"