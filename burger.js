
const menuBtn  = document.querySelector('.burger');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
   if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
   } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
   }
   

});
const toggleButton = document.querySelector ('.burger')
const navbarLinks = document.querySelector ('.ultag')

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle ('active')
})




// darktheme

   function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    
    // Check if the user has set a theme preference before
    if (localStorage.getItem("theme") === "dark") {
      // If the preference was set to dark, remove it
      localStorage.removeItem("theme");
    } else {
      // Otherwise, set the preference to dark
      localStorage.setItem("theme", "dark");
    }
  }
  
  // When the page loads, check if the user has set a theme preference before
  if (localStorage.getItem("theme") === "dark") {
    // If the preference was set to dark, enable the dark mode
    document.body.classList.add("dark-mode");
  }
  