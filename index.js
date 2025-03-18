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
    document.getElementById("date").innerHTML = day + "/" + month + "/" + year;

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


    //Get Alma
    var day = localStorage.getItem("day");
    if (day == 11) {
        var alma = "11";
    } else if (day > 9) {
        var digits = day.toString().split("");
        var sum = parseInt(digits[0]) + parseInt(digits[1]);
        var alma = sum;
    } else {
        var alma = day;
    }

    document.getElementById("alma").innerHTML = alma;
    localStorage.setItem("alma", alma);


    //Get Personalidad
    var month = localStorage.getItem("month");
    var personalidad;
    if (month == 11) {
        personalidad = "11";
    } else if (month > 9) {
        var digits = month.toString().split("");
        var sum = parseInt(digits[0]) + parseInt(digits[1]);
        personalidad = sum;
    } else {
        personalidad = month;
    }

    document.getElementById("personalidad").innerHTML = personalidad;
    localStorage.setItem("personalidad", personalidad);


    //Get Regalo
    var year2 = localStorage.getItem("year");
    var lastTwoDigits = year2.toString().slice(-2);
    var regalo;
    if (lastTwoDigits == 10 || lastTwoDigits == 11 || lastTwoDigits == 22 ) {
        regalo = lastTwoDigits;
    } else if (lastTwoDigits > 9) {
        var digits = lastTwoDigits.toString().split("");
        var sum = parseInt(digits[0]) + parseInt(digits[1]);
    if (sum == 10 || sum == 11 || sum == 22) {
        regalo = sum;
    } else if (sum > 9) {
        var digits2 = sum.toString().split("");
        var sum2 = parseInt(digits2[0]) + parseInt(digits2[1]);
        regalo = sum2;
    } else {
        regalo = sum;
    }
    } else {
        var digit = lastTwoDigits.toString().split("");
        var sum = parseInt(digit[0]) + parseInt(digit[1]);
        regalo = sum;
    }

    document.getElementById("regalo").innerHTML = regalo;
    localStorage.setItem("regalo", regalo);


    //Get Destino
    var year = localStorage.getItem("year");
    var digits = year.toString().split("");
    var sum = parseInt(digits[0]) + parseInt(digits[1]) + parseInt(digits[2]) + parseInt(digits[3]);
    var destino;
    if (sum == 10 || sum == 11 || sum == 22) {
        destino = sum;
    } else if (sum > 9) {
        var digits2 = sum.toString().split("");
        var sum2 = parseInt(digits2[0]) + parseInt(digits2[1]);
    if (sum2 == 10 || sum2 == 11 || sum2 == 22) {
        destino = sum2;
    } else if (sum2 > 9) {
        var digits3 = sum2.toString().split("");
        var sum3 = parseInt(digits3[0]) + parseInt(digits3[1]);
        destino = sum3;
    } else {
        destino = sum2;
    }
    } else {
        destino = sum;
    }

    document.getElementById("destino").innerHTML = destino;
    localStorage.setItem("destino", destino);


    //Get Mision
    var alma = localStorage.getItem("alma");
    var personalidad = localStorage.getItem("personalidad");
    var destino = localStorage.getItem("destino");
    var mision = parseInt(alma) + parseInt(personalidad) + parseInt(destino);

    if (mision == 10 || mision == 11 || mision == 22 || mission == 33) {
        document.getElementById("mision").innerHTML = mision;
        localStorage.setItem("mision", mision);
    } else {mision >9
        var digits = mision.toString().split("");
        var sum = parseInt(digits[0]) + parseInt(digits[1]);
        mision = sum;
        document.getElementById("mision").innerHTML = mision;
        localStorage.setItem("mision", mision);
    }


    //Get Pinaculo 1
    var regalo = localStorage.getItem("regalo");
    var alma = localStorage.getItem("alma");
    var pinaculo1 = parseInt(regalo) + parseInt(alma);

    if (pinaculo1 > 9) {
        var digits = pinaculo1.toString().split("");
        var sum = parseInt(digits[0]) + parseInt(digits[1]);
        pinaculo1 = sum;
    }

    document.getElementById("pinaculo1").innerHTML = pinaculo1;
    localStorage.setItem("pinaculo1", pinaculo1);


    //Get Pinaculo 2
    var regalo = localStorage.getItem("regalo");
    var personalidad = localStorage.getItem("personalidad");
    var pinaculo2 = parseInt(regalo) + parseInt(personalidad);

    if (pinaculo2 > 9) {
        var digits = pinaculo2.toString().split("");
        var sum = parseInt(digits[0]) + parseInt(digits[1]);
        pinaculo2 = sum;
    }

    document.getElementById("pinaculo2").innerHTML = pinaculo2;
    localStorage.setItem("pinaculo2", pinaculo2);


    //Get Pinaculo 3
    var alma = localStorage.getItem("alma");
    var personalidad = localStorage.getItem("personalidad");
    var pinaculo3 = parseInt(alma) + parseInt(personalidad);

    if (pinaculo3 > 9) {
        var digits = pinaculo3.toString().split("");
        var sum = parseInt(digits[0]) + parseInt(digits[1]);
        pinaculo3 = sum;
    }

    document.getElementById("pinaculo3").innerHTML = pinaculo3;
    localStorage.setItem("pinaculo3", pinaculo3);
    

    //Get Pinaculo 4
    var regalo = localStorage.getItem("regalo");
    var destino = localStorage.getItem("destino");
    var pinaculo = parseInt(regalo) + parseInt(destino);

    if (pinaculo > 9) {
        var digits = pinaculo.toString().split("");
        var sum = parseInt(digits[0]) + parseInt(digits[1]);
        pinaculo = sum;
    }

    document.getElementById("pinaculo4").innerHTML = pinaculo;
    localStorage.setItem("pinaculo4", pinaculo4);


    //Get Pinaculo 5
    var alma = localStorage.getItem("alma");
    var destino = localStorage.getItem("destino");
    var pinaculo5 = parseInt(alma) + parseInt(destino);

    if (pinaculo5 > 9) {
        var digits = pinaculo5.toString().split("");
        var sum = parseInt(digits[0]) + parseInt(digits[1]);
        pinaculo5 = sum;
    }

    document.getElementById("pinaculo5").innerHTML = pinaculo5;
    localStorage.setItem("pinaculo5", pinaculo5);


    //Get Pinaculo 6
    var personalidad = localStorage.getItem("personalidad");
    var destino = localStorage.getItem("destino");
    var pinaculo6 = parseInt(personalidad) + parseInt(destino);

    if (pinaculo6 > 9) {
        var digits = pinaculo6.toString().split("");
        var sum = parseInt(digits[0]) + parseInt(digits[1]);
        pinaculo6 = sum;
    }

    document.getElementById("pinaculo6").innerHTML = pinaculo6;
    localStorage.setItem("pinaculo6", pinaculo6);


    //Get Pinaculo 7
    var regalo = localStorage.getItem("regalo");
    var mision = localStorage.getItem("mision");
    var pinaculo7 = parseInt(regalo) + parseInt(mision);

    if (pinaculo7 > 9) {
        var digits = pinaculo7.toString().split("");
        var sum = parseInt(digits[0]) + parseInt(digits[1]);
        pinaculo7 = sum;
    }

    document.getElementById("pinaculo7").innerHTML = pinaculo7;
    localStorage.setItem("pinaculo7", pinaculo7);


    //Get Pinaculo 8
    var destino = localStorage.getItem("destino");
    var mision = localStorage.getItem("mision");
    var pinaculo8 = parseInt(destino) + parseInt(mision);

    if (pinaculo8 > 9) {
        var digits = pinaculo8.toString().split("");
        var sum = parseInt(digits[0]) + parseInt(digits[1]);
        pinaculo8 = sum;
    }

    document.getElementById("pinaculo8").innerHTML = pinaculo8;
    localStorage.setItem("pinaculo8", pinaculo8);
    

    //Get Pinaculo 9
    var personalidad = localStorage.getItem("personalidad");
    var mision = localStorage.getItem("mision");
    var pinaculo9 = parseInt(personalidad) + parseInt(mision);

    if (pinaculo9 > 9) {
        var digits = pinaculo9.toString().split("");
        var sum = parseInt(digits[0]) + parseInt(digits[1]);
        pinaculo9 = sum;
    }

    document.getElementById("pinaculo9").innerHTML = pinaculo9;
    localStorage.setItem("pinaculo9", pinaculo9);


    //Get Pinaculo 10
    var alma = localStorage.getItem("alma");
    var mision = localStorage.getItem("mision");
    var pinaculo10 = parseInt(alma) + parseInt(mision);

    if (pinaculo10 > 9) {
        var digits = pinaculo10.toString().split("");
        var sum = parseInt(digits[0]) + parseInt(digits[1]);
        pinaculo10 = sum;
    }

    document.getElementById("pinaculo10").innerHTML = pinaculo10;
    localStorage.setItem("pinaculo10", pinaculo10);

    //Load json and display results
    fetch('index.json')
    .then(response => response.json())
    .then(data => {

        // Fill Alma data
        const almaValue = localStorage.getItem("alma");
        const almaItem = data.find(item => item.number === almaValue);

        if (almaItem) {
            console.log(almaItem.nombre);
            document.getElementById("alma_nombre").innerHTML = almaItem.nombre;
            document.getElementById("alma_clave").innerHTML = almaItem.clave;
            document.getElementById("alma_leccion").innerHTML = almaItem.leccion;
            document.getElementById("alma_desc").innerHTML = almaItem.desc;
        } else {
            console.log("Error finding alma with number:", almaValue);
            document.getElementById("alma_nombre").innerHTML = "Alma not found";
            document.getElementById("alma_clave").innerHTML = "";
            document.getElementById("alma_leccion").innerHTML = "";
            document.getElementById("alma_desc").innerHTML = "";
        }

        // Fill Personalidad data
        const personalidadValue = localStorage.getItem("personalidad");
        const personalidadItem = data.find(item => item.number === personalidadValue);

        if (personalidadItem) {
            console.log(personalidadItem.nombre);
            document.getElementById("personalidad_nombre").innerHTML = personalidadItem.nombre;
            document.getElementById("personalidad_clave").innerHTML = personalidadItem.clave;
            document.getElementById("personalidad_leccion").innerHTML = personalidadItem.leccion;
            document.getElementById("personalidad_desc").innerHTML = personalidadItem.desc;
        } else {
            console.log("Error finding personalidad with number:", personalidadValue);
            document.getElementById("personalidad_nombre").innerHTML = "Personalidad not found";
            document.getElementById("personalidad_clave").innerHTML = "";
            document.getElementById("personalidad_leccion").innerHTML = "";
            document.getElementById("personalidad_desc").innerHTML = "";
        }

        // Fill Destino data
        const destinoValue = localStorage.getItem("destino");
        const destinoItem = data.find(item => item.number === destinoValue);

        if (destinoItem) {
            console.log(destinoItem.nombre);
            document.getElementById("destino_nombre").innerHTML = destinoItem.nombre;
            document.getElementById("destino_clave").innerHTML = destinoItem.clave;
            document.getElementById("destino_leccion").innerHTML = destinoItem.leccion;
            document.getElementById("destino_desc").innerHTML = destinoItem.desc;
        } else {
            console.log("Error finding destino with number:", destinoValue);
            document.getElementById("destino_nombre").innerHTML = "Destino not found";
            document.getElementById("destino_clave").innerHTML = "";
            document.getElementById("destino_leccion").innerHTML = "";
            document.getElementById("destino_desc").innerHTML = "";
        }

        // Fill Regalo data
        const regaloValue = localStorage.getItem("regalo");
        const regaloItem = data.find(item => item.number === regaloValue);

        if (regaloItem) {
            console.log(regaloItem.nombre);
            document.getElementById("regalo_nombre").innerHTML = regaloItem.nombre;
            document.getElementById("regalo_clave").innerHTML = regaloItem.clave;
            document.getElementById("regalo_leccion").innerHTML = regaloItem.leccion;
            document.getElementById("regalo_desc").innerHTML = regaloItem.desc;
        } else {
            console.log("Error finding regalo with number:", regaloValue);
            document.getElementById("regalo_nombre").innerHTML = "Regalo not found";
            document.getElementById("regalo_clave").innerHTML = "";
            document.getElementById("regalo_leccion").innerHTML = "";
            document.getElementById("regalo_desc").innerHTML = "";
        }

        // Fill Misión data
        const misionValue = localStorage.getItem("mision");
        const misionItem = data.find(item => item.number === misionValue);

        if (misionItem) {
            console.log(misionItem.nombre);
            document.getElementById("mision_nombre").innerHTML = misionItem.nombre;
            document.getElementById("mision_clave").innerHTML = misionItem.clave;
            document.getElementById("mision_leccion").innerHTML = misionItem.leccion;
            document.getElementById("mision_desc").innerHTML = misionItem.desc;
        } else {
            console.log("Error finding mision with number:", misionValue);
            document.getElementById("mision_nombre").innerHTML = "Misión not found";
            document.getElementById("mision_clave").innerHTML = "";
            document.getElementById("mision_leccion").innerHTML = "";
            document.getElementById("mision_desc").innerHTML = "";
        }

    })
    .catch(error => console.error('Error fetching or processing data:', error));

});
});
