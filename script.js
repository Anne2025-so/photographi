



let menuToggle = document.getElementById("menuToggle");
    let links = document.getElementById("links");
    let themeBtn = document.getElementById("themebtn");

    if(menuToggle ){
        menuToggle.onclick = function(){
            links.classList.toggle("show");
        };
    }

    if(themeBtn){
        themeBtn.onclick = function(){
            document.body.classList.toggle("dark");

            if(document.body.classList.contains("dark")){
                themeBtn.textContent = "Light";
            } else {
                themeBtn.textContent = "Night";
            }
        };
    }

;
