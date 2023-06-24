const ipt=document.getElementById('ipt');

const btn=document.getElementById('btn');

const paragraph=document.getElementById('list');

const deletData=document.querySelectorAll('del1Btn');

const delebtn=document.getElementById('dltBtn');

const delAll=document.getElementById('deleteal');

const serchIbt=document.getElementById('ipt-serch');

let mood='login';
let tmp;
 
 
 let mohaData;
 if(localStorage.product !=null){
     mohaData=JSON.parse(localStorage.getItem('product'));
     
 }else{
     mohaData=[];
 }

 
 
btn.onclick= () =>{
  let newpro={
    title:ipt.value,
  }
if(ipt.value!=''){
      
if(mood==='login'){
  mohaData.push( newpro);
}else{
  mohaData[tmp]=newpro;
  mood='login';
  btn.innerHTML='<img src="img/login.png" alt="">'
}
               
        paragraph.innerHTML='';
    

    }else{
        paragraph.innerHTML='';
        
    }
   
    ipt.value='';
 localStorage.setItem('product',JSON.stringify(mohaData)); 
 showData()
}


const showData = () =>{

let listItems='';
     
for(let i=0;i<mohaData.length;i++) {

        listItems +=`  <ul id='ulEl'>
       
        <li id='taskname'>
         
          ${mohaData[i].title} 
    
        </li> 
        <button class="delete" id='del1Btn' onclick='updatData(${i})'>
           <img src="img/uptate.png" alt="">
        </button>
         <button class="delete" id='del1Btn' onclick='deleteData(${i})'>
           <img src="img/delete.png" alt="">
         </button>
        
        </ul>
       ` ;

     } ;

paragraph.innerHTML=listItems;
clearBtn()

}
showData()


    
    
const ulEl=document.getElementById('ulEl');

const deleteData =(i)=>{

let listItems='';
let delc =confirm("So, you wanna remove that 🤔")
if(delc==true){
  mohaData.splice(i,1);
  localStorage.setItem('product',JSON.stringify(mohaData));
  
     
      for(let i=0;i<mohaData.length;i++){
        listItems +=`  <ul id='ulEl'>
        <li id='taskname'>
          ${mohaData[i].title} 
    
        </li> 
        <button class="delete" id='del1Btn' onclick='updatData(${i})'>
             <img src="img/uptate.png" alt="">
        </button>
         <button class="delete" id='del1Btn' onclick='deleteData(${i})'>
            <img src="img/delete.png" alt="">
         </button>
        
        </ul>
       ` ;

  
     } 
     paragraph.innerHTML=listItems;
     clearBtn()
}
  
}
  
const updatData =(i)=>{
  ipt.value=mohaData[i].title;
  btn.innerHTML='<img src="img/uptate.png" alt="">';
  mood='<img src="img/uptate.png" alt="">'
  tmp=i;
  scroll({
    top:0,
    behavior:'smooth',
  })

  }
    
function searchData(id){
serchIbt.focus()
serchIbt.placeholder='Search'
}
function serchTask(value){
  let listItems='';
  for(i=0;i<mohaData.length;i++){
    if(mohaData[i].title.includes(value)){
      
      listItems +=`  <ul id='ulEl'>
        <li id='taskname'>
          ${mohaData[i].title} 
    
        </li> 
        <button class="delete" id='del1Btn' onclick='updatData(${i})'>
           <img src="img/uptate.png" alt="">
        </button>
         <button class="delete" id='del1Btn' onclick='deleteData(${i})'>
          <img src="img/delete.png" alt="">
        </button>
        
        </ul>
       ` ;

    }
  }
  paragraph.innerHTML=listItems;
}
 
   

const deletAll=()=>{
     let result=confirm('Do you wanna do that 🤐')
     if (result==true){
      localStorage.clear();
      mohaData.splice(0);
      paragraph.innerHTML='';
      clearBtn()
      
     }
 
 }
 
 

function clearBtn(){
    if(mohaData.length>0){
     
        delebtn.innerHTML=`
        <button onclick='deletAll()' id='deleteal' class="delete">
           <img src="img/dlall.png" alt="">
        </button>     
        `
     }else{
    
       delebtn.innerHTML =''
       serchIbt.placeholder='Find tasks';
       ipt.value='';
       btn.innerHTML='<img src="img/login.png" alt="">'

     }
     
   
}




  








    
        

 








