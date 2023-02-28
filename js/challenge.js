document.addEventListener('DOMContentLoaded', (e) => {
    
    const likes = [];
    const counter = document.getElementById('counter')
    setInterval(() => {
        if (!pagePaused)
            counter.textContent = ++counter.innerText
    },1000);

    //declaring varialbes
    const likeContainer = document.querySelector('ul')
    const minusButton = document.getElementById('minus')
    const plusButton = document.getElementById('plus')
    const pauseButton = document.getElementById('pause')
    const likeButton = document.getElementById('heart')
    const comments = document.getElementById('comment-form')
    const commentInput = document.getElementById('comment-input')
    let pagePaused = false;
    
    //adding the eventListeners
    minusButton.addEventListener('click', (e) => {
        counter.textContent = --counter.innerText
    });

    plusButton.addEventListener('click', (e) => {
        counter.textContent = ++counter.innerText
    });

    likeButton.addEventListener('click', (e) => {
        const currentNumber = counter.textContent
        const numOfLikes = document.getElementById('like-number' + currentNumber)
        if (numOfLikes === undefined || numOfLikes === null) {
            const newLike = document.createElement('li')
            likes[currentNumber] = 1
            newLike.setAttribute('id', 'like-number' + currentNumber)
            newLike.textContent = currentNumber + ' was liked ' + likes[currentNumber] + ' times '
            likeContainer.appendChild(newLike)
        } else {
            likes[currentNumber]++;
            numOfLikes.textContent = numOfLikes.textContent = currentNumber + ' was liked ' + likes[currentNumber] + ' times '
        }
    });

    pauseButton.addEventListener('click', (e) => {
        const allButtons = document.querySelectorAll('button')
        if (!pagePaused) {
            pagePaused = true;
            e.target.textContent = 'resume'
            allButtons.forEach(el => {
                if (el.id != 'pause')
                    el.disabled = true
            })
        } else {
            e.target.textContent = 'pause'
            pagePaused = false;
            allButtons.forEach(el => {
                el.disabled = false;
            })
        }
    });

    comments.addEventListener('submit', (e) => {
        e.preventDefault()
        const newComment = document.createElement('p')
        newComment.textContent = commentInput.value
        comments.appendChild(newComment)
        e.target.reset()
    });
});
