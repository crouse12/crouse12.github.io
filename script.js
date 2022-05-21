const video = document.getElementById("video");

tt()

anync function tt(){
    awit faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
    awit faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    awit faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    awit faceapi.nets.faceExpressionNet.loadFromUri('/models')
    const canvas = faceapi.createCanvasFromMedia(video);
    document.body.append(canvas);

    const displaySize = { width : video.width, height : video.height}
    faceapi.matchDimensions(canvas,displaySize);
    setInterval(async () => {
        const detections = await faceapi.detectAllFaces(video,
            new faceapi.TinyFaceDetectorOptions())
            .withFaceLandmarks()
            .withFaceExpressions()
            console.log(detections)
            const resizedDetections = faceapi.resizeResults(detections,displaySize);
            canvas.getContext('2d').clearRect(0,0,canvas.width,canvas.height);
            faceapi.draw.drawDetections(canvas,resizedDetections);
            faceapi.draw.drawFaceLandmarks(canvas,resizedDetections);
            faceapi.draw.drawFaceExpressions(canvas,resizedDetections);
    },1000);
}
