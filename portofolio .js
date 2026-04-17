// Script untuk menangani interaksi dasar (Opsional)
document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio Riva Ren siap!");

    // Contoh: Menutup menu navigasi saat link diklik (untuk mobile jika nanti ada menu hamburger)
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            console.log(`Navigasi ke: ${link.getAttribute('href')}`);
        });
    });
});
