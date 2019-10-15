window.addEventListener('load', () => {
    const map = document.querySelector('#road-map');
    const ctx = map.getContext('2d');
    const targetNode = [
        {x: 50, y: 50},
        {x: 120, y: 120},
        {x: 255, y: 160},
        {x: 360, y: 160},
        {x: 470, y:160},
        {x: 560, y: 235},
        {x: 560, y: 325}
    ]

    // // Resize 
    // map.height = window.innerHeight;
    // map.width = window.innerWidth;

    // Orange Path
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(160,160);
    ctx.lineTo(560,160);
    ctx.lineTo(560,410)
    ctx.strokeStyle= 'rgba(255 ,132 ,0 , 1)';
    ctx.lineWidth="8";
    ctx.stroke();

    // Yellow Path
    ctx.beginPath();
    ctx.moveTo(0,300);
    ctx.lineTo(162,167);
    ctx.lineTo(567,167);
    ctx.lineTo(567,407);
    ctx.strokeStyle= 'rgb(255, 191, 0)';
    ctx.lineWidth="8";
    ctx.stroke();

    targetNode.forEach(function(node){
        ctx.beginPath(node);
        ctx.arc(node.x, node.y, 10, 0, Math.PI * 2, false);
        ctx.fillStyle= '#FFFFFF';
        ctx.fill();
        ctx.strokeStyle= 'rgba(255 ,132 ,0 , 1)';
        ctx.stroke();
        return (node);
    });
})

// export default roadMap 