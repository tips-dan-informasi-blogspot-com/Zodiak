//hak.cipta : wwww.tips-berbagiinfo.blogspot.com//
function signs() {//hak.cipta : wwww.tips-berbagiinfo.blogspot.com//
var start = 1901, birthyear = document.zodiac.year.value, date=document.zodiac.date.value, month=document.zodiac.month.selectedIndex;
with (document.zodiac.sign){//hak.cipta : wwww.tips-berbagiinfo.blogspot.com//
if (month == 1 && date >=20 || month == 2 && date <=18) {value = "Aquarius";}
if (month == 1 && date > 31) {value = "Huh?";}//hak.cipta : wwww.tips-berbagiinfo.blogspot.com//
if (month == 2 && date >=19 || month == 3 && date <=20) {value = "Pisces";}
if (month == 2 && date > 29) {value = "Say what?";}//hak.cipta : wwww.tips-berbagiinfo.blogspot.com//
if (month == 3 && date >=21 || month == 4 && date <=19) {value = "Aries";}
if (month == 3 && date > 31) {value = "OK. Whatever.";}//hak.cipta : wwww.tips-berbagiinfo.blogspot.com//
if (month == 4 && date >=20 || month == 5 && date <=20) {value = "Taurus";}
if (month == 4 && date > 30) {value = "I'm soooo sorry!";}//hak.cipta : wwww.tips-berbagiinfo.blogspot.com//
if (month == 5 && date >=21 || month == 6 && date <=21) {value = "Gemini";}
if (month == 5 && date > 31) {value = "Umm ... no.";}//hak.cipta : wwww.tips-berbagiinfo.blogspot.com//
if (month == 6 && date >=22 || month == 7 && date <=22) {value = "Cancer";}
if (month == 6 && date > 30) {value = "Sorry.";}//hak.cipta : wwww.tips-berbagiinfo.blogspot.com//
if (month == 7 && date >=23 || month == 8 && date <=22) {value = "Leo";}
if (month == 7 && date > 31) {value = "Excuse me?";}//hak.cipta : wwww.tips-berbagiinfo.blogspot.com//
if (month == 8 && date >=23 || month == 9 && date <=22) {value = "Virgo";}
if (month == 8 && date > 31) {value = "Yeah. Right.";}//hak.cipta : wwww.tips-berbagiinfo.blogspot.com//
if (month == 9 && date >=23 || month == 10 && date <=22) {value = "Libra";}
if (month == 9 && date > 30) {value = "Try Again.";}//hak.cipta : wwww.tips-berbagiinfo.blogspot.com//
if (month == 10 && date >=23 || month == 11 && date <=21) {value = "Scorpio";}
if (month == 10 && date > 31) {value = "Forget it!";}//hak.cipta : wwww.tips-berbagiinfo.blogspot.com//
if (month == 11 && date >=22 || month == 12 && date <=21) {value = "Sagittarius";}
if (month == 11 && date > 30) {value = "Invalid Date";}//hak.cipta : wwww.tips-berbagiinfo.blogspot.com//
if (month == 12 && date >=22 || month == 1 && date <=19) {value = "Capricorn";}
if (month == 12 && date > 31) {value = "No way!";}//hak.cipta : wwww.tips-berbagiinfo.blogspot.com//
}//hak.cipta : wwww.tips-berbagiinfo.blogspot.com//
x = (start - birthyear) % 12
with (document.zodiac.csign){
if (x == 1 || x == -11) {value = "Tikus";}
if (x == 0) {value = "Ox";}//hak.cipta : wwww.tips-berbagiinfo.blogspot.com//
if (x == 11 || x == -1) {value = "Macan";}
if (x == 10 || x == -2) {value = "Kelinci";}
if (x == 9 || x == -3) {value = "Naga";}
if (x == 8 || x == -4) {value = "Ular";}
if (x == 7 || x == -5) {value = "Kuda";}
if (x == 6 || x == -6) {value = "Kambing";}
if (x == 5 || x == -7) {value = "Monyet";}
if (x == 4 || x == -8) {value = "Ayam";}
if (x == 3 || x == -9) {value = "Anjing";}
if (x == 2 || x == -10) {value = "Babi";}
}//hak.cipta : wwww.tips-berbagiinfo.blogspot.com//
}//hak.cipta : wwww.tips-berbagiinfo.blogspot.com//
