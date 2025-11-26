// ===========================
//  Show Splash Screen ONLY Once
// ===========================

window.addEventListener("load", () => {

    // آیا قبلاً اسپلش دیده شده؟
    const splashSeen = localStorage.getItem("splashDone");

    if (!splashSeen) {
        // اسپلش را ۵ ثانیه نشان بده
        setTimeout(() => {
            const splash = document.getElementById("splash");
            if (splash) splash.remove();
        }, 5000);

        // فقط یک بار ذخیره کن
        localStorage.setItem("splashDone", "true");

    } else {
        // اگر اسپلش قبلاً دیده شده → فوری حذفش کن
        const splash = document.getElementById("splash");
        if (splash) splash.remove();
    }
});


// ===========================
//  Scroll Reveal Animation
// ===========================

const boxes = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
    boxes.forEach(box => {
        const top = box.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            box.classList.add("show");
        }
    });
});
