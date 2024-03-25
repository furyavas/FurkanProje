document.addEventListener("DOMContentLoaded", function() {
    const chatbox = document.getElementById('chatbox');
    const submitBtn = document.getElementById('submitBtn');
    const resultImage = document.getElementById('resultImage');

    submitBtn.addEventListener('click', function() {
        const mood = chatbox.value.toLowerCase();

        // Ruh haline göre resimleri eşleştir
        let imageSrc ='';
        switch(mood) {
            case 'mutlu':
                const randomIndex1 = Math.floor(Math.random() * 4) + 1; // Rastgele bir sayı oluştur (1-4 arası)
                imageSrc = `images/mutlu${randomIndex1}.jpg`; // Rastgele mutlu kedi fotoğrafı seç
                break;
            case 'üzgün':
                const randomIndex2 = Math.floor(Math.random() * 4) + 1; // Rastgele bir sayı oluştur (1-4 arası)
                imageSrc = `images/üzgün${randomIndex2}.jpg`; // Rastgele üzgün kedi fotoğrafı seç
                break;
            case 'sinirli':
                const randomIndex3 = Math.floor(Math.random() * 4) + 1; // Rastgele bir sayı oluştur (1-4 arası)
                imageSrc = `images/sinirli${randomIndex3}.jpg`; // Rastgele sinirli kedi fotoğrafı seç
                break;
            default:
                imageSrc = 'images/logo.png';
        }

        // Resmi ana sayfaya ekle
        resultImage.src = imageSrc;

        // Ruh haline göre ilgili bölümü göster
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.style.display = 'none'; // Tüm bölümleri gizle
        });

        // Ruh hali metnine göre ilgili bölümü göster
        const moodSection = document.getElementById(mood.toUpperCase()); // Ruh haline uygun bölümü al
        if (moodSection) {
            moodSection.style.display = 'block'; // Ruh haline uygun bölümü göster
        }
    });
});
