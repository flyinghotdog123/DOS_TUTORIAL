// 엠블렘
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
function toggleVideo() {
    const videoContainer = document.getElementById('videoContainer');
    const videoButton = document.getElementById('videoButton');
    const videoFrame = document.getElementById('videoFrame');
    const videoSrc = videoButton.getAttribute('data-video-src');
    
    if (videoContainer.style.display === 'none' || videoContainer.style.display === '') {
        videoContainer.style.display = 'block';
        videoFrame.src = videoSrc;
        videoButton.classList.add('active');
    } else {
        videoContainer.style.display = 'none';
        videoFrame.src = '';
        videoButton.classList.remove('active');
    }
}

function toggleVideo(videoId, buttonElement, youtubeId) {
    const selectedContainer = document.getElementById(videoId);
    const selectedFrame = document.getElementById(videoId + '-frame');
    const isCurrentlyVisible = selectedContainer.style.display === 'block';

    const containers = document.getElementsByClassName('video-container');
    const buttons = document.getElementsByClassName('button');
    const iframes = document.getElementsByTagName('iframe');
    
    // iframes 리셋
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

document.addEventListener('DOMContentLoaded', insertDOSEmblem);