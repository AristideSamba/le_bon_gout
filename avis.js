const btn = document.getElementById('btn-avis');
const post = document.querySelector('.post');
const widget = document.querySelector('.star-widget');
const editBtn = document.querySelector('.edit');


btn.addEventListener('click', (event) => {
    event.preventDefault();
    btn.onclick = () => {
        widget.style.display = "none";
        post.style.display = "block";
        editBtn.onclick = () => {
            widget.style.display = "block";
            post.style.display = "none";    
        }
        
    }
    
});

