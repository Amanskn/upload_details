var show=$("#show-container");
var add=$('#add-btn');
const name_=$("#name");
const marks=$("#marks");
const rno=$("#rno");
var num=1;
var color;
var showDetails=function(){
    if(num==0){
        color="brown";
        num=1;
        
    }else{
        
        color="black";
        num=0;
                
    }
   
    console.log(num);
    show.append(`<div class="student-details" style=" background-color:${color};">
    Roll no - <span>${rno.val()}</span> , <span>${name_.val()}</span> has scored <span>${marks.val()}</span> marks.
</div>`)
    
}


add.click(showDetails);




