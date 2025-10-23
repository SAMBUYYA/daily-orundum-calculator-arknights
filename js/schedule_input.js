let bisa_didapatkan = document.getElementById("bisa_didapatkan");


bisa_didapatkan.innerHTML += "<h3>Bisa Didapatkan:</h3>";

function aktifkan(){
    schedule.forEach(schedule => {

        if(schedule.active){
            document.getElementById(schedule.id).checked = true;
        }

    });
    
}

schedule.forEach(schedule => {

    if(schedule.type == "daily"){

        bisa_didapatkan.innerHTML += "<input onchange='tampilkan()' type='checkbox' id='" + schedule.id + "'>";
        bisa_didapatkan.innerHTML += "<label for='" + schedule.id + "'>" + schedule.name + "</label>";
        bisa_didapatkan.innerHTML += "<br>";

    }

    if(schedule.type == "daily-input"){

        bisa_didapatkan.innerHTML += "<input onchange='tampilkan()' type='checkbox' id='" + schedule.id + "'>";
        bisa_didapatkan.innerHTML += "<label for='" + schedule.id + "'>" + schedule.name + "</label>";
        bisa_didapatkan.innerHTML += "<input oninput='tampilkan()' type=number' id='input_" + schedule.id + "'>";
        bisa_didapatkan.innerHTML += "<br>";

    }

    if(schedule.type == "daily-on-date-month"){

        bisa_didapatkan.innerHTML += "<input onchange='tampilkan()' type='checkbox' id='" + schedule.id + "'>";
        bisa_didapatkan.innerHTML += "<label for='" + schedule.id + "'>" + schedule.name + "</label>";
        bisa_didapatkan.innerHTML += "<br>";

    }

    if(schedule.type == "weekly"){

        bisa_didapatkan.innerHTML += "<input onchange='tampilkan()' type='checkbox' id='" + schedule.id + "'>";
        bisa_didapatkan.innerHTML += "<label for='" + schedule.id + "'>" + schedule.name + "</label>";
        bisa_didapatkan.innerHTML += "<br>";

    }

    if(schedule.type == "monthly"){

        bisa_didapatkan.innerHTML += "<input onchange='tampilkan()' type='checkbox' id='" + schedule.id + "'>";
        bisa_didapatkan.innerHTML += "<label for='" + schedule.id + "'>" + schedule.name + "</label>";
        bisa_didapatkan.innerHTML += "<br>";

    }

});