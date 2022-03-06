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
  if (TimeLeft<CurrentTime) {
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