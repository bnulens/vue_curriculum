window.addEventListener('load', () => {
    const map = document.querySelector('#road-map');
    const ctx = map.getContext('2d');
    const targetNode = [
        {x: 50, y: 50, radius: 10, start:0},
        {x: 120, y: 120, radius: 10, start:0},
        {x: 225, y: 160, radius: 10, start:0},
        {x: 330, y: 160, radius: 10, start:0}
    ]

    // // Resize 
    // map.height = window.innerHeight;
    // map.width = window.innerWidth;

    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(160,160);
    ctx.lineTo(560,160);
    ctx.lineTo(820,320)
    ctx.strokeStyle= 'rgba(255 ,132 ,0 , 1)';
    ctx.lineWidth="8";
    ctx.stroke();

    targetNode.forEach(function(e){
        ctx.beginPath(e);
        ctx.arc(e.x, e.y, e.radius, e.start, Math.PI * 2, false);
        ctx.fillStyle= '#FFFFFF';
        ctx.fill();
        ctx.stroke();
        return (e);
    });
})

// export default roadMap 