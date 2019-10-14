window.addEventListener('load', () => {
    const map = document.querySelector('#road-map');
    const ctx = map.getContext('2d');

    // // Resize 
    // map.height = window.innerHeight;
    // map.width = window.innerWidth;

    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(30,30);
    ctx.strokeStyle= 'rgba(255 ,132 ,0 , 1)';
    ctx.lineWidth="20";
    ctx.stroke();

})

// export default roadMap 