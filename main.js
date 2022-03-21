const dropdDown = document.querySelector(".topdown");
const dropDownitems = document.querySelector(".more");
const burger = document.querySelector(".burger");
const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav-links")
const span = document.querySelector(".topdown span")
const l1= document.querySelector(".l1");
const l2 = document.querySelector(".l2");
const l3 = document.querySelector(".l3");
const year = document.querySelector("#year");
const days = document.querySelector(".days h3");
const hoursa = document.querySelector(".hours h3");
const Minutesa = document.querySelector(".minutes h3");
const secondsa = document.querySelector(".seconds h3");
const body = document.querySelector("body");
const register =document.querySelector(".register")
const heading = document.querySelector(".register-section-heading h3");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
dropdDown.addEventListener('click' ,()=>{
  dropDownitems.classList.toggle("display")
  dropdDown.classList.toggle("boxShadow");
  span.classList.toggle("topdown-span")
});
hamburger.addEventListener('click',()=>{
   l1.classList.toggle("transformBurger")
   l3.classList.toggle("transformBurger2")
   l2.classList.toggle("displayNone")
   navLinks.classList.toggle("transformx");
   body.classList.toggle("overflowY")
   register.classList.toggle("z-index");
  //  nextBtn.classList.toggle("z-index");
  //  prevBtn.classList.toggle("z-index");
})
function changeDate(){
 const currentYear =  new Date()
 const years = currentYear.getFullYear()
  year.innerText = years;
}
changeDate();
function timmer(){
  const EventTime = new Date("march 21,2022 00:00:00").getTime();
  const CurrentTime = new Date().getTime()
  const TimeLeft = EventTime-CurrentTime;
  if (TimeLef>CurrentTime) {
  const seconds = 1000
  const Minutes = seconds*60;
  const hours = Minutes*60;
  const Days = hours*24;
  const daysLeft = Math.floor(TimeLeft/Days)
  const hoursLeft = Math.floor((TimeLeft%Days)/hours)
  const minutesLeft = Math.floor((TimeLeft%hours)/Minutes)
  const secondsLeft = Math.floor((TimeLeft%Minutes)/seconds)
  days.innerText = daysLeft;
  hoursa.innerText = hoursLeft;
  Minutesa.innerText = minutesLeft;
  secondsa.innerText = secondsLeft;
 }
}
setInterval(timmer,1000)
const headingCarosoul1 = ()=>{
  heading.innerText = "AVISHKAR";
  // register.classList.toggle("opacity");
}
const headingCarosoul2 = ()=>{
  heading.innerText = "The most awaited event is here";
  register.classList.remove("opacity");
}
function Carosoul(){
  // setTimeout(headingCarosoul1,4000);
  setInterval(headingCarosoul2,5000);
  setInterval(headingCarosoul1,10000) 
}
Carosoul();
// setInterval(Carosoul ,5500)

let  currentincrement = 0;
nextBtn.addEventListener('click',()=>{
    currentincrement++;
   let count=currentincrement;
    if(count%2 === 0){
      headingCarosoul1();
    }                
    else{
      headingCarosoul2();
    }
  });
  prevBtn.addEventListener('click',()=>{
    currentincrement++;
   let count=currentincrement;
    console.log(count);
    if(count%2 === 0){
      headingCarosoul1();
    }                
    else{
      headingCarosoul2();
      
    }
  });
  const active =document.querySelectorAll(".dots li")
  const testcontent1 = document.querySelector(".mb1");
  const testcontent2 = document.querySelector(".mb3");
  const testcontent3 = document.querySelector(".mb2");
  // const testcontent1 = document.querySelector(".mb4");
  const testimg1 = document.querySelector(".testimg1");
  const testimg2 = document.querySelector(".testimg2");
  const testimg3 = document.querySelector(".testimg3");
  const testname1 = document.querySelector(".testimonial__name1")
  const testname2 = document.querySelector(".testimonial__name2")
  const testname3 = document.querySelector(".testimonial__name3")
  const testjob1 = document.querySelector(".testimonial__job1");
  const testjob2 = document.querySelector(".testimonial__job2");
  const testjob3 = document.querySelector(".testimonial__job3");
  function changetest1() {
    testcontent1.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
    testimg1.src = "https://source.unsplash.com/1600x1600/?water";
    testname1.innerText = "ABHIJT";
    active.forEach(element=>{
      element.classList.toggle("active");
    });
  }
  function changetest2() {
    testcontent2.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
    testimg2.src = "https://source.unsplash.com/1600x1600/?photo";
    testname2.innerText = "ABHIJT";
    active.forEach(element=>{
      element.classList.replace("active","notactive");
    });
  }
  function changetest3() {
    testcontent3.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
    testimg3.src = "https://source.unsplash.com/1600x1600/?profile";
    testname3.innerText = "ABHIJT";
    active.forEach(element=>{
      element.classList.toggle("active");
    });
  }
  function changetest11() {
    testcontent1.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
    testimg1.src = "https://source.unsplash.com/1600x1600/?water";
    testname1.innerText = "rayarao";
    active.forEach(element=>{
      element.classList.toggle("active");
    });
  }
  function changetest12() {
    testcontent2.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
    testimg2.src = "https://source.unsplash.com/1600x1600/?wildlife";
    testname2.innerText = "rayarao";
    active.forEach(element=>{
      element.classList.toggle("active");
    });
  }
  function changetest13() {
    testcontent3.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
    testimg3.src = "https://source.unsplash.com/1600x1600/?sky";
    testname3.innerText = "rayarao";
    active.forEach(element=>{
      element.classList.toggle("active");
    });
  }
  function changeTestmonies(){
    setInterval(changetest11,5000)
    setInterval(changetest12,5000)
    setInterval(changetest13,5000)
    setInterval(changetest1,10000)
    setInterval(changetest2,10000)
    setInterval(changetest3,10000)
    // changetest2();
    // changetest3();
  }
  changeTestmonies();
   // window.addEventListener('load',()=>{
  //   const p = document.createElement("p");
  //   p.innerText = "loading....."
  //   p.appendChild(nextBtn);
  // })

// function testChange() {
//   test.inner
// }