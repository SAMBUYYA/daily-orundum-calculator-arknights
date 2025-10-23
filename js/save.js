// ChatGPT Help
function simpan_dimiliki(mode = "load") {
    const id = [
        "current_orundum",
        "current_originite_prime",
        "current_headhunting_permit",
        "current_ten_roll_headhunting_permit",

        "current_target_day"
    ];

    id.forEach(id => {
        const current_currency = document.getElementById(id);

        if (!current_currency) return; // jika elemen tidak ditemukan, lewati

        if (mode === "save") {
            // simpan data ke localStorage
            if (id == "current_target_day") {
                let value = current_currency.value;
                localStorage.setItem(id, value);
            } else {
                let value = parseInt(current_currency.value) || 0;
                localStorage.setItem(id, value);
            }

        } else if (mode === "load") {
            if (id == "current_target_day") {
                let savedValue = localStorage.getItem(id);
                let today = new Date();
                today.setHours(0, 0, 0, 0);

                if (savedValue) {
                    let savedDate = new Date(savedValue);
                    savedDate.setHours(0, 0, 0, 0);

                    if (savedDate <= today) {
                        // tanggal tersimpan sudah lewat atau sama dengan hari ini
                        let nextDate = new Date(today);
                        nextDate.setDate(today.getDate() + 30);

                        // simpan dalam format yyyy-mm-dd lokal
                        let formatted = nextDate.toISOString().split('T')[0];
                        localStorage.setItem(id, formatted);
                        current_currency.value = formatted;
                    } else {
                        // tampilkan tanggal tersimpan
                        current_currency.value = savedValue;
                    }
                } else {
                    // belum ada di localStorage → set 0
                    current_currency.value = 0;
                }
            } else {
                let savedValue = localStorage.getItem(id);
                current_currency.value = savedValue !== null ? savedValue : 0;
            }
        }

    });
}
// ChatGPT Help

simpan_dimiliki();