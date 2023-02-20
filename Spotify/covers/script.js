console.log("welcome");
let songIndex=0;
let audioElement=new Audio('/songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname');
let songitems=Array.from(document.getElementsByClassName('songitem'));
let songs=[
    {songName:"let me love you",filePath:"songs\1.mp3",coverPath:"/covers/1.jpg"},
    {songName:"clay",filePath:"songs\2.mp3",coverPath:"/covers/2.jpg"},
    {songName:"let me love you",filePath:"song\3.mp3",coverPath:"/covers/3.jpg"},
    {songName:"rich the kid",filePath:"songs\4.mp3",coverPath:"/covers/4.jpg"},
    {songName:"song title",filePath:"songs\5.mp3",coverPath:"/covers/5.jpg"},
    {songName:"safty danceee",filePath:"songs\6.mp3",coverPath:"/covers/6.jpg"},
    {songName:"Back it up",filePath:"songs\7.mp3",coverPath:"/covers/7.jpg"},
    {songName:"rich the kid",filePath:"songs\8.mp3",coverPath:"/covers/8.jpg"},
    {songName:"clay",filePath:"songs\9.mp3",coverPath:"/covers/9.jpg"},
    {songName:"True love",filePath:"songs\10.mp3",coverPath:"/covers/10.jpg"},
  
]
 songitems.forEach((element,i)=>{
  // console.log(element,i);
   element.getElementsByTagName("img")[0].src=songs[i].coverPath;
   element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

});
 //audioElement.play();
 // master play fir play button
 masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    gif.style.opacity=1;
    }
    else{
      audioElement.pause();
    masterplay.classList.remove('fa-circle-pause');
    masterplay.classList.add('fa-circle-play');
    gif.style.opacity=0;
    }
 })
 audioElement.addEventListener('timeupdate',()=>{
   // console.log('timeupdate');
    progress=parsInt((audioElement.currentTime/audioElement.duration)*100);
   // console.log(progress);
    myprogressbar.value=progress;


 })
 myprogressbar.addEventListener('change',()=>{
   audioElement.currentTime=myprogressbar.value * audioElement.duration/100;
 })
 const makeAllplays=()=>{
  Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
  


 })
}
 Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
  element.addEventListener('click',(e)=>{
    // console.log(e.target);
    makeAllplays();
    
    songIndex=parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
   
    audioElement.src=`/songs/${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterplay.classList.remove('fa-play-pause');
    masterplay.classList.add('fa-circle-pause');

  })

 })
 document.getElementById('next').addEventListener('click',()=>{
  if(songIndex>=10){
    songIndex=0;
  }
  else{
    songIndex+=1;
  }
  audioElement.src=`/songs/${songIndex+1}.mp3`;
  mastersongname.innerText=songs[songIndex].songName;
  audioElement.currentTime=0;
  audioElement.play();
  masterplay.classList.remove('fa-play-play');
  masterplay.classList.add('fa-circle-pause');
 
 })
 document.getElementById('privious').addEventListener('click',()=>{
  if(songIndex<=0){
    songIndex=0;
  }
  else{
    songIndex-=1;
  }
  audioElement.src=`/songs/${songIndex+1}.mp3`;
  mastersongname.innerText=songs[songIndex].songName;
  audioElement.currentTime=0;
  audioElement.play();
  masterplay.classList.remove('fa-play-play');
  masterplay.classList.add('fa-circle-pause');
 
 })




