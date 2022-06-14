/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function opencode() {
    document.getElementById("code-snippet").style.width = "50%";
    // document.getElementById("code-snippet").style.margin = "10%";
    // document.getElementById("code-snippet").style.position = "right";
    // document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closecode() {
    document.getElementById("code-snippet").style.width = "0%";
    // document.getElementById("main").style.marginLeft = "0";
    // document.body.style.backgroundColor = "white";
  }

  function opendesc() {
    document.getElementById("Description").style.width = "50%";
    // document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closedesc() {
    document.getElementById("Description").style.width = "0%";
    // document.getElementById("main").style.marginLeft = "0";
    // document.body.style.backgroundColor = "white";
  }

  function opentc() {
    document.getElementById("time-complex").style.width = "50%";
    // document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closetc() {
    document.getElementById("time-complex").style.width = "0%";
    // document.getElementById("main").style.marginLeft = "0";
    // document.body.style.backgroundColor = "white";
  }