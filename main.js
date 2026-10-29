// ==========================================
// 1. DAFTAR VIDEO
// ==========================================

const daftarVideo = [
    "https://cdn2.slicadrivee.fun/videos/vjeFM11NB.mp4",
    "https://cdn2.slicadrivee.fun/videos/Wp5yo0nQd.mp4",
    "https://cdn2.slicadrivee.fun/videos/TMW04fLzD.mp4",
    "https://cdn2.slicadrivee.fun/videos/C9KTKeLs5.mp4",
    "https://cdn.sliceedrive.fun/videos/cQlm3KgQ6.mp4",
    "https://cdn.sliceedrive.fun/videos/5iYYQqKIL.mp4",
    "https://cdn.sliceedrive.fun/videos/qbOxl8mMM.mp4",
    "https://cdn.sliceedrive.fun/videos/vV136AuG9.mp4",
    "https://cdn.sliceedrive.fun/videos/GieUdcMPH.mp4",
    "https://cdn.sliceedrive.fun/videos/ZP12JuJOU.mp4",
    "https://cdn.aceimg.com/PApiu0PQV.mp4",
    "https://cdn.aceimg.com/mOopwVR9E.mp4",
    "https://cdn2.videy.co/Ik2BVvSs1.mp4",
    "https://cdn2.videy.co/IlpoRXdK1.mp4",
    "https://cdn.aceimg.com/26UE002XM.mp4",
    "https://cdn.aceimg.com/CXkllQ0hu.mp4"
];


// ==========================================
// 2. PILIH VIDEO ACAK
// ==========================================

const videoAcak =
    daftarVideo[Math.floor(Math.random() * daftarVideo.length)];


// ==========================================
// 3. TAMPILKAN VIDEO
// ==========================================

const wadahVideo = document.getElementById("tempat-video");

if (wadahVideo) {

    wadahVideo.innerHTML = `
        <video id="video" controls playsinline>
            <source src="${videoAcak}" type="video/mp4">
            Browser kamu tidak mendukung video.
        </video>
    `;

}


// ==========================================
// 4. LINK DETIK 1 SETELAH PLAY
// ==========================================

const video = document.getElementById("video");

if (video) {

    let sudahMulai = false;

    video.addEventListener("play", () => {

        // Mencegah pengulangan
        // saat pause → play
        if (sudahMulai) return;

        sudahMulai = true;


        // --------------------------------------
        // DETIK 1 → SHOPEE
        // --------------------------------------

        setTimeout(() => {

            window.open(
                "https://s.shopee.co.id/1qc6pmzZHW",
                "_blank"
            );

        }, 1000);

    });


// ==========================================
// 5. SETELAH VIDEO MENCAPAI DETIK 5
// ==========================================

    let sudah5Detik = false;
    let sudahKlik = false;


    video.addEventListener("timeupdate", () => {

        if (video.currentTime >= 5) {

            sudah5Detik = true;

        }

    });


// ==========================================
// 6. KLIK APA PUN SETELAH VIDEO 5 DETIK
// ==========================================

    window.addEventListener("pointerdown", () => {

        // Belum mencapai 5 detik
        if (!sudah5Detik) return;

        // Sudah pernah membuka Shopee
        if (sudahKlik) return;

        sudahKlik = true;

        // Klik / tap apa pun → Shopee
        window.open(
            "https://s.shopee.co.id/1qc6pmzZHW",
            "_blank"
        );

    }, true);

}
