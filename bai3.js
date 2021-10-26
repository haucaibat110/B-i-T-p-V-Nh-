
    let arr = prompt("Nhập vào một dãy số")
    arr = arr.split(",")
    let newarr= []
    for(let i = 0; i < arr.length; i++){
        if(newarr.indexOf(arr[i]) === -1){
            newarr.push(arr[i])
        }
    }
    console.log(newarr + " ")



    // cách 2 ngắn gọn
    let str_name = ["one","two","three","one","one","four","five","four","five","five"]
    let new_str = [...new Set(str_name)];
    console.log(new_str + "");
    
