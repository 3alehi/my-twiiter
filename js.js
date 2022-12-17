const add  = document.getElementById('add')
let twiite = JSON.parse( localStorage.getItem('twitte'))
if(twiite == null){
}
else{

    twiite.forEach(function(o){
    document.body.insertAdjacentHTML("afterbegin" , ' <div id="twitte">'+
    '<img src="download.png" alt="pic">'+
    '<p>Slavik</p>'+
    '<span>@Slavik</span>'+
    '<h3>'+o+' </h3>'+
    '</div>')
})
   
}








add.addEventListener('click' ,()=>{
location.href = 'addtwitte.html'

})