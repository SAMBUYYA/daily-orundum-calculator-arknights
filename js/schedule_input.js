let bisa_didapatkan = document.getElementById("bisa_didapatkan");

function aktifkan(){
    schedule.forEach(schedule => {

        if(schedule.active){
            document.getElementById(schedule.id).checked = true;
        }

    });
    
}

// CHATGPT HELP
// Buat array baru (tidak mengubah array asli)
const sortedSchedule = [...schedule].sort((a, b) => {
    const kategoriA = a.kategori || "";
    const kategoriB = b.kategori || "";
    return kategoriA.localeCompare(kategoriB);
});

// Lalu pakai sortedSchedule untuk render
// CHATGPT HELP

let kategori_pemisah = "";
sortedSchedule.forEach(schedule => {

    if(kategori_pemisah != schedule.category){

        bisa_didapatkan.innerHTML += "<h3 style='text-transform: capitalize; margin: 10px;'>" + schedule.category.replaceAll("-", " ") + "</h3>";
        kategori_pemisah = schedule.category;

    }

    if(schedule.type == "daily"){

        bisa_didapatkan.innerHTML   += "<div class='checkbox'>"
                                    + "<input onchange='tampilkan(); simpan_schedule(\"save\")' type='checkbox' id='" + schedule.id + "'>"
                                    + "<label for='" + schedule.id + "'>" + schedule.name + "</label>"
                                    + "</div>";

    }

    if(schedule.type == "daily-input"){

        bisa_didapatkan.innerHTML   += "<div class='checkbox'>"
                                    + "<input onchange='tampilkan(); simpan_schedule(\"save\")' type='checkbox' id='" + schedule.id + "'>"
                                    + "<label for='" + schedule.id + "'>" + schedule.name
                                    + "<input class='input1' oninput='tampilkan(); simpan_schedule(\"save\")' placeholder='Jumlah Harian' type=number' id='input_" + schedule.id + "'>" + "</label>"
                                    + "</div>";

    }

    if(schedule.type == "daily-on-date-month"){

        bisa_didapatkan.innerHTML   += "<div class='checkbox'>"
                                    + "<input onchange='tampilkan(); simpan_schedule(\"save\")' type='checkbox' id='" + schedule.id + "'>"
                                    + "<label for='" + schedule.id + "'>" + schedule.name + "</label>"
                                    + "</div>";

    }

    if(schedule.type == "daily-remaining"){

        bisa_didapatkan.innerHTML   += "<div class='checkbox'>"
                                    + "<input onchange='tampilkan(); simpan_schedule(\"save\")' type='checkbox' id='" + schedule.id + "'>"
                                    + "<label for='" + schedule.id + "'>" + schedule.name
                                    + "<input class='input1' oninput='tampilkan(); simpan_schedule(\"save\")' placeholder='Sisa Harian' type=number' id='input_" + schedule.id + "'>" + "</label>"
                                    + "</div>";

    }

    if(schedule.type == "weekly"){

        bisa_didapatkan.innerHTML   += "<div class='checkbox'>"
                                    + "<input onchange='tampilkan(); simpan_schedule(\"save\")' type='checkbox' id='" + schedule.id + "'>"
                                    + "<label for='" + schedule.id + "'>" + schedule.name + "</label>"
                                    + "</div>";

    }

    if(schedule.type == "monthly"){

        bisa_didapatkan.innerHTML   += "<div class='checkbox'>"
                                    + "<input onchange='tampilkan(); simpan_schedule(\"save\")' type='checkbox' id='" + schedule.id + "'>"
                                    + "<label for='" + schedule.id + "'>" + schedule.name + "</label>"
                                    + "</div>";

    }

    if(schedule.type == "once"){

        bisa_didapatkan.innerHTML   += "<div class='checkbox'>"
                                    + "<input onchange='tampilkan(); simpan_schedule(\"save\")' type='checkbox' id='" + schedule.id + "'>"
                                    + "<label for='" + schedule.id + "'>" + schedule.name + "</label>"
                                    + "</div>";

    }

    if(schedule.type == "once-remaining"){

        bisa_didapatkan.innerHTML   += "<div class='checkbox'>"
                                    + "<input onchange='tampilkan(); simpan_schedule(\"save\")' type='checkbox' id='" + schedule.id + "'>"
                                    + "<label for='" + schedule.id + "'>" + schedule.name
                                    + "<input class='input1' oninput='tampilkan(); simpan_schedule(\"save\")' placeholder='Sisa Harian' type=number' id='input_" + schedule.id + "'>" + "</label>"
                                    + "</div>";

    }

});