
    let a;

function alternatingSums(a) {
    a = [60,40,55,75,64];
    let result = [];
    let team1 = [a[0], a[2]];  // thành viên 1 và 3
    let team2 = [a[1],a[2],a[3]]; // thành viên 2,4,5
    let sum = (a[0]+a[2]);
    let sum2 = (a[1] + a[3] + a[4]);
   
    result.push(parseInt(sum2));
    result.push(parseInt(sum));
    console.log(a);
    console.log(result );
    console.log(result + " ");
}

alternatingSums()
