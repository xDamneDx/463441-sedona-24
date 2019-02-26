var bookingForm = document.querySelector(".booking-form-wrapper");
var bookingBtn = document.querySelector(".booking-btn");
var inputFirst = bookingForm.querySelector("#check-in");
var inputSecond = bookingForm.querySelector("#check-out");

bookingForm.classList.remove("booking-form-show");

bookingBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (bookingForm.classList.contains("booking-form-show")) {
    bookingForm.classList.remove("booking-form-show");
    bookingForm.classList.add("booking-form-hide");
  } else if (bookingForm.classList.contains("booking-form-hide")) {
    bookingForm.classList.remove("booking-form-hide");
    bookingForm.classList.add("booking-form-show");
  } else {
    bookingForm.classList.add("booking-form-show");
  }
});

bookingForm.addEventListener('submit', function(evt) {
  bookingForm.classList.remove("on-error");
  bookingForm.offsetWidth = bookingForm.offsetWidth;
  if (inputFirst.value === "" || inputSecond.value === "") {
    evt.preventDefault();
    bookingForm.classList.add("on-error");
  }
})
