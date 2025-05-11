setInterval(() => {
    d=new Date()
    hours_time=d.getHours();
    minut_time=d.getMinutes();
    secon_time=d.getSeconds();
    hourse_rotation=30*hours_time+minut_time/2;
    minute_rotation=6*minut_time;
    second_rotation=6*secon_time;


    hours.style.transform=`rotate(${hourse_rotation}deg)`
    minute.style.transform=`rotate(${minute_rotation}deg)`
    second.style.transform=`rotate(${second_rotation}deg)`
}, 1000);