
async function BubbleSort()
{
    const generatorInstance = BubbleSorting();

// tick generator and perform update of the indicator
// tick generator and perform update of the indicator
const nextStep = () => {
	const { value } = generatorInstance.next();
	document.getElementsByClassName(".block").innerHTML = value;
  }


// state to keep track of the setInterval id
const state = {
	timeoutId: 0,
  }
  
  // start method progression
//   const start = () => {
// 	// do not start interval if there is already an interval
// 	// running
// 	console.log("in start");

// 	console.log("delay=",delay);
// 	if (state.timeoutId === 0) {
// 	  state.timeoutId = setInterval(() => nextStep(), delay)
// 	}
// 	console.log("startdone ");


function start () {
	// do not start interval if there is already an interval
	// running
	console.log("in start");

	console.log("delay=",delay);

	let delaytime;
	if(delay>200)
	{
		delaytime=delay+250;
	}
	else{
		delaytime=delay+100;
	}
	if (state.timeoutId === 0) {
		state.timeoutId =setInterval(() => nextStep(), delaytime)
	}
	console.log("startdone ");

	// await stop();
  }
  
  // clear timeout to stop auto porgress
  function stopit  ()  { 
	  console.log("in stop");
	clearTimeout(state.timeoutId);
	state.timeoutId = 0;
	console.log("stopdone ");

  }
  
  // tick further one step
//   const stepForward = () => nextStep()




// Asynchronous BubbleSort function
async function* BubbleSorting() {

	var detail = document.getElementsByClassName("detail");
	detail.innerHTML=`<h3>Bubble Sort Running</h3>`;



    console.log("delay=",delay);
	var blocks = document.querySelectorAll(".block");
    console.log("in bubble()")
	// BubbleSort Algorithm
	for (let i = 0; i < blocks.length; i += 1) {
		for (let j = 0; j < blocks.length - i - 1; j += 1) {

            console.log("delay=",delay);
			// To change background-color of the
			// blocks to be compared
			blocks[j].style.backgroundColor = "#FF4949";
			blocks[j + 1].style.backgroundColor = "#FF4949";

			// To wait for .1 sec

            await waitforme(delay);
            
			// await new Promise((resolve) =>
			// 	setTimeout(() => {
			// 		resolve();
			// 	}, delay)
			// );

			console.log("run");
			var value1 = Number(blocks[j].childNodes[0].innerHTML);
			var value2 = Number(blocks[j + 1]
						.childNodes[0].innerHTML);

			// To compare value of two blocks
			 if (value1 > value2) {
                // await waitforme(delay);
				await swap(blocks[j], blocks[j + 1]);
				yield blocks = document.querySelectorAll(".block");
			}

			// Changing the color to the previous one
			blocks[j].style.backgroundColor = "#6b5b95";
			blocks[j + 1].style.backgroundColor = "#6b5b95";
		}

		//changing the color of greatest element
		//found in the above traversal
		blocks[blocks.length - i - 1].style.backgroundColor = "#13CE66";
	}

	detail.innerHTML=`<h3>Bubble Sort Done</h3>`;
	// BubbleSorting();
	
}

start();



const play = document.querySelector("#play-btn");
play.addEventListener("click", function(){
console.log("play bubble sort");

start();
});

const pause = document.querySelector("#pause-btn");
pause.addEventListener("click", function(){
console.log("play bubble sort");

stopit();
});

}

const bubSortbtn = document.querySelector("#bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    disableButton();
    await BubbleSort();
   enableButton();
});