document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("loginForm");
    const nameInput = document.getElementById("name");
    const dateInput = document.getElementById("date");

    const correctNames = [
        "cavyssa tjoeana",
        "regita putri haryadi"
    ];

    const correctDates = [
        "03 agustus 2025",
        "3 agustus 2025"
    ];

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // ⛔ cegah reload halaman

        const nameValue = nameInput.value.trim().toLowerCase();
        const dateValue = dateInput.value.trim().toLowerCase();

        if (!nameValue || !dateValue) {
            alert("Lengkapi dulu yaa sayang.");
            return;
        }

        const isNameCorrect = correctNames.includes(nameValue);
        const isDateCorrect = correctDates.includes(dateValue);

        if (isNameCorrect && isDateCorrect) {
            alert("Knock-konck! Ciee masih ingat tanggal kita. I love youu so muchh, Cavyssa Tjoeana🤍");
        } else {
            alert("😢 Kamu lupa yaa..");
            nameInput.value = "";
            dateInput.value = "";
            nameInput.focus();
        }
    });
});

function togglePassword() {
    const input = document.getElementById("date");
    const toggle = document.querySelector(".toggle");

    if (input.type === "password") {
        input.type = "text";
        toggle.textContent = "Hide";
    } else {
        input.type = "password";
        toggle.textContent = "Show";
    }
}
