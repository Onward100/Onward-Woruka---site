//NavBar - Hamburger menu
const hamburgerMenu = document.querySelector(".fa-bars");
const navMenu = document.querySelector(".nav-menu-overlay");
const closeMenu = document.querySelector(".close-menu");

hamburgerMenu.addEventListener("click", () =>{
  navMenu.style.transform = "translateX(0)";
})

closeMenu.addEventListener("click", () =>{
  navMenu.style.transform = "translateX(-2000px)";
})
document.body.addEventListener('touchstart',(e) => {
    if (!navMenu.contains(e.target)) {
      navMenu.style.transform = "translateX(-2000px)";
    }
    });
  const mobileNav = document.querySelectorAll(".mobile-link");
    mobileNav.forEach((item) =>{
      item.addEventListener('click', (e) =>{
        navMenu.style.transform = "translateX(-2000px)";
      });
  });

//Services Hover
const cardHover = document.querySelectorAll(".content-card");

cardHover.forEach((items) => {
  items.addEventListener("mouseover", () => {
    items.style.backgroundColor = "#0a0a2e";
    items.children[0].style.color = "white";
    items.children[1].style.color = "white";
    items.children[2].style.color = "white";
    items.children[3].style.color = "white";
  });
});
cardHover.forEach((items) => {
  items.addEventListener("mouseleave", () => {
    items.style.backgroundColor = "white";
    items.children[0].style.color = "#0a0a2e";
    items.children[1].style.color = "#0a0a2e";
    items.children[2].style.color = "#0a0a2e";
    items.children[3].style.color = "#22bec9";
  });
});

//FAQ 
const faq = document.querySelectorAll(".faq-ques-ans");        

//click and show answers
faq.forEach((addItem) =>{
  addItem.addEventListener("click", (e) =>{
    addItem.children[1].style.display = "block";
    addItem.children[0].children[1].style.display = "none";
    addItem.children[0].children[2].style.display = "block";
   
    // addItem.previousElementSibling.style.display = "none";
  });
});


//click and hide answers
// faq.forEach((removeItem) =>{
//   removeItem.addEventListener("click", () =>{
//     removeItem.children[1].style.display = "none";
//     removeItem.children[0].children[1].style.display = "block";
//     removeItem.children[0].children[2].style.display = "none";
   
//     // addItem.previousElementSibling.style.display = "none";
//   });
//   });

//Email validation
const fullName = document.getElementById("fullname");
const email = document.getElementById("email_id");
const message = document.getElementById("message");
const number = document.getElementById("number");
const sendMail = document.getElementById("send-mail");
const errSuccess = document.getElementById("error-success");

sendMail.addEventListener("click", (e) =>{
  if(fullName.value === "" & email.value === "" & message.value === "" & number.value === ""){
    errSuccess.style.display = "block";
    errSuccess.innerHTML = "Input fields can't be empty!";
    errSuccess.style.color = "red";
    errSuccess.style.border = "1px solid red";
    errSuccess.style.backgroundColor = "white";
    setTimeout((e)=>{
      errSuccess.style.display = "none";
    }, 3000);
  }else{
    errSuccess.style.display = "block";
    errSuccess.innerHTML = "Message sent!";
    errSuccess.style.color = "green";
    errSuccess.style.border = "1px solid green";
    errSuccess.style.backgroundColor = "white";
    setTimeout((e)=>{
      errSuccess.style.display = "none";
    }, 3000);
    fullName.value = '';
    number.value = '';
    message.value = '';
    email.value = '';
  }
//   console.log("click");
 e.preventDefault();
});

