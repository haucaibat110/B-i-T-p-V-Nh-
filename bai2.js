
    let str = prompt("Input String");
    let arr = str.split(" ");
    let result = []

        for(let item of arr){
            let uppercase1 = item[0].toUpperCase() + item.substr(1);
            result.push(uppercase1)
        }
        console.log(result.join(" "))
