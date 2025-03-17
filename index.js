document.addEventListener("DOMContentLoaded", function () {
    // Show year options
    for (var i = 2025; i >= 1900; i--) {
        var option = document.createElement("option");
        option.value = i;
        option.text = i;
        document.getElementById("year").appendChild(option);
    }

    // Show month options
    var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    for (var i = 0; i < months.length; i++) {
    var option = document.createElement("option");
    option.value = i + 1;
    option.text = months[i];
    document.getElementById("month").appendChild(option);
    }

    // Show day options 
    for (var i = 1; i <= 31; i++) {
        var option = document.createElement("option");
        option.value = i;
        option.text = i;
        document.getElementById("day").appendChild(option);
    }
});


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();

    var name = document.getElementById("myTextBox").value;
    document.getElementById("displayName").innerHTML = name;
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;

    // Basic input validation (you can add more robust checks)
    if (name === "" || day === "" || month === "" || year === "") {
        alert("Please fill in all fields.");
        return;
    }

    // More advanced validation using a library (e.g., moment.js) can be added here

    // Store data in local storage
    localStorage.setItem("name", name);
    localStorage.setItem("day", day);
    localStorage.setItem("month", month);
    localStorage.setItem("year", year);

    var day = localStorage.getItem("day");
    if (day == 11) {
        document.getElementById("alma").innerHTML = "11";
    } else if (day > 9) {
        var digits = day.toString().split("");
        var sum = parseInt(digits[0]) + parseInt(digits[1]);
        document.getElementById("alma").innerHTML = sum;
    } else {
        document.getElementById("alma").innerHTML = day;
    }

    var month = localStorage.getItem("month");
    if (month == 11) {
        document.getElementById("personalidad").innerHTML = "11";
    } else if (month > 9) {
        var digits = month.toString().split("");
        var sum = parseInt(digits[0]) + parseInt(digits[1]);
        document.getElementById("personalidad").innerHTML = sum;
    } else {
        document.getElementById("personalidad").innerHTML = month;
    }
    document.getElementById("personalidad").innerHTML = month;

    var year2 = localStorage.getItem("year");
    var lastTwoDigits = year2.toString().slice(-2);
    if (lastTwoDigits == 10 || lastTwoDigits == 11 || lastTwoDigits == 22 ) {
        document.getElementById("regalo").innerHTML = lastTwoDigits;
    } else if (lastTwoDigits > 9) {
        var digits = lastTwoDigits.toString().split("");
        var sum = parseInt(digits[0]) + parseInt(digits[1]);
        if (sum == 10 || sum == 11 || sum == 22) {
            document.getElementById("regalo").innerHTML = sum;
        } else if (sum > 9) {
            var digits2 = sum.toString().split("");
            var sum2 = parseInt(digits2[0]) + parseInt(digits2[1]);
            document.getElementById("regalo").innerHTML = sum2;
        } else {
            document.getElementById("regalo").innerHTML = sum;
        }
    } else {
        var digit = lastTwoDigits.toString().split("");
        var sum = parseInt(digit[0]) + parseInt(digit[1]);
        document.getElementById("regalo").innerHTML = sum;
    }

    var year = localStorage.getItem("year");
    var digits = year.toString().split("");
    var sum = parseInt(digits[0]) + parseInt(digits[1]) + parseInt(digits[2]) + parseInt(digits[3]);
    if (sum == 10 || sum == 11 || sum == 22) {
        document.getElementById("destino").innerHTML = sum;
    } else if (sum > 9) {
        var digits2 = sum.toString().split("");
        var sum2 = parseInt(digits2[0]) + parseInt(digits2[1]);
        if (sum2 == 10 || sum2 == 11 || sum2 == 22) {
            document.getElementById("destino").innerHTML = sum2;
        } else if (sum2 > 9) {
            var digits3 = sum2.toString().split("");
            var sum3 = parseInt(digits3[0]) + parseInt(digits3[1]);
            document.getElementById("destino").innerHTML = sum3;
        } else {
            document.getElementById("destino").innerHTML = sum2;
        }
    } else {
        document.getElementById("destino").innerHTML = sum;
    }
});
});