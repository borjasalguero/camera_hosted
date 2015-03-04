window.onload = function() {
  var _videoStream;

  var videoPreviewElement;
  var buttonElement = document.getElementById('take-photo-button');

  navigator.mozGetUserMedia(
    {
      video: true,
      audio: false
    },
    function(stream) {
      _videoStream = stream.getVideoTracks()[0];
      videoPreviewElement = document.getElementById('photo-preview');

      videoPreviewElement.muted = true;
      videoPreviewElement.mozSrcObject = stream;
      videoPreviewElement.play();
    },
    function(error) {
      console.log('Error when taking picture');
    }
  );


  buttonElement.addEventListener(
    'click',
    function() {
      var imageCapturer = new ImageCapture(_videoStream);
      imageCapturer.onphoto = function(blobEvent, b) {
        document.getElementById('photo-taken').src = window.URL.createObjectURL(blobEvent.data);
        saveAs(blobEvent.data, "image.png");

        videoPreviewElement.classList.add('hidden');
        buttonElement.classList.add('hidden');
      };
      imageCapturer.takePhoto();
    }
  );
}
