$(window).mousemove(function(e) {
    var xpos=e.clientX;
    var ypos=e.clientY;
    var  xpos=xpos*2;
    var ypos=ypos*2;
    $('.triangles-homepage').css('top',((0+(ypos/90))+"px"));
    $('.triangles-homepage').css('right',(( 0+(xpos/0))+"px"));
});
