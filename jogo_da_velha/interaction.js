var pOneMarkers = []
var pTwoMarkers = []
var playerOne = window.document.querySelector('input#p1Name')
var playerTwo = window.document.querySelector('input#p2Name')
var pointsP1 = 0
var pointsP2 = 0

var divtop = window.document.createElement('div')
var divAnswer = window.document.createElement('div')
var sectionMain = window.document.querySelector('section#secmain')
var divStart = window.document.createElement('div')
var restart = window.document.createElement('input')

restart.setAttribute('value','Restart')
restart.setAttribute('type','button')
restart.setAttribute('onclick','restartGame()')
restart.setAttribute('id','btnLoad')

var btns = []
var key = true

var randomNumber = Math.random() >= 0.5;

function loadGame(){
    if((playerOne.value != '') && (playerTwo.value != '')){
        sectionMain.innerHTML = ('')

        //Div 1
        divtop.style.textAlign = ('center')
        divtop.innerHTML = (`<p><img src="green_x_20px.png"> <strong>${playerOne.value}</strong> [${pointsP1}] X [${pointsP2}] <strong>${playerTwo.value}</strong> <img src="red_circle_20px.png"></p>`)

        //Div 2
        divStart.style.marginTop = ('10pt')
        divStart.style.borderRadius = ('10px')
        divStart.style.textAlign = ('center')
        for(var i = 0 ; i <= 8 ; i++){
            btns.push(window.document.createElement('input'))
            btns[i].setAttribute('type','button')
            btns[i].setAttribute('id',`btn${i}`)
            btns[i].setAttribute('onclick',`marker(${i})`)
            btns[i].style.width = ('100pt')
            btns[i].style.height = ('100pt')
            btns[i].style.borderRadius = ('50px')
            btns[i].style.boxShadow = ('5px 5px 5px rgba(0, 0, 0, 0.349)')
            if((i == 3) || (i == 6)){
                divStart.innerHTML += ('<br>')
            }
            divStart.appendChild(btns[i])
        }

        //Div 3 (random first player)
        if(Math.random() >= 0.5){
            divAnswer.innerHTML = `Now it is the turn of player 1 <strong>${playerOne.value}</strong>`
        }else{
            divAnswer.innerHTML = `Now it is the turn of player 2 <strong>${playerTwo.value}</strong>`
        }

        sectionMain.appendChild(divtop)
        sectionMain.appendChild(divStart)
        sectionMain.appendChild(divAnswer)
    }else{
        window.alert('Please, fill all players!')
    }
}

function marker(id){
    if(key == true){
        //key true is player one
        var btnclicked = window.document.querySelector(`input#btn${id}`)
        divAnswer.innerHTML = (`Now it is the turn of player 2 <strong>${playerTwo.value}</strong>`)
        btnclicked.style.backgroundImage = ("url('green_x.png')")
        btnclicked.style.backgroundRepeat = ("no-repeat")
        btnclicked.style.backgroundPosition = ("center")
        btnclicked.setAttribute('disabled','')
        pOneMarkers.push(id)
        key = false
    }else{
        //key false is player two
        var btnclicked = window.document.querySelector(`input#btn${id}`)
        divAnswer.innerHTML = (`Now it is the turn of player 1 <strong>${playerOne.value}</strong>`)
        btnclicked.style.backgroundImage = ("url('red_circle.png')")
        btnclicked.style.backgroundRepeat = ("no-repeat")
        btnclicked.style.backgroundPosition = ("center")
        btnclicked.setAttribute('disabled','')
        pTwoMarkers.push(id)
        key = true
    }
    verifyWin()
}

function verifyWin(){
    if(key == true){
        //position 0
        if((pTwoMarkers.indexOf(0) != -1) && (pTwoMarkers.indexOf(1) != -1) && (pTwoMarkers.indexOf(2) != -1)){
            window.alert(`Player Two -> ${playerTwo.value} is Winner!`)
            divAnswer.innerHTML = (`Player -> ${playerTwo.value} is Winner!<br>`)
            pointsP2++
            closeGame()
            return
        }else if((pTwoMarkers.indexOf(0) != -1) && (pTwoMarkers.indexOf(3) != -1) && (pTwoMarkers.indexOf(6) != -1)){
            window.alert(`Player Two -> ${playerTwo.value} is Winner!`)
            divAnswer.innerHTML = (`Player -> ${playerTwo.value} is Winner!<br>`)
            pointsP2++
            closeGame()
            return
        }else if((pTwoMarkers.indexOf(0) != -1) && (pTwoMarkers.indexOf(4) != -1) && (pTwoMarkers.indexOf(8) != -1)){
            window.alert(`Player Two -> ${playerTwo.value} is Winner!`)
            divAnswer.innerHTML = (`Player -> ${playerTwo.value} is Winner!<br>`)
            pointsP2++
            closeGame()
            return
        }else if((pTwoMarkers.indexOf(1) != -1) && (pTwoMarkers.indexOf(4) != -1) && (pTwoMarkers.indexOf(7) != -1)){
            window.alert(`Player Two -> ${playerTwo.value} is Winner!`)
            divAnswer.innerHTML = (`Player -> ${playerTwo.value} is Winner!<br>`)
            pointsP2++
            closeGame()
            return
        }else if((pTwoMarkers.indexOf(2) != -1) && (pTwoMarkers.indexOf(4) != -1) && (pTwoMarkers.indexOf(6) != -1)){
            window.alert(`Player Two -> ${playerTwo.value} is Winner!`)
            divAnswer.innerHTML = (`Player -> ${playerTwo.value} is Winner!<br>`)
            pointsP2++
            closeGame()
            return
        }else if((pTwoMarkers.indexOf(2) != -1) && (pTwoMarkers.indexOf(5) != -1) && (pTwoMarkers.indexOf(8) != -1)){
            window.alert(`Player Two -> ${playerTwo.value} is Winner!`)
            divAnswer.innerHTML = (`Player -> ${playerTwo.value} is Winner!<br>`)
            pointsP2++
            closeGame()
            return
        }else if((pTwoMarkers.indexOf(3) != -1) && (pTwoMarkers.indexOf(4) != -1) && (pTwoMarkers.indexOf(5) != -1)){
            window.alert(`Player Two -> ${playerTwo.value} is Winner!`)
            divAnswer.innerHTML = (`Player -> ${playerTwo.value} is Winner!<br>`)
            pointsP2++
            closeGame()
            return
        }else if((pTwoMarkers.indexOf(6) != -1) && (pTwoMarkers.indexOf(7) != -1) && (pTwoMarkers.indexOf(8) != -1)){
            window.alert(`Player Two -> ${playerTwo.value} is Winner!`)
            divAnswer.innerHTML = (`Player -> ${playerTwo.value} is Winner!<br>`)
            pointsP2++
            closeGame()
            return
        }else if((pOneMarkers.length + pTwoMarkers.length) == 9){
            closeGame()
        }

    }else if(key == false){
        if((pOneMarkers.indexOf(0) != -1) && (pOneMarkers.indexOf(1) != -1) && (pOneMarkers.indexOf(2) != -1)){
            window.alert(`Player One -> ${playerOne.value} is Winner!`)
            divAnswer.innerHTML = (`Player -> ${playerOne.value} is Winner!<br>`)
            pointsP1++
            closeGame()
            return
        }else if((pOneMarkers.indexOf(0) != -1) && (pOneMarkers.indexOf(3) != -1) && (pOneMarkers.indexOf(6) != -1)){
            window.alert(`Player One -> ${playerOne.value} is Winner!`)
            divAnswer.innerHTML = (`Player -> ${playerOne.value} is Winner!<br>`)
            pointsP1++
            closeGame()
            return
        }else if((pOneMarkers.indexOf(0) != -1) && (pOneMarkers.indexOf(4) != -1) && (pOneMarkers.indexOf(8) != -1)){
            window.alert(`Player One -> ${playerOne.value} is Winner!`)
            divAnswer.innerHTML = (`Player -> ${playerOne.value} is Winner!<br>`)
            pointsP1++
            closeGame()
            return
        }else if((pOneMarkers.indexOf(1) != -1) && (pOneMarkers.indexOf(4) != -1) && (pOneMarkers.indexOf(7) != -1)){
            window.alert(`Player One -> ${playerOne.value} is Winner!`)
            divAnswer.innerHTML = (`Player -> ${playerOne.value} is Winner!<br>`)
            pointsP1++
            closeGame()
            return
        }else if((pOneMarkers.indexOf(2) != -1) && (pOneMarkers.indexOf(4) != -1) && (pOneMarkers.indexOf(6) != -1)){
            window.alert(`Player One -> ${playerOne.value} is Winner!`)
            divAnswer.innerHTML = (`Player -> ${playerOne.value} is Winner!<br>`)
            pointsP1++
            closeGame()
            return
        }else if((pOneMarkers.indexOf(2) != -1) && (pOneMarkers.indexOf(5) != -1) && (pOneMarkers.indexOf(8) != -1)){
            window.alert(`Player One -> ${playerOne.value} is Winner!`)
            divAnswer.innerHTML = (`Player -> ${playerOne.value} is Winner!<br>`)
            pointsP1++
            closeGame()
            return
        }else if((pOneMarkers.indexOf(3) != -1) && (pOneMarkers.indexOf(4) != -1) && (pOneMarkers.indexOf(5) != -1)){
            window.alert(`Player One -> ${playerOne.value} is Winner!`)
            divAnswer.innerHTML = (`Player -> ${playerOne.value} is Winner!<br>`)
            pointsP1++
            closeGame()
            return
        }else if((pOneMarkers.indexOf(6) != -1) && (pOneMarkers.indexOf(7) != -1) && (pOneMarkers.indexOf(8) != -1)){
            window.alert(`Player One -> ${playerOne.value} is Winner!`)
            divAnswer.innerHTML = (`Player -> ${playerOne.value} is Winner!<br>`)
            pointsP1++
            closeGame()
            return
        }else if((pOneMarkers.length + pTwoMarkers.length) == 9){
            window.alert(`Draw!`)
            divAnswer.innerHTML = (`Draw!<br>`)
            closeGame()
            return
        }
    } 
}

function closeGame(){
    for(var i = 0 ; i <= 8 ; i++){
        var btnd = window.document.querySelector(`input#btn${i}`)
        btnd.setAttribute('disabled','')
    }
    divtop.innerHTML = (`<p><img src="green_x_20px.png"> <strong>${playerOne.value}</strong> [${pointsP1}] X [${pointsP2}] <strong>${playerTwo.value}</strong> <img src="red_circle_20px.png"></p>`)
    divAnswer.innerHTML = ('')
    divAnswer.appendChild(restart)
}

function restartGame(){
    divStart.innerHTML = ('')
    divAnswer.innerHTML = ('')
    pOneMarkers = []
    pTwoMarkers = []
    btns = []
    key = true
    loadGame()
}