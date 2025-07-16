// Toggle Sidebar
document.getElementById('toggle-sidebar').addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
});

// Close Sidebar
document.getElementById('sidebar-close').addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

// Close Language Modal
document.getElementById('language-close').addEventListener('click', () => {
    document.getElementById('language-modal').style.display = 'none';
});

// Open Language Modal
document.getElementById('language-select').addEventListener('click', () => {
    document.getElementById('language-modal').style.display = 'block';
});

// Emergency Alert
document.getElementById('emergency-alert').addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            alert(`Emergency Alert!\nLocation: https://maps.google.com/?q=${latitude},${longitude}`);
        }, () => {
            alert('Unable to retrieve your location.');
        });
    } else {
        alert('Geolocation is not supported by this browser.');
    }
});

// Start Camera
document.getElementById('start-camera').addEventListener('click', () => {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
            const video = document.createElement('video');
            video.srcObject = stream;
            video.autoplay = true;
            document.body.appendChild(video);
        })
        .catch((error) => {
            alert('Error accessing the camera: ' + error.message);
        });
});

// Language Selector
document.getElementById('language-submit').addEventListener('click', () => {
    const selectedLanguage = document.getElementById('language-select').value;
    alert(`Language selected: ${selectedLanguage}`);
});