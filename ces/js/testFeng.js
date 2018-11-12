$(function(e){
    var mouseX;
    setInterval(() =>{
        moveDown(mouseX);
    },50)

})
// 自由落体
function moveDown(divX){
    
    // 随机桃心的速度
    let randomY = randomNum(3,6);
    let image = creat();
    let imgY = image.offset().top;
    var opacity = Math.random();
    
    
    var t = setInterval(()=> {
        imgY+=randomY;
        // 设置元素高度
        image.css({'top':imgY+ 'px','opacity':opacity});
        if(imgY > $(window).height()){
            //当到达底部时必须清楚定时器，如不清楚当前元素会继续设置css
            clearInterval(t);
            // 再清楚元素
            image.remove();
        }
    },10)
    
}
// 创建桃心
var creat = () => {
    let img_l = randomNum(0,$(window).width());
    var div = $(`<img src="img/heart.png" style="left:${img_l}px">`);
    $('#piao').append(div);
    return div
}
function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
} 