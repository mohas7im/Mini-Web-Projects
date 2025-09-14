let qrBox = document.getElementById("qrbox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrtext");
let qrButton = document.getElementById("qrbutton");

function generateQR() {
  if (qrText.value === "") {
    alert("Enter the title for QR Code ");
  } else {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
  }
}

qrButton.addEventListener("click", generateQR);
document.addEventListener('keydown',function(event){
    if (event.keyCode == 13){
        qrButton.click();
    }
});
