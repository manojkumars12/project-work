const add = document.querySelector(".addition");
const reset = document.querySelector(".reset");
const sub = document.querySelector(".subtract");
const val = document.querySelector(".value");

add.addEventListener("click",()=>{
      val.innerHTML++;
      changeColor();
});

reset.addEventListener("click",()=>{
    val.innerHTML = 0;
});

sub.addEventListener("click",()=>{
    val.innerHTML--;
});

function changeColor(){
    if(val.innerHTML > 0){
        val.styles.changeColor = "black";
    }else if(val.innerHTML < 0) {
        val.styles.changeColor = "yellow";
    }else{
        val.styles.changeColor = "green";
    }
}