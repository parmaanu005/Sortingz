

function SelectionSort() {
    console.log("In Selection sort")
    const generatorInstance = SelectionSorting();

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
    function stopitselect() {
        console.log("in stop");
        clearTimeout(state.timeoutId);
        state.timeoutId = 0;
        console.log("stopdone ");

    }

    // tick further one step
    //   const stepForward = () => nextStep()


    // asynchronous function to perform "Selection Sort"
    async function* SelectionSorting() {
        console.log("In Selection sort loop")

        var blocks = document.querySelectorAll(".block");
        //   let bars = document.querySelectorAll(".block");
        // Assign 0 to min_idx
        let min_idx = 0;
        for (var i = 0; i < blocks.length; i += 1) {

            // Assign i to min_idx
            min_idx = i;

            
            for (var j = i + 1; j < blocks.length; j += 1) {

                // Provide darkblue color to the ith bar
                blocks[i].style.backgroundColor = "darkblue";

                // Provide red color to the jth bar
                  blocks[j].style.backgroundColor = "red";


                // To pause the execution of code for 300 milliseconds
                await waitforme(delay);

                console.log("run");

                // To store the integer value of jth bar to var1 
                var val1 = Number(blocks[j].childNodes[0].innerHTML);

                // To store the integer value of (min_idx)th bar to var2 
                var val2 = Number(blocks[min_idx].childNodes[0].innerHTML);

                // Compare val1 & val2
                if (val1 < val2) {
                    if (min_idx !== i) {

                        // Provide skyblue color to the (min-idx)th bar
                        blocks[min_idx].style.backgroundColor = "  rgb(24, 190, 255)";
                    }
                    min_idx = j;
                } else {

                    // Provide skyblue color to the jth bar
                    blocks[j].style.backgroundColor = "  rgb(24, 190, 255)";
                }
            }

            // await waitforme(delay);
            // await swap(blocks[min_idx], blocks[i]);

             // To swap ith and (min_idx)th bar
            var temp1 = blocks[min_idx].style.height;
            var temp2 = blocks[min_idx].childNodes[0].innerText;
           blocks[min_idx].style.height =blocks[i].style.height;
           blocks[i].style.height = temp1;
           blocks[min_idx].childNodes[0].innerText =blocks[i].childNodes[0].innerText;
           blocks[i].childNodes[0].innerText = temp2;
            yield blocks = document.querySelectorAll(".block");

            await waitforme(delay);

            // Provide skyblue color to the (min-idx)th bar
            blocks[min_idx].style.backgroundColor = "  rgb(24, 190, 255)";

            // Provide lightgreen color to the ith bar
            blocks[i].style.backgroundColor = " rgb(49, 226, 13)";
        }



        const play = document.querySelector("#play-btn");
        play.addEventListener("click", function () {
            console.log("play bubble sort");

            start();
        });

        const pause = document.querySelector("#pause-btn");
        pause.addEventListener("click", function () {
            console.log("play bubble sort");

            stopitselect();
        });

    }

    start();
}

