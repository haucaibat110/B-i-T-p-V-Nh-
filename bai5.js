
    let day = prompt("Nhập ngày");
    let month = prompt("Nhập tháng");
    let year = prompt("Nhập năm");

 
  
    if((month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12)){
       
        if(day == 1 || day == 31 ){
            console.log(day + "/" + month + "/" + year + " Đây là ngày hợp lệ")
        
        }else{
            console.log(day + "/" + month + "/" + year + " Đây là ngày không hợp lệ")
        }

        if(day == 31){
            day = 1;
            month = 1;
            console.log(day + "/" + month + "/" + year + " Đây là ngày tiếp theo")
        }
    }
    

    else if( month==4 || month==6 || month==9 || month==11){
        if(day == 1 || day == 30){
            console.log(day + "/" + month + "/" + year + " Đây là ngày hợp lệ");
        }else{
            console.log(day + "/" + month + "/" + year + " Đây là ngày không hợp lệ")
        }
        
        if(day == 30){
            day = 1;
            month = month + 1;
            console.log(day + "/" + month + "/" + year + " Đây là ngày tiếp theo")
        }
    }
    
    else{
        if(month == 2){
            if(year%4 == 0 && year%100 != 0 || year%400 == 0){
                if(day == 29){
                    console.log(day + "/" + month + "/" + year + " Đây là ngày hợp lệ")
                }else{
                    console.log(day + "/" + month + "/" + year + " Đây là ngày không hợp lệ")
                }

                if(day == 29){
                    day = day + 1;
                    console.log(day + "/" + month + "/" + year + " Đây là ngày tiếp theo")
                }

            }
                if(day == 28){
                    console.log(day + "/" + month + "/" + year + " Đây là ngày hợp lệ")
                }else{
                    console.log(day + "/" + month + "/" + year + " Đây là ngày không hợp lệ")
                }

                if(day == 28){
                    day = day + 1;
                    console.log(day + "/" + month + "/" + year + " Đây là ngày tiếp theo")
                }
        }
    }



    if(month == 12){
        month = 1;
        year = year + 1;
    } 
