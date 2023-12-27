import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "bottom-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  showCancelButton: true,
  cancelButtonColor: "#000000",
  cancelButtonText: "OK",
  cancelButtonAriaLabel: "Cancel button",
  focusCancel: false,
  inputAutoFocus: false,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const displayToast = (title, text, type = true) => Toast.fire({
  icon: type ? "success" : "error",
  title,
  text,
});

export const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

export const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

export const celsiusToKelvin = (celsius) => celsius + 273.15;

export const kelvinToCelsius = (kelvin) => kelvin - 273.15;

export const willRain = (weatherData) => weatherData && weatherData.rain && Object.values(weatherData.rain).some((value) => value > 0);
