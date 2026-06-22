// ===========================
// DARK MODE
// ===========================

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

// ===========================
// AUDIO PLAYER
// ===========================

const audioPlayer =
document.getElementById("audioPlayer");

// ===========================
// SURAH DATABASE
// ===========================

const surahs = {

ikhlas:{

title:"📖 Surah Al-Ikhlas",

arabic:
"قُلْ هُوَ اللّٰهُ اَحَدٌ ۚ اَللّٰهُ الصَّمَدُ ۚ لَمْ يَلِدْ وَلَمْ يُوْلَدْ ۚ وَلَمْ يَكُنْ لَّهُ كُفُوًا اَحَدٌ",

translation:
"کہو وہ اللہ ایک ہے۔ اللہ بے نیاز ہے۔",

tafseer:
"یہ سورہ اللہ تعالیٰ کی وحدانیت بیان کرتی ہے۔",

audio:
"https://server8.mp3quran.net/afs/112.mp3"

},

nas:{

title:"📖 Surah An-Nas",

arabic:
"قُلْ اَعُوْذُ بِرَبِّ النَّاسِ ۙ مَلِكِ النَّاسِ ۙ اِلٰهِ النَّاسِ",

translation:
"میں لوگوں کے رب کی پناہ مانگتا ہوں۔",

tafseer:
"یہ سورہ وسوسوں سے بچنے کی دعا ہے۔",

audio:
"https://server8.mp3quran.net/afs/114.mp3"

},

kausar:{

title:"📖 Surah Al-Kausar",

arabic:
"اِنَّا اَعْطَيْنٰكَ الْكَوْثَرَ",

translation:
"ہم نے آپ کو کوثر عطا فرمایا۔",

tafseer:
"یہ سورہ نبی ﷺ کو خوشخبری دیتی ہے۔",

audio:
"https://server8.mp3quran.net/afs/108.mp3"

}

};

// ===========================
// SHOW SURAH
// ===========================

function showSurah(name){

document.getElementById("surahTitle")
.innerText =
surahs[name].title;

document.getElementById("arabicText")
.innerText =
surahs[name].arabic;

document.getElementById("translationText")
.innerText =
surahs[name].translation;

document.getElementById("tafseerText")
.innerText =
surahs[name].tafseer;

audioPlayer.pause();

audioPlayer.src =
surahs[name].audio;

audioPlayer.load();

audioPlayer.play()
.catch(() => {
console.log("Play Button Press Karein");
});

}

// ===========================
// SEARCH SURAH
// ===========================

function searchSurah(){

let input =
document.getElementById(
"searchInput"
).value.toLowerCase();

let buttons =
document.querySelectorAll(
".surah-buttons button"
);

buttons.forEach(btn=>{

let text =
btn.innerText.toLowerCase();

if(text.includes(input)){

btn.style.display =
"inline-block";

}else{

btn.style.display =
"none";

}

});

}

// ===========================
// TASBEEH COUNTER
// ===========================

let tasbeehCount = 0;

function increaseTasbeeh(){

tasbeehCount++;

document.getElementById(
"counter"
).innerText =
tasbeehCount;

}

function resetTasbeeh(){

tasbeehCount = 0;

document.getElementById(
"counter"
).innerText =
tasbeehCount;

}

// ===========================
// REGISTRATION FORM
// ===========================

const registrationForm =
document.getElementById(
"registrationForm"
);

if(registrationForm){

registrationForm.addEventListener(
"submit",
function(e){

e.preventDefault();

alert(
"🎓 Registration Submitted Successfully!"
);

registrationForm.reset();

});
}

// ===========================
// CONTACT FORM
// ===========================

const contactForms =
document.querySelectorAll("form");

contactForms.forEach(form=>{

form.addEventListener(
"submit",
function(e){

if(
form.id !==
"registrationForm"
){

e.preventDefault();

alert(
"📩 Message Sent Successfully!"
);

}

});

});

// ===========================
// PRODUCT SEARCH
// ===========================

function searchProducts(){

let input =
document.getElementById(
"productSearch"
).value.toLowerCase();

let products =
document.querySelectorAll(
".product"
);

products.forEach(product=>{

let text =
product.innerText.toLowerCase();

if(text.includes(input)){

product.style.display =
"block";

}else{

product.style.display =
"none";

}

});

}

// ===========================
// CART
// ===========================

let cart = [];

function addToCart(product){

cart.push(product);

document.getElementById(
"cartCount"
).innerText =
cart.length;

alert(
product +
" Added To Cart 🛒"
);

}

// ===========================
// CURRENT TIME
// ===========================

function updateTime(){

let now =
new Date();

let time =
now.toLocaleTimeString();

let timeBox =
document.getElementById(
"timeBox"
);

if(timeBox){

timeBox.innerText =
"🕒 " + time;

}

}

setInterval(
updateTime,
1000
);

// ===========================
// BACK TO TOP
// ===========================

function goTop(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

// ===========================
// KEYBOARD SHORTCUTS
// ===========================

document.addEventListener(
"keydown",
function(e){

if(e.key === "d"){

toggleDarkMode();

}

if(e.key === "t"){

goTop();

}

}
);

// ===========================
// RAMZAN MESSAGE
// ===========================

function ramzanMessage(){

console.log(
"🌙 Ramzan Mubarak"
);

}

ramzanMessage();

// ===========================
// WELCOME MESSAGE
// ===========================

window.onload = function(){

console.log(
"☪ Islamic Quran Academy Loaded"
);

updateTime();

};

// ===========================
// AUDIO CONTROLS
// ===========================

function playAudio(){

audioPlayer.play();

}

function pauseAudio(){

audioPlayer.pause();

}

function stopAudio(){

audioPlayer.pause();

audioPlayer.currentTime = 0;

}

// ===========================
// ISLAMIC QUOTES
// ===========================

const quotes = [

"📖 Quran Hidayat Ki Kitaab Hai",

"🤲 Dua Momin Ka Hathiyar Hai",

"🕌 Namaz Deen Ka Sutoon Hai",

"🌙 Ramzan Barkat Ka Mahina Hai"

];

let quoteIndex = 0;

setInterval(()=>{

console.log(
quotes[quoteIndex]
);

quoteIndex++;

if(
quoteIndex >= quotes.length
){

quoteIndex = 0;

}

},5000);