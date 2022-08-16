setTimeout(updateTime, 1000);
setInterval(updateTime, 1000);

setTimeout(fetchDiscordStatus, 1000);
setInterval(fetchDiscordStatus, 1000);

const discordCard = document.getElementById("discordProfile");
function fetchDiscordStatus() {
    if (isHover(discordCard)) {
        $("#discord").attr("src", "https://lanyard.cnrad.dev/api/721351466828300350?borderRadius=5px&idleMessage=mewo&animated=true&bg=a&" + Math.random());
    }
}

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
      $("#work").removeClass("animated fadeIn");
    },1000);
},1500);

const isHover = e => e.parentElement.querySelector(':hover') === e;

function openDiscordURL(protocol, notInstalledLink, timeOut) {
    if (navigator.msLaunchUri) {
        navigator.msLaunchUri(protocol, function () { },
            function () {
                window.location = notInstalledLink;
            }
        );
    } else {
        let timeout = timeOut;

        window.addEventListener('blur', function () {
                window.clearTimeout(timeout);
            }
        )

        timeout = window.setTimeout(function () {
                window.location = notInstalledLink;
            }, timeOut
        );

        window.location = protocol;
    }
}
