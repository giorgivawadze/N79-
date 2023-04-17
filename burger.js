const menuBtn = document.querySelector(".burger");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});

// Fix: Remove duplicate const declaration for toggleButton
const toggleButton = document.querySelector(".burger");
const navbarLinks = document.querySelector(".ultag");
// const toggleBtn = document.querySelector('.sidebar');
// const mainDiv = document.querySelector('.header');

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
}); // Fix: Add missing closing parenthesis

// toggleBtn.addEventListener('click', () => {
//   mainDiv.classList.toggle('active');
// }); // Fix: Remove extra closing parenthesis





// darktheme
function myFunction3() {
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
// document ready handler
// or $(document).ready(Function(){...
jQuery(function ($) {
  var checkboxValue = JSON.parse(localStorage.getItem("checkboxValue")) || {};
  var $checkbox = $("#checkbox-container :checkbox");

  $checkbox.on("change", function () {
    $checkbox.each(function () {
      checkboxValue[this.id] = this.checked;
    });
    localStorage.setItem("checkboxValue", JSON.stringify(checkboxValue));
  });

  //on page load
  $.each(checkboxValue, function (key, value) {
    $("#" + key).prop("checked", value);
  });
});
const paginationNumbers = document.getElementById("pagination-numbers");
const paginatedList = document.getElementById("paginated-list");
const listItems = paginatedList.querySelectorAll("li");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

const paginationLimit = 6;
const pageCount = Math.ceil(listItems.length / paginationLimit);
let currentPage = 1;

const disableButton = (button) => {
  button.classList.add("disabled");
  button.setAttribute("disabled", true);
};

const enableButton = (button) => {
  button.classList.remove("disabled");
  button.removeAttribute("disabled");
};

const handlePageButtonsStatus = () => {
  if (currentPage === 1) {
    disableButton(prevButton);
  } else {
    enableButton(prevButton);
  }

  if (pageCount === currentPage) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
};

const handleActivePageNumber = () => {
  document.querySelectorAll(".pagination-number").forEach((button) => {
    button.classList.remove("active");
    const pageIndex = Number(button.getAttribute("page-index"));
    if (pageIndex == currentPage) {
      button.classList.add("active");
    }
  });
};

const appendPageNumber = (index) => {
  const pageNumber = document.createElement("button");
  pageNumber.className = "pagination-number";
  pageNumber.innerHTML = index;
  pageNumber.setAttribute("page-index", index);
  pageNumber.setAttribute("aria-label", "Page " + index);

  paginationNumbers.appendChild(pageNumber);
};

const getPaginationNumbers = () => {
  for (let i = 1; i <= pageCount; i++) {
    appendPageNumber(i);
  }
};

const setCurrentPage = (pageNum) => {
  currentPage = pageNum;

  handleActivePageNumber();
  handlePageButtonsStatus();

  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;

  listItems.forEach((item, index) => {
    item.classList.add("hidden");
    if (index >= prevRange && index < currRange) {
      item.classList.remove("hidden");
    }
  });
};

window.addEventListener("load", () => {
  getPaginationNumbers();
  setCurrentPage(1);

  prevButton.addEventListener("click", () => {
    setCurrentPage(currentPage - 1);
  });

  nextButton.addEventListener("click", () => {
    setCurrentPage(currentPage + 1);
  });

  document.querySelectorAll(".pagination-number").forEach((button) => {
    const pageIndex = Number(button.getAttribute("page-index"));

    if (pageIndex) {
      button.addEventListener("click", () => {
        setCurrentPage(pageIndex);
      });
    }
  });
});

function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
}

function togglePopup2() {
  document.getElementById("popup-2").classList.toggle("active");
}

function togglePopup3() {
  document.getElementById("popup-2").classList.toggle("active");
}

function togglePopup4() {
  document.getElementById("popup-4").classList.toggle("active");
}

function togglePopup5() {
  document.getElementById("popup-5").classList.toggle("active");
}

function togglePopup6() {
  document.getElementById("popup-6").classList.toggle("active");
}

function togglePopup7() {
  document.getElementById("popup-7").classList.toggle("active");
}

function togglePopup8() {
  document.getElementById("popup-8").classList.toggle("active");
}

function togglePopup9() {
  document.getElementById("popup-9").classList.toggle("active");
}

function togglePopup10() {
  document.getElementById("popup-10").classList.toggle("active");
}

function togglePopup11() {
  document.getElementById("popup-11").classList.toggle("active");
}
function togglePopup12() {
  document.getElementById("popup-12").classList.toggle("active");
}

// gallery

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

// gallery end
