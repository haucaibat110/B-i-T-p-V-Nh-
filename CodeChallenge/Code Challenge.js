
 

//Số trúng là 2,4,6,10;

function hienThi(){
    let number_Corect = [2, 4, 6, 10]
          for(let i=0; i <= number_Corect.length; i++){
                if(input_Number.value == 2 || input_Number.value == 4 || input_Number.value == 6 || input_Number.value == 10){
                    alert("Bạn đã chọn đúng Số");
                    break;
              }
                if(input_Number.value != number_Corect[i]){
                    alert("Số không đúng, Nhập lại");
                    alert("Một trong các số trong dãy số đúng " + number_Corect[i]);
                    break;
              } 
          }          
    }
