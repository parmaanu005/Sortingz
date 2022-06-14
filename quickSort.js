function QuickSort()
{
    console.log("In Quick sort");
    const generatorInstance = QuickSorting();

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


    let l = 0;

    let r = parseInt(arraySize)-1;

async function* lometo_partition(l, r) {
    var blocks = document.querySelectorAll(".block");
    
    // Storing the value of pivot element
    var pivot = 
    Number(blocks[r].childNodes[0].innerHTML);
    var i = l - 1;
    blocks[r].style.backgroundColor = "red";
    document.
    getElementsByClassName("detail")[0].innerText = `[${l},${r}]`;
    
    for (var j = l; j <= r - 1; j++) {
      // To change background-color of the
      // blocks to be compared
      blocks[j].style.backgroundColor = "yellow";
      // To wait for 700 milliseconds
      await waitforme();
      var value = 
      Number(blocks[j].childNodes[0].innerHTML);
    
      // To compare value of two blocks
      if (value < pivot) {
        i++;
        var temp1 = blocks[i].style.height;
        var temp2 = blocks[i].childNodes[0].innerText;
        blocks[i].style.height = blocks[j].style.height;
        blocks[j].style.height = temp1;
        blocks[i].childNodes[0].innerText =
        blocks[j].childNodes[0].innerText;
        blocks[j].childNodes[0].innerText = temp2;
        blocks[i].style.backgroundColor = "orange";
        if (i != j) blocks[j].style.backgroundColor = "pink";
        //To wait for 700 milliseconds
        await waitforme();
      } else blocks[j].style.backgroundColor = "pink";
    }
    // Swapping the ith with pivot element
    i++;
    var temp1 = blocks[i].style.height;
    var temp2 = blocks[i].childNodes[0].innerText;
    blocks[i].style.height = blocks[r].style.height;
    blocks[r].style.height = temp1;
    blocks[i].childNodes[0].innerText =
    blocks[r].childNodes[0].innerText;
    blocks[r].childNodes[0].innerText = temp2;
    blocks[r].style.backgroundColor = "pink";
    blocks[i].style.backgroundColor = "green";

    yield blocks = document.querySelectorAll(".block");

    
    // To wait for 2100 milliseconds
    await waitforme();
    document.getElementsByClassName("detail")[0].innerText = "";
    for (var k = 0; k < 20; k++) 
    blocks[k].style.backgroundColor = "#6b5b95";
    return i;
  }
    
  // Asynchronous QuickSort function
  async function* QuickSorting(l, r, delay = 100) {
    if (l < r) {
      // Storing the index of pivot element after partition
      var pivot_idx = await lometo_partition(l, r);
      // Recursively calling quicksort for left partition
      await QuickSorting(l, pivot_idx - 1);
      // Recursively calling quicksort for right partition
      await QuickSorting(pivot_idx + 1, r);
    }
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
