import { initOtp } from "./otp.js";

document.getElementById("app").innerHTML = ``;

const otpContainer = document.querySelector("#otp");
const getValue = initOtp(otpContainer, 4, (value) => console.log(value));