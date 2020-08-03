var app = Array.from(document.querySelectorAll('.item'));
var count = 0,firstPlayer=[],secondPlayer=[];
const winner = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
console.log(app);
app.forEach(element => element.addEventListener("click",aluHokiPlus));
function check(array) {
    let finalResult = false;
    for(let item of winner) {
    	 var res= item.every(val => array.indexOf(val) !== -1);
    	 if(res){
    	 	finalResult = true;
    	 	break;
    	 }
    }
    return finalResult;
}
function rep(){
	const win = document.querySelector('.winner');
	count = 0;
    win.remove();
    firstPlayer=[];
    secondPlayer=[];
    window.location.reload();
    

}

function winnerPlayer(message) {
	const modal = document.createElement("div");
	const text = document.createElement("span");
	const replay = document.createElement("button");
	text.innerText = message;
	replay.innerText = "Replay";
	modal.classList.add("winner");
	modal.appendChild(text);
	modal.appendChild(replay);
	replay.onclick= () => rep();
	document.body.appendChild(modal);
	app.forEach(item => item.style['pointer-events']= "none");
}


function aluHokiPlus(){
    if(this.classList == "item"){
    	count++;
    	if(count % 2 === 0){
    		console.log(this);
    		this.classList.add("x");
    		firstPlayer.push(Number(this.dataset.index));
    		if(check(firstPlayer)){
    			winnerPlayer("Congratulations! X wins");
    		}
    		
    	}  else {
    		this.classList.add("o");
    		secondPlayer.push(Number(this.dataset.index));
    		if(check(secondPlayer)){
    			winnerPlayer("Congratulations! O wins");
    		}
    	}
    	 if((check(firstPlayer) === true)  && count === 9) {
    	 	console.log(firstPlayer)
    		winnerPlayer("Congratulations! X wins");
    	} else if ((check(secondPlayer) === true) && count === 9) {
    		console.log(secondPlayer)
    		winnerPlayer("Congratulations! O wins");
    	} else if(count === 9) {
    		winnerPlayer("Draw");
    	}
    	
    	
    }
  }

 const body = document.getElementsByTagName("body")[0];
 if(localStorage.lightMode == "dark"){
 	body.setAttribute("data-light-mode","dark");
 }

 function toggle_mode(){
 	let toggleBtn = document.getElementById("btn");
 	if(localStorage.lightMode == "dark"){
 		localStorage.lightMode = "light";
    	body.setAttribute("data-light-mode","light");
    	toggleBtn.innerText = "Dark Mode";
 	} else {
 		localStorage.lightMode = "dark";
 		body.setAttribute("data-light-mode",'dark');
 		toggleBtn.innerText = "Light Mode";

 	}
 }

 