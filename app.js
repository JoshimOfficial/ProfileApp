let body =document.querySelector("body");
let about = document.querySelector(".about");
let education = document.querySelector(".education");
let experience = document.querySelector(".experience");
let achievement = document.querySelector(".achievement");
let level = document.querySelector(".level");
let profile_pic = document.querySelector(".profile_pic");
let ignor_this_div = document.querySelector(".ignor_this_div");

let face_popup = document.querySelector(".face_popup");

let about_text = document.querySelector(".about_text");
let education_text = document.querySelector(".education_text");
let experience_text = document.querySelector(".experience_text");
let achievement_text = document.querySelector(".achievement_text");
let level_text = document.querySelector(".level_text");
let about_bio  = document.querySelector(".about_bio");
let start_up = document.querySelector(".start_up");
let education_bio = document.querySelector(".education_bio");
let table_cv = document.querySelector(".table_cv");
let quotes_one = document.querySelector(".quotes_one");
let quotes_two = document.querySelector(".quotes_two");
let quotes_three = document.querySelector(".quotes_three");
let quotes_four = document.querySelector(".quotes_four");
let experience_bio_text = document.querySelector(".experience_bio_text");


let experience_bio_chart = document.querySelector(".experience_bio_chart");
let html_graph = document.querySelector(".html_graph");
let slowmo_html_graph = document.querySelector(".slowmo_html_graph");
let html_persent = document.querySelector(".html_persent");
let css_graph = document.querySelector(".css_graph");
let slowmo_css_graph = document.querySelector(".slowmo_css_graph");
let css_persent = document.querySelector(".css_persent");
let js_graph = document.querySelector(".js_graph");
let slowmo_js_graph =document.querySelector(".slowmo_js_graph");
let js_persent = document.querySelector(".js_persent");
let php_graph = document.querySelector(".php_graph");
let slowmo_php_graph = document.querySelector(".slowmo_php_graph");
let php_persent =document.querySelector(".php_persent");
let html_text = document.querySelector(".html_text");
let css_text = document.querySelector(".css_text");
let js_text = document.querySelector(".js_text");
let php_text = document.querySelector(".php_text");
let experience_bio = document.querySelector(".experience_bio");
let achive_bio = document.querySelector(".achive_bio");
let achive_table = document.querySelector(".achive_table");
let achive_bio_text = document.querySelector(".achive_bio_text");


//This for When body loaded then every thing will set opacity to 1
function body_loaded() {
    container.style.opacity = "1";
    profile_pic.style.opacity = "1";
}

setTimeout(start_up_time_set, 100);
function start_up_time_set() {
    start_up.style.opacity="1"
}

setTimeout(quotes_one_time_set, 300);
function quotes_one_time_set() {
    quotes_one.style.opacity="1"
}


setTimeout(quotes_two_time_set, 500);
function quotes_two_time_set() {
    quotes_two.style.opacity="1"
}

setTimeout(quotes_three_time_set, 700);
function quotes_three_time_set() {
    quotes_three.style.opacity="1"
}

setTimeout(quotes_four_time_set, 900);
function quotes_four_time_set() {
    quotes_four.style.opacity="1"
}


//When user click on about button then all "about" will be show 
about.addEventListener("click", (e)=> {
    about_text.style.opacity = "1";
    education_text.style.opacity = "0";
    experience_text.style.opacity = "0";
    achievement_text.style.opacity = "0";
    level_text.style.opacity="0";
    face_popup.style.opacity  = "1";
    about_bio.style.opacity = "1";
    start_up.style.opacity = "0";
    education_bio.style.opacity = "0";
    table_cv.style.opacity = "0"
    quotes_one.style.opacity = "0"
    quotes_two.style.opacity = "0"
    quotes_three.style.opacity = "0"
    quotes_four.style.opacity = "0"
    experience_bio_text.style.opacity = "0"
    experience_bio.style.opacity = "0"
    achive_bio.style.opacity = "0"
})


//When user click on education button then all "education" will be show 
education.addEventListener("click", (e)=> {
    education_text.style.opacity = "1"
    about_text.style.opacity = "0";
    experience_text.style.opacity ="0";
    achievement_text.style.opacity = "0";
    level_text.style.opacity="0";
    face_popup.style.opacity  = "1";
    education_bio.style.opacity = "1"
    about_bio.style.opacity = "0";
    start_up.style.opacity = "0";
    quotes_one.style.opacity = "0"
    quotes_two.style.opacity = "0"
    quotes_three.style.opacity = "0"
    quotes_four.style.opacity = "0"
    experience_bio_text.style.opacity = "0"
    experience_bio.style.opacity = "0"
    achive_bio.style.opacity = "0"
})


//This function for when user click on edication botton then the education chart will show after 0.3s .
education.addEventListener ("click", ()=> {
  setTimeout(table_cv_set_time, 500);

    function table_cv_set_time() {
        table_cv.style.opacity = "1"
    }
})



//When user click on education button then all "education" will be show 
experience.addEventListener("click", (e)=> {
    experience_text.style.opacity = "1"
    about_text.style.opacity = "1";
    education_text.style.opacity ="0";
    achievement_text.style.opacity = "0";
    level_text.style.opacity="0";
    face_popup.style.opacity  = "1";
    start_up.style.opacity = "0";
    quotes_one.style.opacity = "0"
    quotes_two.style.opacity = "0"
    quotes_three.style.opacity = "0"
    quotes_four.style.opacity = "0"
    about_bio.style.opacity = "0";
    education_bio.style.opacity = "0";
    table_cv.style.opacity = "0"
    experience_bio_text.style.opacity = "1"
    about_text.style.opacity = "0"
    achive_bio.style.opacity = "0"
})


//When user click on achievement button then all "achievement" will be show 
achievement.addEventListener("click", ()=> {
    achievement_text.style.opacity = "1";
    about_text.style.opacity = "0";
    education_text.style.opacity ="0";
    experience_text.style.opacity ="0";
    level_text.style.opacity = "0";
    face_popup.style.opacity  = "1";
    start_up.style.opacity = "0";
    quotes_one.style.opacity = "0"
    quotes_two.style.opacity = "0"
    quotes_three.style.opacity = "0"
    quotes_four.style.opacity = "0"
    experience_bio_text.style.opacity = "0"
    about_bio.style.opacity = "0"
    experience_bio.style.opacity = "0"
    education_bio.style.opacity ="0";
    table_cv.style.opacity = "0"
    achive_bio_text.style.opacity  ="1"
    achive_bio.style.opacity = "1"

    


})

achievement.addEventListener("click", ()=> {
    setTimeout(achive_table_set_timer, 600)

function achive_table_set_timer() {
    achive_table.style.opacity = "1";
}
})






//When user click on level button then all "level" will be show 
level.addEventListener("click", ()=> {
    level_text.style.opacity = "1";
    about_text.style.opacity = "0";
    education_text.style.opacity ="0";
    achievement_text.style.opacity = "0";
    experience_text.style.opacity ="0";
    face_popup.style.opacity  = "1";
    start_up.style.opacity = "0";
    quotes_one.style.opacity = "0"
    quotes_two.style.opacity = "0"
    quotes_three.style.opacity = "0"
    quotes_four.style.opacity = "0"
    experience_bio_text.style.opacity = "0"
    experience_bio.style.opacity = "0"
    achive_bio.style.opacity = "0"
})


//This is for remove the text message from the man face after every 10s
let click_popup_remove = setInterval(remove, 10000);

function remove() {
    face_popup.style.opacity = "0";
}

let buttons = document.querySelector(".profile_buttons");
let input = document.querySelector("input[type=button]");
let h5 = document.querySelector("h5");
let container = document.querySelector(".container");


// This is for when user click on "Click me" button then every button will show.
buttons.addEventListener("click", ()=> {
    buttons.style.width = "100%";
    input.style.display = "block";
    h5.style.display = "none";
    about.style.opacity = "1";
    education.style.opacity = "1";
    experience.style.opacity = "1";
    achievement.style.opacity = "1";
    level.style.opacity = "1";
    buttons.style.cursor = "default";
    container.style.width  = "650px";
    container.style.height = "750px";
    ignor_this_div.style.display = "none"

})


//This is for every button  button will show after 0.1s 
let show_buttons = setTimeout(showButtonsNow, 1000)

function showButtonsNow() {
    buttons.style.opacity= "1";
}









experience.addEventListener("click", ()=> {
    experience_bio.style.opacity = "1";
  setTimeout(exp_chart_text_timer, 500) 
  function exp_chart_text_timer() {
    slowmo_html_graph.style.animation = "html_graph_color_ani 2s linear";
    html_graph.style.opacity = "1";
    html_persent.style.opacity = "1";
    css_persent.style.opacity ="1";
    js_persent.style.opacity  = "1";
    php_persent.style.opacity = "1"
    html_text.style.opacity = "2"



    setTimeout(stopslo_html, 1000)

    function stopslo_html () {
        slowmo_html_graph.style.animation = "";
        slowmo_html_graph.style.width = "475px"
    }
  }

  setTimeout(css_chart_text_timer, 1000) 
  function css_chart_text_timer() {
    slowmo_css_graph.style.animation  = "css_graph_color_ani 2s linear";
    css_graph.style.opacity = "1"
    css_text.style.opacity  = "1"

    setTimeout(stopslo_css, 1000)
    function stopslo_css() {
        slowmo_css_graph.style.animation  = "";
        slowmo_css_graph.style.width = "450px"
    }
  }

  setTimeout (js_chart_text_timer, 1400)
  function js_chart_text_timer() {
      slowmo_js_graph.style.animation = "js_graph_color_ani 2s linear";
      js_text.style.opacity = "1";    
      js_graph.style.opacity  = "1"        
  }

  setTimeout(stopslo_js, 1400)
    function stopslo_js() {
        slowmo_js_graph.style.animation  = "";
        slowmo_js_graph.style.width = "425px"
    }



    
  setTimeout (php_chart_text_timer, 1800)
  function php_chart_text_timer() {
      slowmo_php_graph.style.animation = "js_graph_color_ani 2s linear";
      php_text.style.opacity = "1";    
      php_graph.style.opacity  = "1"        
  }

  setTimeout(stopslo_php, 1800)
    function stopslo_php() {
        slowmo_php_graph.style.animation  = "";
        slowmo_php_graph.style.width = "450px"
    }
})

experience.addEventListener("click", ()=> {
    setTimeout( experience_bio_chart_set_time, 800)
    function experience_bio_chart_set_time() {
        experience_bio_chart.style.opacity = "1";
    }
})




function getFullscreenElement() {
    return document.fullscreenElement   //standard property
    || document.webkitFullscreenElement //safari/opera support
    || document.mozFullscreenElement    //firefox support
    || document.msFullscreenElement;    //ie/edge support
 }

 function toggleFullscreen() {
    if(getFullscreenElement()) {
       document.exitFullscreen();
    }else {
  document.documentElement.requestFullscreen().catch(console.log);
    }
 }
 document.addEventListener('dblclick', () => {
    toggleFullscreen();
 });

