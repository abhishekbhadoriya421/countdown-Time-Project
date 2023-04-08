const input = document.getElementById('inputbox');
const btn   = document.getElementById('btn');
const counter1 = document.querySelectorAll('#counter1 p');
const counter2 = document.querySelectorAll('#counter2 p');
const counter3 = document.querySelectorAll('#counter3 p');
const counter4 = document.querySelectorAll('#counter4 p');
const counter5 = document.querySelectorAll('#counter5 p');

let c = 0;
function animation(current,next,count){
    next.classList.add('animation');
    next.textContent = count;
    setTimeout(()=>{
        next.classList.remove('animation');
        current.textContent = count;
    },500);  
}


btn.addEventListener('click',()=>{
    let num = input.value;
    let p = 1;
    let count = [];
    while (num!=0) {
        let val = num%10;
        count.push(val);
        num = parseInt(num/10);
    }
    for(let i = 0;i<5;i++){
        if(count[i]==undefined){
            count[i] = 0;
        }
        console.log(count[i]);
    }
    // counter1
    let current1 = counter5[0];
    let next1 = counter5[1];
    counter4[0].textContent = count[1];
    counter3[0].textContent = count[2];
    counter2[0].textContent = count[3];
    counter1[0].textContent = count[4];

    current1.textContent = count[0];
    count[0]--;

    let seT_Id = setInterval(() => {
        if(count[0]<0){
            if(count[1]==0 && count[2]==0 && count[3]==0 && count[4]==0){
                clearInterval(seT_Id);
                window.alert("Time Out");
                return;
            }else{
                count[0] = 9;
            }  
        }  
        // checking All counts
            // count4
        if(count[0]==9 && count[1] > 0){
            count[1]--;
            animation(counter4[0],counter4[1],count[1]);  
        }
            // count3
        if(count[0]== 0 && count[1]== 0 && count[2] > 0){
            count[2]--;
            count[1] = 9;
            count[0] = 9;
            animation(counter4[0],counter4[1],count[1]);
            animation(counter3[0],counter3[1],count[2]);   
        }
            // count2
        if(count[0]== 0 && count[1]== 0 && count[2]==0 && count[3] > 0){
            count[3]--;
            count[2] = 9
            count[1] = 9;
            count[0] = 9;
            animation(counter4[0],counter4[1],count[1]);
            animation(counter3[0],counter3[1],count[2]);
            animation(counter2[0],counter2[1],count[3]);     
        }

            // count1
            if(count[0]== 0 && count[1]== 0 && count[2]==0 && count[3] == 0 && count[4] > 0){
                count[4]--;
                count[3] = 9;
                count[2] = 9
                count[1] = 9;
                count[0] = 9;
                animation(counter4[0],counter4[1],count[1]);
                animation(counter3[0],counter3[1],count[2]);
                animation(counter2[0],counter2[1],count[3]);  
                animation(counter1[0],counter1[1],count[4]);   
            }


        animation(current1,next1,count[0]);
        count[0]--;
    },1000);


})



