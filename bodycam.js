        //***edit this only for your information***
        const player = "M. HIGHTOWER";
        const agency = "LOS SANTOS POLICE DEPARTMENT";
        const callsign = "[272]";
        //***        end edit this only         ***
    
        var d,h,m,s,animate;
        const monthNames = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

        function init(){
            d=new Date();
            t=d.toLocaleString('en', {timeZoneName:'short'}).split(' ').pop();
            clock();
        };

        function clock(){
            d=new Date();
            updateTime();
            updateDate();
            $('sec', s);
            $('min', m);
            $('hr', h);
            $('tz', t);
            $('day', day);
            $('year', year);
            $('month', monthNames[month]);
            $('player', player);
            $('agency', agency);
            $('callsign', callsign);
            animate=setTimeout(clock,100);
        };
        
        function updateDate(){
            day=d.getDate();
            month=d.getMonth();
            year=d.getFullYear();
        };
        
        function updateTime(){
            h=d.getHours();
            m=d.getMinutes();
            s=d.getSeconds();
        };

        function $(id,val){
            if(val<10){
                val='0'+val;
            }
            document.getElementById(id).innerHTML=val;
        };

        window.onload=init;
