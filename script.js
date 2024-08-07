var time = false;

const timeP = document.querySelector(".three p")

const timeStyle = new Intl.DateTimeFormat("en-US", {
    timeStyle: "medium",
  });

var interval = null;

const clickk = function() {
    time = !(time);
    if (time) {
        timeP.textContent = timeStyle.format(Date.now())
        interval = setInterval(function() {
            timeP.textContent = timeStyle.format(Date.now())
          }, 1000);
         
    }
    else{
        timeP.textContent = "now"
        clearInterval(interval);
    }
}