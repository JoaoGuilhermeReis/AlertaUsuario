
    const btnCamera = document.getElementById('btnCamera');
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const alertBox = document.getElementById('alert');
    const photoContainer = document.getElementById('photoContainer');
    const photo = document.getElementById('photo');
    const explanation = document.getElementById('explanation');

    btnCamera.addEventListener('click', async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        alertBox.style.display = 'block';
        video.style.display = 'block';
        explanation.style.display = 'block';
        photoContainer.style.display = 'block';
        btnCamera.disabled = true;
        btnCamera.textContent = "Câmera ativada";

        video.srcObject = stream;

      
        await new Promise(r => setTimeout(r, 2000));

        
        const width = video.videoWidth;
        const height = video.videoHeight;
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, width, height);

        
        const imageUrl = canvas.toDataURL('image/png');
        photo.src = imageUrl;

        
        stream.getTracks().forEach(track => track.stop());

        video.style.display = 'none';
      } catch (err) {
        alert('Permissão negada ou erro ao acessar a câmera.');
        console.error(err);
      }
    });
  

 /* separando aqui pae */

 window.addEventListener("load", () => {
  const track = document.getElementById("carouselTrack");
  const items = track.children;
  const gap = 20;
  let currentIndex = 0;

  function slideCarousel() {
    const itemWidth = items[0].offsetWidth;
    const offset = -(itemWidth + gap) * currentIndex;
    track.style.transform = `translateX(${offset}px)`;

    currentIndex++;

    // Resetar ao final
    if (currentIndex >= items.length) {
      currentIndex = 0;
    }
  }

  setInterval(slideCarousel, 3000);
});
