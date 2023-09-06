const btn1 = document.getElementById('b1');
btn1.classList.add('style-b');
btn1.addEventListener('click', function() {
    document.body.classList.toggle('warna-green');
});

const btn2 = document.createElement('button');
btn2.setAttribute('type', 'button');
btn2.setAttribute('id', 'b2');
btn2.classList.add('style-b')
const textBtn2 = document.createTextNode('Warna Kotak');
btn2.appendChild(textBtn2);
btn1.after(btn2);

const ctn = document.querySelector('div.container');

btn2.addEventListener ('click', function() {
    const r = Math.round(Math.random()*255);
    const g = Math.round(Math.random()*255);
    const b = Math.round(Math.random()*255);
    ctn.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});

// Mengubah warna judul
const redSlider = document.querySelector('input[name="kMerah"]');
const greenSlider = document.querySelector('input[name="kHijau"]');
const blueSlider = document.querySelector('input[name="kBiru"]');

redSlider.addEventListener('input', function() {
    const r = redSlider.value;
    const g = greenSlider.value;
    const b = blueSlider.value;
    const judul = document.getElementsByTagName('h1')[0];
    judul.style.color = 'rgb('+r+','+g+','+b+')';
});

greenSlider.addEventListener('input', function() {
    const r = redSlider.value;
    const g = greenSlider.value;
    const b = blueSlider.value;
    const judul = document.getElementsByTagName('h1')[0];
    judul.style.color = 'rgb('+r+','+g+','+b+')';
});

blueSlider.addEventListener('input', function() {
    const r = redSlider.value;
    const g = greenSlider.value;
    const b = blueSlider.value;
    const judul = document.getElementsByTagName('h1')[0];
    judul.style.color = 'rgb('+r+','+g+','+b+')';
});

// Merubah warna layar dengan menggeser mouse

document.body.addEventListener('mousemove', function(event) {
    const xPos = Math.round((event.clientX/window.innerWidth)*255);
    const yPos = Math.round((event.clientY/window.innerWidth)*255);

    document.body.style.background = 'rgb('+xPos+','+yPos+',100)';
});
