let bisa_didapatkan = document.getElementById("bisa_didapatkan");

function aktifkan(){
    schedule.forEach(schedule => {

        if(schedule.active){
            document.getElementById(schedule.id).checked = true;
        }

    });
    
}

schedule.forEach(schedule => {

    if(schedule.type == "daily"){

        bisa_didapatkan.innerHTML   += "<div class='checkbox'>"
                                    + "<input onchange='tampilkan()' type='checkbox' id='" + schedule.id + "'>"
                                    + "<label for='" + schedule.id + "'>" + schedule.name + "</label>"
                                    + "</div>";

    }

    if(schedule.type == "daily-input"){

        bisa_didapatkan.innerHTML   += "<div class='checkbox'>"
                                    + "<input onchange='tampilkan()' type='checkbox' id='" + schedule.id + "'>"
                                    + "<label for='" + schedule.id + "'>" + schedule.name
                                    + "<input class='input1' oninput='tampilkan()' placeholder='Jumlah Harian' type=number' id='input_" + schedule.id + "'>" + "</label>"
                                    + "</div>";

    }

    if(schedule.type == "daily-on-date-month"){

        bisa_didapatkan.innerHTML   += "<div class='checkbox'>"
                                    + "<input onchange='tampilkan()' type='checkbox' id='" + schedule.id + "'>"
                                    + "<label for='" + schedule.id + "'>" + schedule.name + "</label>"
                                    + "</div>";

    }

    if(schedule.type == "daily-remaining"){

        bisa_didapatkan.innerHTML   += "<div class='checkbox'>"
                                    + "<input onchange='tampilkan()' type='checkbox' id='" + schedule.id + "'>"
                                    + "<label for='" + schedule.id + "'>" + schedule.name
                                    + "<input class='input1' oninput='tampilkan()' placeholder='Sisa Harian' type=number' id='input_" + schedule.id + "'>" + "</label>"
                                    + "</div>";

    }

    if(schedule.type == "weekly"){

        bisa_didapatkan.innerHTML   += "<div class='checkbox'>"
                                    + "<input onchange='tampilkan()' type='checkbox' id='" + schedule.id + "'>"
                                    + "<label for='" + schedule.id + "'>" + schedule.name + "</label>"
                                    + "</div>";

    }

    if(schedule.type == "monthly"){

        bisa_didapatkan.innerHTML   += "<div class='checkbox'>"
                                    + "<input onchange='tampilkan()' type='checkbox' id='" + schedule.id + "'>"
                                    + "<label for='" + schedule.id + "'>" + schedule.name + "</label>"
                                    + "</div>";

    }

});