const btn1 = document.querySelectorAll("button")[0]
const btn2 = document.querySelectorAll("button")[1]
const btn3 = document.querySelectorAll("button")[2]
const btn4 = document.querySelectorAll("button")[3]
const btn5 = document.querySelectorAll("button")[4]
const submitBtn = document.querySelector("#submit")
const ratingDiv = document.querySelector(".ratingContainer")
const thankYouDiv = document.querySelector(".thankYouContainer")
let ratingValue = 0


btn1.addEventListener("click", function () {
    ratingValue= 1;
    btn1.style.backgroundColor= "hsl(217, 12%, 63%)"
    btn1.style.color= "white"
    btn2.style.backgroundColor= "hsl(216, 12%, 24%)"
    btn2.style.color= "hsl(217, 12%, 63%)"
    btn3.style.backgroundColor= "hsl(216, 12%, 24%)"
    btn3.style.color= "hsl(217, 12%, 63%)"
    btn4.style.backgroundColor= "hsl(216, 12%, 24%)"
    btn4.style.color= "hsl(217, 12%, 63%)"
    btn5.style.backgroundColor= "hsl(216, 12%, 24%)"
    btn5.style.color= "hsl(217, 12%, 63%)"
})

btn2.addEventListener("click", function () {
    ratingValue= 2;
    btn2.style.backgroundColor= "hsl(217, 12%, 63%)"
    btn2.style.color= "white"
    btn1.style.backgroundColor= "hsl(216, 12%, 24%)"
    btn1.style.color= "hsl(217, 12%, 63%)"
    btn3.style.backgroundColor= "hsl(216, 12%, 24%)"
    btn3.style.color= "hsl(217, 12%, 63%)"
    btn4.style.backgroundColor= "hsl(216, 12%, 24%)"
    btn4.style.color= "hsl(217, 12%, 63%)"
    btn5.style.backgroundColor= "hsl(216, 12%, 24%)"
    btn5.style.color= "hsl(217, 12%, 63%)"
})

btn3.addEventListener("click", function () {
    ratingValue= 3;
    btn3.style.backgroundColor= "hsl(217, 12%, 63%)"
    btn3.style.color= "white"
    btn1.style.backgroundColor= "hsl(216, 12%, 24%)"
    btn1.style.color= "hsl(217, 12%, 63%)"
    btn2.style.backgroundColor= "hsl(216, 12%, 24%)"
    btn2.style.color= "hsl(217, 12%, 63%)"
    btn4.style.backgroundColor= "hsl(216, 12%, 24%)"
    btn4.style.color= "hsl(217, 12%, 63%)"
    btn5.style.backgroundColor= "hsl(216, 12%, 24%)"
    btn5.style.color= "hsl(217, 12%, 63%)"
})


btn4.addEventListener("click", function () {
    ratingValue= 4;
    btn4.style.backgroundColor= "hsl(217, 12%, 63%)"
    btn4.style.color= "white"
    btn1.style.backgroundColor= "hsl(216, 12%, 24%)"
    btn1.style.color= "hsl(217, 12%, 63%)"
    btn2.style.backgroundColor= "hsl(216, 12%, 24%)"
    btn2.style.color= "hsl(217, 12%, 63%)"
    btn3.style.backgroundColor= "hsl(216, 12%, 24%)"
    btn3.style.color= "hsl(217, 12%, 63%)"
    btn5.style.backgroundColor= "hsl(216, 12%, 24%)"
    btn5.style.color= "hsl(217, 12%, 63%)"
})


btn5.addEventListener("click", function () {
    ratingValue= 5;
    btn5.style.backgroundColor= "hsl(217, 12%, 63%)"
    btn5.style.color= "white"
    btn1.style.backgroundColor= "hsl(216, 12%, 24%)"
    btn1.style.color= "hsl(217, 12%, 63%)"
    btn2.style.backgroundColor= "hsl(216, 12%, 24%)"
    btn2.style.color= "hsl(217, 12%, 63%)"
    btn3.style.backgroundColor= "hsl(216, 12%, 24%)"
    btn3.style.color= "hsl(217, 12%, 63%)"
    btn4.style.backgroundColor= "hsl(216, 12%, 24%)"
    btn4.style.color= "hsl(217, 12%, 63%)"
})

submitBtn.addEventListener("click", function () {
    if (ratingValue === 0) {

    }

    else {
        ratingDiv.style.display = "none"
        thankYouDiv.style.display= "flex"
        const p = document.createElement("p")
        p.textContent= `You selected ${ratingValue} out of 5`
        p.classList.add("output")
        const h1 = document.querySelector(".thankYouh1")
       thankYouDiv.insertBefore(p,h1)
    }
 })




