function InsertionSort() {
    console.log("In Insertion sort");
    const generatorInstance = InsertionSorting();

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


    function start() {
        // do not start interval if there is already an interval
        // running
        console.log("in start");

        console.log("delay=", delay);

        let delaytime;
        if (delay > 200) {
            delaytime = delay + 250;
        }
        else {
            delaytime = delay + 100;
        }
        if (state.timeoutId === 0) {
            state.timeoutId = setInterval(() => nextStep(), delaytime)
        }
        console.log("startdone ");

        // await stop();
    }

    // clear timeout to stop auto porgress
    function stopitinsert() {
        console.log("in stop");
        clearTimeout(state.timeoutId);
        state.timeoutId = 0;
        console.log("stopdone ");

    }

    // tick further one step
    //   const stepForward = () => nextStep()


    // Asynchronous function to perform "Insertion Sort"
        async function* InsertionSorting() {

                console.log("In Insertion Sort Function")
                let block = document.querySelectorAll(".block");
                
                // Provide lightgreen colour to 0th bar
                block[0].style.backgroundColor = " rgb(49, 226, 13)";
            for (var i = 1; i < block.length; i += 1) {
                
                // Assign i-1 to j
                var j = i - 1;
                
                // To store the integer value of ith bar to key 
                var key = 
                parseInt(block[i].childNodes[0].innerHTML);
                
                // To store the ith bar height to height
                var height = block[i].style.height;
                
                // For selecting section having id "ele"
                // var barval=document.getElementById("ele")
                
                // // For dynamically Updating the selected element
                //     barval.innerHTML=
                //     `<h3>Element Selected is :${key}</h3>`;
                
                //Provide darkblue color to the ith bar 
                block[i].style.backgroundColor = "darkblue";
                    
                // To pause the execution of code for 600 milliseconds
                await waitforme();

                
                // For placing selected element at its correct position 
                while (j >= 0 && parseInt(block[j].childNodes[0].innerHTML) > key) {
                    
                    // Provide darkblue color to the jth bar
                    block[j].style.backgroundColor = "darkblue";
                    
                    // For placing jth element over (j+1)th element
                    block[j + 1].style.height = block[j].style.height;
                    block[j + 1].childNodes[0].innerText = 
                    block[j].childNodes[0].innerText;

                    yield block = document.querySelectorAll(".block");
                
                    // Assign j-1 to j
                    j = j - 1;
                
                    // To pause the execution of code for 600 milliseconds
                    await waitforme();
                    
                    // Provide lightgreen color to the sorted part
                    for(var k=i;k>=0;k--){
                    block[k].style.backgroundColor = " rgb(49, 226, 13)";
                    }
                }
                
                // Placing the selected element to its correct position
                block[j + 1].style.height = height;
                block[j + 1].childNodes[0].innerHTML = key;

                
                    
                // To pause the execution of code for 600 milliseconds
                await waitforme();
                
                    
                // Provide light green color to the ith bar
                block[i].style.backgroundColor = " rgb(49, 226, 13)";
            }
                
            // barval.innerHTML="<h3>Sorted!!!</h3>";
                
            
                
                
        }
  



        const play = document.querySelector("#play-btn");
        play.addEventListener("click", function () {
            console.log("play bubble sort");

            start();
        });

        const pause = document.querySelector("#pause-btn");
        pause.addEventListener("click", function () {
            console.log("play bubble sort");

            stopitinsert();
        });

    

    start();

}
