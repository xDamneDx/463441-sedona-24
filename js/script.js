var bookingForm = document.querySelector(".booking-form-wrapper");
var bookingBtn = document.querySelector(".booking-btn");

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
