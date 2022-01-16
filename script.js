let count = 1;
let text = document.getElementById('text');
    let checkbox = document.getElementById('checkbox');
    let circle = document.getElementById('circle');
function toggle()
{
    circle.style.animationIterationCount = count;
    if (text.innerHTML == "OFF")
    {
        text.innerHTML = 'ON';
        checkbox.style.backgroundColor = '#4ee44e';
        text.style.color = '#4ee44e';
        

    }
    else{
        text.innerHTML = 'OFF';
        checkbox.style.backgroundColor = '#9a9a9a';
        text.style.color = '#9a9a9a';
    }
    count++;
}
console.log('Sleek Checkbox');