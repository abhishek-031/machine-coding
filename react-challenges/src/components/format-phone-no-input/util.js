function formatPhoneNo(phNo) {
  console.log(phNo);
  let formattedPhoneNo = "";
  if (phNo.length < 4) formattedPhoneNo = phNo;
  if (phNo.length >= 4) {
    formattedPhoneNo = `(${phNo.substring(0, 4)})`;
  }
  if (phNo.length > 4) {
    formattedPhoneNo += `-${phNo.substring(4, 7)}`;
  }
  if (phNo.length > 7) {
    formattedPhoneNo += `-${phNo.substring(7, 10)}`;
  }
  return formattedPhoneNo;
}

export { formatPhoneNo };
