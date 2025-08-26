function Play(){
            //lay kich thuoc hien tai cua khung
            let frameW = $("#frame").width();
            let frameH = $("#frame").height();

            //lay vi tri hien tai cua hinh
            let  ballLeft = parseInt($("#ball").css("left"));
            let ballTop = parseInt($("#ball").css("top"));
            //kiem tra cac bien

            /*ballLeft < 0 (Kiem tra xem phan trai cua qua qua bong co nam ngoai
                            bien trai cua khung chua khong)*/

            /*(ballLeft+ballWidth)>=frameW ( Kiem tra phan phai cua qua bong co
                                            nam vuot qua bien phai khung chua khong*/

            if(ballLeft < 0 || (ballLeft+ballWidth)>=frameW){
                dx = -dx; //dung bien trai phai
            }
            /*ballTop <= 0 : kiem tra phan tren qua bong co cham vao bien
                            tren cua khung chua khong*/
            /*(ballTop + ballHeight) > frameH: Kiem tra phan duoi qua bong
                                    co vuot qua bien duoi cua khung khong*/
            if(ballTop <= 0 || (ballTop + ballHeight) > frameH){
                dy = -dy; // dung bien tren duoi
            }
            //cap nhat vi tri hinh
            $("#ball").css("left",ballLeft+dx+"px");
            $("#ball").css("top",ballTop+ dy +"px");
        }