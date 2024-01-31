const days=document.getElementById('days')
const hours=document.getElementById('hours')
const minutes=document.getElementById('mins')
const seconds=document.getElementById('secs')
const currentYear=new Date().getFullYear();
console.log(currentYear)
const scienceDayTime=new Date(`Feb 28 ${currentYear} 00:00:00`)
console.log(scienceDayTime)
function updateCountDownTimer(){
    const currentTime=new Date()
    const diff=scienceDayTime-currentTime
    // console.log(diff)
    const d=Math.floor(diff/1000/60/60/24)
    // console.log(d)
    const h=Math.floor(diff/1000/60/60)%24
    // console.log(h)
    const m=Math.floor(diff/1000/60)%60
    // console.log(m)
    const s=Math.floor(diff/1000)%60
    // console.log(s)
    days.innerHTML=d;
    hours.innerHTML=h<10?'0'+h:h
    minutes.innerHTML=m<10?'0'+m:m
    seconds.innerHTML=s<10?'0'+s:s

}
updateCountDownTimer()
 setInterval(updateCountDownTimer,1000)
