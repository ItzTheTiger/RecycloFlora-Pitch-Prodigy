const magneto = document.querySelector('.magneto')
const magnetoText = document.querySelector('.magneto .text')
const dbgr = document.querySelector('#debugger')

const activateMagneto = (event) => {
    let boundBox = magneto.getBoundingClientRect()
    const magnetoStrength = 50
    const magnetoTextStrength = 60
    const newX = ((event.clientX - boundBox.left) / magneto.offsetWidth) - 0.5
    const newY = ((event.clientY - boundBox.top) / magneto.offsetHeight) - 0.5
    gsap.to(magneto, {
        duration: 1,
        x: newX * magnetoStrength,
        y: newY * magnetoStrength,
        ease: Power4.easeOut
    })
    gsap.to(magnetoText, {
        duration: 1,
        x: newX * magnetoTextStrength,
        y: newY * magnetoTextStrength,
        ease: Power4.easeOut
    })
}

const resetMagneto = (event) => {
    gsap.to(magneto, {
        duration: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut
    })
    gsap.to(magnetoText, {
        duration: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut
    })
}

magneto.addEventListener('mousemove', activateMagneto);
magneto.addEventListener('mouseleave', resetMagneto);


const toTop = document.querySelector(".gotopbtn")

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    }
    else {
        toTop.classList.remove("active")
    }
})


const selectBtn = document.querySelector(".selectBtn"),
    items = document.querySelectorAll(".items");

selectBtn.addEventListener("click", () => {
    selectBtn.classList.toggle("open");
})

items.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");

        let checked = document.querySelectorAll(".checked"),
            btnText = document.querySelector(".btnText");

        if (checked && checked.length > 0) {
            btnText.innerText = `${checked.length} Selected`
        } else {
            btnText.innerText = "Select Products You Sell"
        }
    })
})

const submitBtn = document.querySelector(".btn");

submitBtn.addEventListener("click", () => {
    alert("Submitted!")
})

const scriptURL = 'https://script.google.com/macros/s/AKfycbw3AP5JZy0xg4MQtBXGyP8bjtbGfh9dcXjlrFIwuyoTuS3tsLXJZzCs_OINy2t_Wz6v/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
})


function submitForm(event, type) {
    event.preventDefault();

    let isFormValid = true;
    if (type === 'organization') {
        const orgName = document.getElementById('orgName').value.trim();
        const orgEmail = document.getElementById('orgEmail').value.trim();
        const orgFlowers = document.getElementById('orgFlowers').value.trim();

        if (!orgName || !orgEmail || !orgFlowers) {
            isFormValid = false;
        }
    } else if (type === 'user') {
        const userName = document.getElementById('userName').value.trim();
        const userEmail = document.getElementById('userEmail').value.trim();
        const userFlowers = document.getElementById('userFlowers').value.trim();

        if (!userName || !userEmail || !userFlowers) {
            isFormValid = false;
        }
    }

    if (!isFormValid) {
        alert("Please fill out all required fields.");
        return; // Prevent form submission if any field is empty
    }
}

// Mouse Follow Effect

// const coords = { x: 0, y: 0 };
// const circles = document.querySelectorAll(".circle");

// circles.forEach(function (circle) {
//     circle.x = 0
//     circle.y = 0
// });

// window.addEventListener("mousemove", function (e) {
//     coords.x = e.clientX;
//     coords.y = e.clientY;
//     animateCircles();
// });

// function animateCircles() {
//     let x = coords.x;
//     let y = coords.y;
//     circles.forEach(function (circle, index) {
//         circle.style.left = x - 12 + "px";
//         circle.style.top = y - 12 + "px";

//         circle.x = x
//         circle.y = y
//         const nextCircle = circles(index + 1) || circles[0];
//         x += (nextCircle.x - x) * 0.5;
//         y += (nextCircle.y - y) * 0.5;

//     })
// }

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
    "#ffb56b",
    "#fdaf69",
    "#f89d63",
    "#f59761",
    "#ef865e",
    "#ec805d",
    "#e36e5c",
    "#df685c",
    "#d5585c",
    "#d1525c",
    "#c5415d",
    "#c03b5d",
    "#b22c5e",
    "#ac265e",
    "#9c155f",
    "#950f5f",
    "#830060",
    "#7c0060",
    "#680060",
    "#60005f",
    "#48005f",
    "#3d005e"
];

circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;

});

function animateCircles() {

    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
}

animateCircles();


// Scroll Reveal
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.homeContent, .head , .workHead, .productHead', { origin: 'top' });
ScrollReveal().reveal('.content, .aimCt, .wrapper , .workCt', { origin: 'bottom' });
