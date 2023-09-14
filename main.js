var val;
var score=0;

function bubble()
{

var bubble="";

for(var i=1;i<=112;i++)
{
    var r = Math.floor(Math.random()*10);
    bubble+=`<div class="bubble">${r}</div>`
}
document.querySelector('#pbottom').innerHTML=bubble;
}



 function new_hit()
 {
    val=Math.floor(Math.random()*10);
 document.getElementById('goal').textContent=val;
   
 }


 function run_time()
 {
   const flag = 0;
    var timer=60;
    if(flag==0)
    {
        setInterval(function()
       {
        if(timer>0)
        { 
            timer--;
            document.querySelector('#timerval').textContent=timer;
           
            
        }
        else{
           
            clearInterval(timer);
           
            document.getElementById('pbottom').innerHTML=`Total Score: ${score}`;
          
        }
       
        
    },1000);
  }

 }



 

 function count_score()
 {
    var click_number = document.querySelector('#pbottom').addEventListener("click",function(details)
     {
        click_number  = Number(details.target.textContent);
        

        if(click_number == val)
        {
         console.log(click_number);
          score+=10;
          document.getElementById('score').textContent=score;
          bubble();
          new_hit();
       }

     });
    
     
 }



function start()
{
    bubble()
    run_time();
    new_hit();
    count_score();
}

 

 


