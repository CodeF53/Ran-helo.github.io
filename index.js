setTimeout(updateTime, 1000);
setInterval(updateTime, 1000);

function updateTime() {
    document.getElementById("footer").innerHTML = "Thanks for visiting my page! ❤️ <br> " + getCurrentRanTime();
}

function getCurrentRanTime() {
    const date = new Date(new Date().toLocaleString('en-US', {timeZone: 'GMT'}));

    const diff = 21600000;
    const actualTime = new Date(date.getTime() + diff);

    return actualTime.toLocaleString('en-UK' , { hour12: true });
}

function showabout(){
    $("#about_container").css("display","inherit");
    $("#about_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideInLeft");
    },950);
}

function closeabout(){
    $("#about_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideOutLeft");
        $("#about_container").css("display","none");
    },950);
}

function showwork(){
    $("#work_container").css("display","inherit");
    $("#work_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideInRight");
    },950);
}

function closework(){
    $("#work_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideOutRight");
        $("#work_container").css("display","none");
    },950);
}

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#about").removeClass("animated fadeIn");
      $("#contact").removeClass("animated fadeIn");
      $("#work").removeClass("animated fadeIn");
    },1000);
},1500);
