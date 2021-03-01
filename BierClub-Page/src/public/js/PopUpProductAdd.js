function showToast() {
  var toast = document.getElementById('toast');
  toast.classList.add('showToast');
  setTimeout(function () {
    toast.classList.remove('showToast');
  }, 3000);
}