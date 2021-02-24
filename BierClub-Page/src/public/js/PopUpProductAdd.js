function showToast() {
  var x = document.getElementById('toast');
  x.classList.add('showToast');
  setTimeout(function () {
    x.classList.remove('showToast');
  }, 3000);
}