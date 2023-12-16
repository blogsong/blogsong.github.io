document.getElementById("send-contact").onclick = function () {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var country = document.getElementById('country');
    var subject = document.getElementById('subject');
    if (name.value < 1 || email.value < 1 || country.value < 1 || subject.value < 1) {
        alert('Jangan Kosong!');
    } else {
        window.open('mailto:iyortml@gmail.com?subject='+name.value+', '+country.value+'&body='+subject.value);
    }
};