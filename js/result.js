function hitung(penentuan){
    // ChatGPT Help
    let dataItem = [
        { id: "current_orundum",                        name: "orundum",                        value: 0 },
        { id: "current_originite_prime",                name: "originite_prime",                value: 0 },
        { id: "current_headhunting_permit",             name: "headhunting_permit",             value: 0 },
        { id: "current_ten_roll_headhunting_permit",    name: "ten_roll_headhunting_permit",    value: 0 }
    ];

    // Ambil nilai dari input
    dataItem.forEach(item => {
        let id = document.getElementById(item.id);
        item.value = parseInt(id?.value) || 0;
    });

    // Fungsi menambah nilai berdasarkan name
    function add(nama, nilai) {
        let item = dataItem.find(obj => obj.name === nama);
        if (!item) {
            console.warn(`Item dengan name "${nama}" tidak ditemukan.`);
            return;
        }

        item.value += nilai;
    }
    // ChatGPT Help

    let hasil   = "";
    let jumlah  = "";

    let waktu_mulai = new Date();   // tanggal hari ini

    // Nama hari dan bulan
    const namaHari  = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const namaBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    
    let a = 1;

    let daily_remaining = {};

    while(true) {

        let waktu = new Date(waktu_mulai);
        waktu.setDate(waktu_mulai.getDate() + a);

        let hari    = waktu.getDay();     // (0 = hari minggu)
        let tanggal = waktu.getDate();    // (1 = tanggal 1)
        let bulan   = waktu.getMonth();   // (0 = bulan januari)
        let tahun   = waktu.getFullYear();

        hasil += "<div class='container'>";

            hasil += "<div class='day_list list'>Hari ke-" + a + "<br>" + namaHari[hari] + ", " + tanggal + " " + namaBulan[bulan] + " " + tahun + "</div>";

            schedule.forEach(schedule => {
                if(schedule.type == "daily"){

                    let checked = document.getElementById(schedule.id).checked;
                    if(checked){
                        hasil   += list(schedule.item, schedule.amount);
                        add(schedule.item, schedule.amount);
                    }

                }

                if(schedule.type == "daily-input"){

                    let checked = document.getElementById(schedule.id).checked;
                    let checked_value = parseInt(document.getElementById("input_" + schedule.id).value) || 0;

                    if(checked){
                        hasil   += list(schedule.item, checked_value);
                        add(schedule.item, checked_value);
                    }

                }

                if(schedule.type == "daily-on-date-month" && schedule.type_daily_on_date_month == tanggal){

                    let checked = document.getElementById(schedule.id).checked;
                    if(checked){
                        hasil   += list(schedule.item, schedule.amount);
                        add(schedule.item, schedule.amount);
                    }

                }

                if(schedule.type == "daily-remaining"){

                    let checked = document.getElementById(schedule.id).checked;
                    let checked_value = parseInt(document.getElementById("input_" + schedule.id).value) || 0;
                    
                    if(checked){
                        if(a == 1){
                            daily_remaining[schedule.id] = parseInt(checked_value);
                        }else{
                            daily_remaining[schedule.id]--;
                        }

                        if(daily_remaining[schedule.id] > 0){
                            hasil   += list(schedule.item, schedule.amount);
                            add(schedule.item, schedule.amount);
                        }
                    }
                    
                }

                if(schedule.type == "weekly" && hari == 1){

                    let checked = document.getElementById(schedule.id).checked;
                    if(checked){
                        hasil   += list(schedule.item, schedule.amount);
                        add(schedule.item, schedule.amount);
                    }

                }

                if(schedule.type == "monthly" && tanggal == 1){

                    let checked = document.getElementById(schedule.id).checked;
                    if(checked){
                        hasil   += list(schedule.item, schedule.amount);
                        add(schedule.item, schedule.amount);
                    }

                }
            });

        hasil += "</div>";

        // ChatGPT Help
        let targetStr = document.getElementById("current_target_day").value;
        if (targetStr) {
            let target = new Date(targetStr);

            // Bandingkan hari, tanggal, bulan, dan tahun
            if (
                waktu.getDay() === target.getDay() &&
                waktu.getDate() === target.getDate() &&
                waktu.getMonth() === target.getMonth() &&
                waktu.getFullYear() === target.getFullYear()
            ) {
                console.log("Berhenti di:", waktu.toISOString().split('T')[0]);
                break; // hentikan perulangan
            }
        }
        // ChatGPT Help

        a++;
        if (a > 365) break;

    }



    function list(name, total){
        return "<div class='get_list list'>" +
                "<img class='get_list_picture' alt='" + name + "' src='picture/" + name + ".webp'>" +
                "<span class='get_list_total' style=''>" + total + "</span>" +
                "</div>";
    }



    if(penentuan == "harian"){

        return hasil;

    }else if(penentuan == "jumlah"){

        let total_pull = 0;
        dataItem.forEach(item => {
            if(item.name == "orundum"){
                total_pull += (item.value / 600);
            }
            if(item.name == "originite_prime"){
                total_pull += ((item.value * 180) / 600);
            }
            if(item.name == "headhunting_permit"){
                total_pull += (item.value);
            }
            if(item.name == "ten_roll_headhunting_permit"){
                total_pull += (item.value * 10);
            }
        });

        jumlah += "<span class='total_pull'>" + total_pull + " Pull</span>";

        dataItem.forEach(item => {
            jumlah += list(item.name, item.value);
        });

        return jumlah;

    }
    

}

function tampilkan(){

    document.getElementById("hasil_pendapatan").innerHTML   = hitung("harian");
    document.getElementById("jumlah_pendapatan").innerHTML  = hitung("jumlah");

}