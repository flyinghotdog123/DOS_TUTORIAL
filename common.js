// DOS 엠블럼
function insertDOSEmblem() {
    const emblemLink = document.createElement('a');
    emblemLink.href = 'https://online.dge.sc.kr/';
    emblemLink.target = '_blank';

    const emblemImage = document.createElement('img');
    emblemImage.src = 'https://raw.githubusercontent.com/flyinghotdog123/DOS_TUTORIAL/refs/heads/main/DOS_EMBLEM.png';
    emblemImage.alt = 'DOS Emblem';
    emblemImage.className = 'background-image';

    emblemLink.appendChild(emblemImage);
    document.body.insertBefore(emblemLink, document.body.firstChild);
}

// 비디오 토글
function toggleVideo(videoId, buttonElement, youtubeId) {
    const selectedContainer = document.getElementById(videoId);
    const selectedFrame = document.getElementById(videoId + '-frame');
    const isCurrentlyVisible = selectedContainer.style.display === 'block';

    const containers = document.getElementsByClassName('video-container');
    const buttons = document.getElementsByClassName('button');
    const iframes = document.getElementsByTagName('iframe');
    
    for (let container of containers) {
        container.style.display = 'none';
    }
    
    for (let iframe of iframes) {
        iframe.src = '';
    }
    
    for (let button of buttons) {
        button.classList.remove('active');
    } 
    
    if (!isCurrentlyVisible) {
        selectedContainer.style.display = 'block';
        selectedFrame.src = `https://www.youtube.com/embed/${youtubeId}`;
        buttonElement.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    insertDOSEmblem();

    const preventDrag = (e) => {
        if (e.type === 'touchmove') {
            e.preventDefault();
            e.stopPropagation();
        }
    };

    const h1Elements = document.getElementsByTagName('h1');
    const imgElements = document.getElementsByClassName('background-image');
    const buttonElements = document.getElementsByClassName('button');

    for(let el of h1Elements) {
        el.addEventListener('touchstart', preventDrag, {passive: false});
        el.addEventListener('touchmove', preventDrag, {passive: false});
        el.addEventListener('touchend', preventDrag, {passive: false});
    }

    for(let el of imgElements) {
        el.addEventListener('touchmove', preventDrag, {passive: false});
    }

    for(let el of buttonElements) {
        el.addEventListener('touchmove', preventDrag, {passive: false});
    }
});

document.addEventListener('contextmenu', function(e) {
    if(e.target.classList.contains('background-image') || 
       e.target.tagName === 'H1' || 
       e.target.classList.contains('button')) {
        e.preventDefault();
    }
});