document.addEventListener("DOMContentLoaded", () => {
 
 });
 function counter(id, start, end, duration) {
  let obj = document.getElementById(id),
   current = start,
   range = end - start,
   increment = end > start ? 1 : -1,
   step = Math.abs(Math.floor(duration / range)),
   timer = setInterval(() => {
    current += increment;
    obj.textContent = current;
    if (current == end) {
     clearInterval(timer);
    }
   }, step);
 }

let observer = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true)
 
   counter("count1", 0, 740, 1000);
   counter("count2", 0, 12, 1500);
   counter("count3", 0, 35, 1500);
   counter("count4", 0, 450, 1500);
}, { threshold: [0] });

observer.observe(document.querySelector(".counter-container"));