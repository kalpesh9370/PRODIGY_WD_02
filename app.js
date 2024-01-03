
        let [seconds,minutes,hours] =[0,0,0];
        let displayTime=document.getElementById("displayTime");
        let timer=null;
        let playButton=document.getElementById("playButton");
        let lapButton=document.getElementById("lapBtn");

        // playButton.onclick="watchStart()";

       // playButton.addEventListener('click', watchStart())

        function stopWatch(){

            seconds ++;

            if(seconds==60){
                seconds=0;
                minutes++;
                if(minutes==60){
                    minutes=0;
                    hours++;
                }
 
            }

                let h=hours<10 ? "0" + hours:hours;
                let m=minutes<10 ? "0" + minutes:minutes;
                 let s=seconds<10 ? "0" + seconds:seconds;

      

           displayTime.innerHTML= h+":"+ m +":"+ s;
          
        }


       
        function watchStart(){
            if(timer!== null)
            {
                clearInterval(timer);
            }
            timer=setInterval(stopWatch,1000);

        }

        function watchStop(){
            clearInterval(timer);
        }

        function watchReset(){
            clearInterval(timer);
            [seconds,minutes,hours]=[0,0,0];
            displayTime.innerHTML="00:00:00"
        }

        document.getElementById("lapRecord").innerHTML= "";

       
        function lap(){
            // lapNow= h+":"+ m +":"+ s;
            let temp= getElementById("lapRecord")
            lapNow=hours+":"+ minutes +":"+ seconds;
          //lapButton.innerHTML=lapNow;
            document.getElementById("lapRecord").innerHTML=document.getElementById("lapRecord").innerHTML +"<p>"+lapNow+"</p>";
             //document.getElementById("laps").innerHTML=temp+<p>lapNow</p>;
             
        
        }