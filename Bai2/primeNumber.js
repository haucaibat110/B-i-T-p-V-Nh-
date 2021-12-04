
let a = document.getElementById('a');
let b = document.getElementById('b');

let btn = document.getElementById('btn');
let ketQua = document.getElementById('ketQua');
let arr= []
btn.addEventListener('click', function(){
    if(a.value <= 0 || b.value <= 0){
        alert('Incorrect');
    }else if(Number(a.value) >  Number(b.value)){
        alert("a phải nhỏ hơn b");
    }else if(isNaN(Number(a.value) && isNaN(Number(b.value)))){
        alert('Number not String');
    }else{
        let number1 = parseInt(Number(a.value));
        let number2 = parseInt(Number(b.value));
        for (let i=number1+1; i<number2; i++){
            if(i<2){
                continue; // tiếp tục chạy tiếp
            }else if(i==2 || i==3 || i==5 || i==7){
                arr.push(i);
            }else if(i%2==0){
                continue;
            }else if(i%3==0){
                continue;
            }else if(i%5==0){
                continue;
            }else if(i%7==0){
                continue;
            }else{
                arr.push(i);
            }
        }
    }
        console.log(arr);
});
