const inner = document.getElementById('innercheckbox')
const circle = document.getElementById('circle');
// let text = circle.innerHTML;
// console.log(text);
function toggle() {
    if (circle.innerHTML == "OFF")
    {
        inner.classList.add('active');
        circle.innerHTML = "ON";
    }
    else {
        inner.classList.remove('active');
        circle.innerHTML = "OFF";
    }
}
