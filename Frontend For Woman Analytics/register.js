document.addEventListener('DOMContentLoaded', async () => {
    const model = await blazeface.load();
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const feedback = document.getElementById('video-feedback');
    const instructions = document.getElementById('instructions');

    async function startVideo() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            video.srcObject = stream;
            video.onloadedmetadata = () => {
                video.play();
            };
        } catch (error) {
            console.error('Error accessing webcam:', error);
            alert('Error accessing webcam. Please ensure you have granted camera permissions.');
        }
    }

    async function detectFace() {
        if (video.readyState >= 2) {
            try {
                const predictions = await model.estimateFaces(video, false);
                
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                feedback.style.display = 'block';

                if (predictions.length > 0) {
                    feedback.style.border = '2px dashed green'; // Update visual feedback
                    predictions.forEach(prediction => {
                        const [x1, y1] = prediction.topLeft;
                        const [x2, y2] = prediction.bottomRight;
                        ctx.beginPath();
                        ctx.rect(x1, y1, x2 - x1, y2 - y1);
                        ctx.lineWidth = 2;
                        ctx.strokeStyle = 'red';
                        ctx.stroke();
                        ctx.closePath();
                    });
                    instructions.textContent = 'Great! Now adjust the angle and position your face in the frame for additional captures.';
                } else {
                    feedback.style.border = '2px dashed red'; // Update visual feedback
                    instructions.textContent = 'No face detected. Please ensure your face is visible within the frame.';
                }
            } catch (error) {
                console.error('Error detecting face:', error);
            }
        }
    }

    document.getElementById('capture').addEventListener('click', () => {
        detectFace();
    });

    // Initialize video
    startVideo();
});
