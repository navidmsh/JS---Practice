function getBotResponse(input) {

    // Simple responses
    let score = 0;
    if (input.includes("hello") || input.includes("سلام") || input.includes("درود")) {
        return "سلام. چه کمکی از دستم بر میاد؟";
    } else if (input.includes("خوب") || input.includes("حال") || input.includes("احوال")) {
        return "امروز روز پرکاری بود ولی در کل خوبم. ممنون";
    } else if (input.includes("اسم") || input.includes("نام") || input.includes("name")) {
        return "به من میگن ربات و هنوز اسم مستعاری برام انتخاب نشده. تو می‌تونی اولین نفری باشی که برای من اسم تعیین میکنه";
    } else if (input.includes("سال") || input.includes("سن") || input.includes("old")) {
        return "من یک ربات هستم و به صورت مجازی تعریف شدم. سن و سال برای من تعریف نشده است";
    } else if (input.includes("معدل") || input.includes("نمره") || input.includes("score")) {
        score = Math.random()*101;
        score = score.toFixed(2);
        return score;
    } else if (input.includes("قبول") || input.includes("رد") || input.includes("پاس")) {
        if (score>=50 && score<=100){
            return "بله قبول شدی و می‌تونی برای ترم بعد ثبت‌نام کنی";
        } else if (score>=0 && score<50){
            return "رد";
        } else {
            return "نمره باید در بازه بین 0 تا 100 باشد"
        }
    } else {
        return "سوالت را متوجه نشدم.  در صورتی که سوالت رو با دقت بیشتری بپرسی، راحت‌تر می تونم بهت کمک کنم";
    }
}