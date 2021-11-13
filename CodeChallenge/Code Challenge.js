
    let button_Color = document.querySelector('.random-click'); 
        button_Color.addEventListener('click', change_Color );


    function change_Color(){
        let background = document.querySelector('.backgound');
        let color = ["black", "red", "blue", "yellow" , "gray" ,"pink", "orange"]
        let random = color[random_Color(color)];
            background.style.backgroundColor = random;
        }

    function random_Color(inpuArray){
        return Math.floor(Math.random()* inpuArray.length);
        }

    change_Color();
    random_Color();
