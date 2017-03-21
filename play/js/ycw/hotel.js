

// 选项卡

var hlists=document.querySelector(".hotel-list");
var as=document.querySelectorAll(".hotel-list .as");
var litems=document.querySelectorAll(".lists-items");
var mask=document.querySelector(".mask");
var widths=mask.offsetWidth;
console.dir(mask)
for(var i=0;i<as.length;i++){ 
	as[i].index=i;
	as[i].addEventListener("touchstart",function(){
		for(var j=0;j<litems.length;j++){
			litems[j].style.height=0+"rem";
			litems[j].style.zIndex=1;
			litems[j].style.opacity=0;
			mask.style.left=0;
		
		}
		litems[this.index].style.transition="height 0.05s "
		litems[this.index].style.opacity=1;
		litems[this.index].style.height=5+"rem";
		litems[this.index].style.zIndex=3;
	})

}

	mask.addEventListener("touchstart",function(){
				for (var k=0;k<litems.length;k++){
				 	litems[k].style.height=0;
				 		mask.style.left=-widths+"px";
				 }
			
			})
// 添加筛选
 for (var k=0;k<litems.length;k++){
 	addclass(litems[k]);

 }
function addclass(litems){
	var lis=document.querySelectorAll("li",litems)
	var mask=document.querySelector(".mask");
	var widths=mask.offsetWidth;
	var span=document.querySelectorAll(".zi",lis)
    var active=document.querySelectorAll(".active");
     for(var i=0;i<lis.length;i++){
  	  lis[i].index=i;
     lis[i].addEventListener("touchstart",function(){
  	  for(var j=0;j<active.length;j++){
  	  	  active[j].className="active";
  	  	  litems.style.height=0;
  	  	  mask.style.left=-widths+"px";
  	  	  litems.style.opacity=1;
  	  	   // console.log(-widths)
  	  	  // litems.style.opacity=0;
  	  	   }
  	  	   active[this.index].className="hott";
  	  	   
  	  	   
  	  })
  }

}







