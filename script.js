"use strict"; {
    
const box = document.getElementById("box");
const box2= document.getElementById("box2");
const kuji = () => {box2.classList.add("kuji2")};
const kiti = [
    "10", "304","8","202","401","303", "6","4","10", "201","5","301","10", "9","302","2","11","404","405","408",
];
    
box.addEventListener("click", () => {
    if(box.className === "") {
        box.classList.add("omi");
       let n = Math.floor(Math.random() * 20);
        box2.textContent = kiti[n];
    setTimeout(kuji, 1000);
    } else {
        box.classList.remove("omi");
        box2.classList.remove("kuji2");
    }
});
}
