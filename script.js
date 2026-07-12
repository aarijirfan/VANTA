const targetDate = new Date("August 1, 2026 16:00:00").getTime();

const timer = setInterval(function () {

    const now = new Date().getTime();

    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;

    if (distance < 0) {

        clearInterval(timer);

        document.getElementById("countdown").innerHTML = "WE'RE LIVE 🎉";

    }

}, 1000);
