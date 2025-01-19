// WIDGET
const header = document.getElementById('header');
const footer = document.getElementById('footer');

fetch('../template/header.html').then(function (snap) {
snap.text().then(function (result) {
if (header) {
header.innerHTML = result;
updateCartCount();
}
});
});
fetch('../template/footer.html').then(function (snap) {
snap.text().then(function (result) {
if (footer) {
footer.innerHTML = result;
}
});
});