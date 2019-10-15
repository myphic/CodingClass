window.onload = () => {
    let about = document.getElementById('about');
    let content = document.getElementById('content');
    let count = 0;
    about.onclick = () => {
        count++;
        count%2 !== 0 ? content.style.display = 'block' : content.style.display = 'none';
    }
}