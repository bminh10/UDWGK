$(document).ready(function(){
            $("button#dangky").click(function(){
                event.preventDefault();
                let hoten = $("input#hoten").val();
                let email = $("input#email").val();
                let sl = parseInt($("input#number").val());
                console.log(sl);
                let d = $("input#date").val();
                console.log(d);
                let tt = $("input[name='chose']:checked").val();
                console.log(tt);
                let dd=d.substr(0,3);
                console.log(dd);
                let mm=d.substr(3,3);
                console.log(mm);
                let yy=d.substr(6);
                console.log(yy);
                let span="";
                let flag = false;
                for(let i = 0 ; i < email.length ; i++){
                    if(email[i]=='@'){
                        flag = true;
                    }

                }

                let kiemtra = true;
                if(hoten==""){
                    span += "<span>" + "Họ không được để trống" + "</span>" + "<br>";
                    kiemtra=false;
                }
                if(isNaN(sl) || sl < 0){
                    span += "<span>" + "Số lượng không được để trống và phải lớn hơn 0" + "</span>" + "<br>";
                    kiemtra=false;
                }
                if(d ==="" ){
                    span += "<span>" + "Ngày không được để trống" + "</span>" + "<br>";
                    kiemtra=false;
                }
                else if( parseInt(dd) < 1 || parseInt(dd)  > 31 || dd[2] !="/" || parseInt(mm) < 1 || parseInt(mm) > 12 || mm[2]!="/" || parseInt(yy) < 1 || parseInt(yy) >9999 ){
                   kiemtra=false;
                }
                if(tt==undefined){
                    span+= "<span>" + "Bạn phải chọn một kiểu thanh toán" + "</span>";
                    kiemtra=false;
                }

                if(kiemtra==true && flag == true){
                    $("#myform").submit();
                }
                else if(kiemtra==false && flag == false){
                    $("span#res").html(span).css("text-align","center");
                }


                console.log(span);
                
            });
            /*$("button#xoa").click(function(){
               $("input#hoten").val("");
                $("input#email").val("");
                $("input#number").val("");
                $("input#date").val("");
                $("input[name='chose']:checked").val(undefined);
                
            });*/

            $("button#quayso").click(function(){
                $("div.so1>h1").text(Math.round(Math.random()*100)%10);
                $("div.so2>h1").text(Math.round(Math.random()*100)%10);
                $("div.so3>h1").text(Math.round(Math.random()*100)%10);

                
                let val1 = $("div.so1 > h1").text();
                console.log(val1);
                let val2 = $("div.so2 > h1").text();
                let val3 = $("div.so3 > h1").text();
                let sum = 0;
                sum = parseInt(val1)+parseInt(val2)+parseInt(val3);
                $("p#kq").text(sum).css({color:"red",fontSize:"30px"});

            });

            $("button#quayso2").click(function(){
                let so1 = new String(Math.round(Math.random()*100)%5+1);
                let so2 = new String(Math.round(Math.random()*100)%5+1);
                let so3 = new String(Math.round(Math.random()*100)%5+1);
                
                $("div.so1>img").attr("src", "picture/" + so1  + ".png")
                $("div.so2>img").attr("src", "picture/" + so2  + ".png")
                $("div.so3>img").attr("src", "picture/" + so3  + ".png")
                console.log(parseInt(so1));
                console.log(so2);
                console.log(so3);
                let sum = 0;
                sum = parseInt(so1)+parseInt(so2)+parseInt(so3);
                
                console.log(sum)
                $("p#kq2").text(sum).css({color:"red",fontSize:"30px"});

            });


        });