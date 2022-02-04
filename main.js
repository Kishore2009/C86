var canvas=new fabric.Canvas("My_canvas");
kishore_y=10;
kishore_x=10;
kishore_object="";
block_object="";
block_width=30;
block_height=30;
function playerupdate(){
fabric.Image.fromURL("player.png",function(Img){
kishore_object=Img;
kishore_object.scaleToWidth(140);
kishore_object.scaleToHeight(140);
kishore_object.set({
    top:kishore_y,
    left:kishore_x
});
canvas.add(kishore_object);
});
}
function blockupdate(get_image){
    fabric.Image.fromURL(get_image,function(Img){
    block_object=Img;
    block_object.scaleToWidth(block_width);
    block_object.scaleToHeight(block_height);
    block_object.set({
        top:kishore_y,
        left:kishore_x
    });
    canvas.add(block_object);
    });
    }