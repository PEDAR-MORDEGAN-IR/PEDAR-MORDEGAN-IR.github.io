// ===============================
// 🔥 Scroll Reveal Animation
// ===============================

const boxes = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
    boxes.forEach(box => {
        const top = box.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            box.classList.add("show");
        }
    });
});


// ===============================
// 🔥 SPLASH SCREEN (Only First Visit)
// ===============================

// آیا قبلاً وارد سایت شده؟
if (!localStorage.getItem("visited_once")) {
    
    // وقتی اولین بار وارد شد → بعد 5 ثانیه اسپلش حذف کن
    setTimeout(() => {
        const splash = document.getElementById("splash");
        if (splash) splash.classList.add("hide");
        
        // بعد از محو شدن کامل حذفش کن
        setTimeout(() => {
            if (splash) splash.remove();
        }, 700);

    }, 5000);

    // ثبت کن که یبار اسپلش نمایش داده شده
    localStorage.setItem("visited_once", "true");

} else {
    // اگر قبلاً داخل سایت شده → کلاً اسپلش رو حذف کن
    const splash = document.getElementById("splash");
    if (splash) splash.remove();
}
