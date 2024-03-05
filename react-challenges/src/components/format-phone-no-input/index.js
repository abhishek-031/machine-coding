import { useState } from "react";
import { formatPhoneNo } from "./util";


export default function FormatPhoneNoInput() {
  const [phoneNo, setPhoneNo] = useState("");
  const [formattedPhoneNo, setFormattedPhoneNo] = useState("");

  function onPhoneNoChange(e) {
    let number = e.key;
    let isBackspace = number === "Backspace";
    let newPhoneNumber;
    if (!/[0-9]/.test(number) && !isBackspace) return;
    if (isBackspace) {
      newPhoneNumber = phoneNo.substring(0, phoneNo.length - 1);
    } else {
      if (phoneNo.length >= 10) return;
      newPhoneNumber = phoneNo + number;
    }
    setPhoneNo(newPhoneNumber);
    setFormattedPhoneNo(formatPhoneNo(newPhoneNumber));
  }

  return (
    <div>
      <label htmlFor="phone">Phone</label>
      <input
        onKeyDown={onPhoneNoChange}
        value={formattedPhoneNo}
        type="text"
        id="phone"
      />
    </div>
  );
}
