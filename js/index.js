//头部选项卡
$(function(){
	var lis=$(".lix",$(".hnavc2")[0]);
	var yincang=$(".yincang");
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		for(var j=0;j<yincang.length;j++){
			yincang[j].style.display="none";
            lis[i].onmouseover=function(){
			  yincang[this.index].style.display="block";
		   }
		}
		
		lis[i].onmouseout=function(){
			yincang[this.index].style.display="none";
		}
	}
})

//图片变大
$(function(){
	var imgs=$("a",$(".window")[0]);
	var innerbox=$(".innerbox")[0];
	var bannerbox=$(".bannerbox")[0];
	var banners=$(".banner");
	var bannerct=$(".bannerct")[0];
	var as=$("a",$(".anniu")[0]);
	
	var donghua=$(".donghua");
	
	imgs[0].style.zIndex=1;
	banners[0].style.zIndex=1;
	as[0].style.background="rgba(255,255,255,0.5)"
	//图片变大
	var topbox=$(".topbox",$(".typebottom")[0]);
	var tup=$(".img");
	var widths=parseInt(getStyle(tup[0],"width"));
	var heights=parseInt(getStyle(tup[0],"height"));
	console.log(topbox.length)
/*// 	// 图片变大效果
	for(var i=0;i<topbox.length;i++){
		topbox[i].index=i;
		topbox[i].onmouseover=function(){
			// animate(tup[this.index],{padding:10})

			tup[this.index].style.width=widths+8+"px";
			tup[this.index].style.height=heights+8+"px";
		}
		topbox[i].onmouseout=function(){
			// animate(tup[this.index],{padding:0})

			tup[this.index].style.width=widths+"px";
			tup[this.index].style.height=heights+"px";
		}
	}

*/



	var num=0;
	var flag=true;
	var t=setInterval(move,2000);
	function move(){
		num++;
		if(num==banners.length){
			num=0;
		}
		for(var i=0;i<banners.length;i++){
			// imgs[i].style.zIndex=0;
			animate(banners[i],{opacity:0},500)
			as[i].style.background="rgba(157,157,157,0.5)"
			// banners[i].style.zIndex=0;
	    }
	        // imgs[num].style.zIndex=1;
	        animate(banners[num],{opacity:1},500,function(){
	        	flag=true;
	        })
	        as[num].style.background="rgba(255,255,255,0.5)"
	        // banners[num].style.zIndex=1;
	}

	innerbox.onmouseover=function(){
		clearInterval(t);
	}
	innerbox.onmouseout=function(){
		t=setInterval(move,2000)
	}

    //底部选项卡
    for(var j=0;j<as.length;j++){
		as[j].index=j;
	    as[j].onmouseover=function(){
		  for(var i=0;i<banners.length;i++){
			  // imgs[i].style.zIndex=0;
			  animate(banners[i],{opacity:0},500)
			  as[i].style.background="rgba(157,157,157,0.5)";
		   } 
	          // imgs[this.index].style.zIndex=1;
	          animate(banners[this.index],{opacity:1},500)
		      as[this.index].style.background="rgba(255,255,255,0.5)";
		   //更新num
		    num=this.index;
        }
	}

	//图片动画
	for(var i=0;i<donghua.length;i++){
		donghua[i].index=i;
		donghua[i].onmouseover=function(){
		animate(donghua[this.index],{right:10},Tween.Quad.easeIn)
	  }
	    donghua[i].onmouseout=function(){
		animate(donghua[this.index],{right:0},Tween.Quad.easeIn)
	  }
	}

	//主导航动效
	var lis=$("li",$(".mainbavr")[0]);
	var cats=$(".cat");
	console.log(lis);
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		for(var j=0;j<cats.length;j++){
			cats[j].style.display="none";
            lis[i].onmouseover=function(){
			  cats[this.index].style.display="block";
		   }
		}
		
		lis[i].onmouseout=function(){
			 cats[this.index].style.display="none";
		}
	}
	
})



//楼层跳转
$(function(){
	// 楼层颜色
	// var arr=[];
	var arrys=["fys1","fys2","fys3","fys4","fys5","fys6","fys7","fys8","fys9"]
	//浏览器宽高
	var cw=document.documentElement.clientWidth;
	var ch=document.documentElement.clientHeight;
	var jump=$(".jump")[0];
	var lis=$("a",jump);
	lis[0].style.background="#DD2727";
	var search1=$(".search1")[0];
	animate(jump,{opacity:0});
	var back1=$(".back1")[0];
	console.log(back1)
	var fanhui=$(".fanhui")[0];
	//楼层跳转开关
	var flag=true;
	//搜索框开关
	var sflag=true;
	//楼层按钮点击效果
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			flag=false;
			for(var j=0;j<lis.length;j++){
				lis[i].id="";
				// lis[j].className="";
			}
			lis[this.index].id=arrys[this.index];
			// lis[this.index].className="hot";
			// alert(1);
			// var obj1=document.body.scrollTop?document.body:document.documentElement;谷歌火狐兼容性
			animate(document.body,{scrollTop:floorArr[this.index]},function(){
				flag=true;
			});
			animate(document.documentElement,{scrollTop:floorArr[this.index]},function(){
				flag=true;
			});
		}
		flag=true;
	}




	//每个楼层offsetTop
	var floors=$(".floor");
	var floorArr=[];
	for(var i=0;i<floors.length;i++){
		for(var j=0;j<lis.length;j++){

		}
		floorArr.push(floors[i].offsetTop-50); 
	}
	//滚动条滚动
	window.onscroll=function(){
		//滚动条滚动的距离 谷歌和火狐不同需兼容
		var obj=document.body.scrollTop?document.body:document.documentElement;
		var scrolltop=obj.scrollTop;
		// for(var i=0;i<floors.length;i++){
		// 	//可视窗口的高度+滚动条的距离>=floor.offsetTop
		// 	if(ch+scrolltop>=floorArr[i]+300){//floorArr[i]那一层的高度
		// 		//让当前楼层下面所有的图片加载
		// 		var imgs=$("img",floors[i]);
		// 		for(var j=0;j<imgs.length;j++){
		// 			imgs[j].src=imgs[j].getAttribute("imgpath");
		// 		}
		// 	}
		// }
		// 楼层按钮滑动
		if(!flag){ 
			return;
		}
		for(var i=0;i<floors.length;i++){

			if(ch+scrolltop>=floorArr[i]+300){
				for(var j=0;j<lis.length;j++){
				// lis[j].className="";
				lis[j].id="";
			  }
				// lis[i].className="hot";
				lis[i].id=arrys[i];
			}
			
		}
		// 搜索框
		if(scrolltop>=floorArr[0]){
			if(sflag){
				sflag=false;
				animate(search1,{top:0});
				//楼层的显示隐藏
				animate(jump,{opacity:1});
			}
			
		}else{
			if(!sflag){
				sflag=true;
				animate(search1,{top:-50})
				animate(jump,{opacity:0});
			}
			
		}
	    
	 } 
	// 返回顶部
	// back1.onclick=function(){
	//     obj=document.body.scrollTop?document.body:document.documentElement;
	// 	animate(obj,{scrollTop:0})
	// }
	fanhui.onclick=function(){
		obj=document.body.scrollTop?document.body:document.documentElement;
		animate(obj,{scrollTop:0})
	}

})


// leftside选项卡
$(function(){
	var lis=$(".list",$(".leftsidebar")[0]);
	var xxk=$(".xxk");
	console.log(xxk.length)
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		for(var j=0;j<xxk.length;j++){
			xxk[j].style.display="none";
            lis[i].onmouseover=function(){
			  xxk[this.index].style.display="block";
		   }
		}
		
		lis[i].onmouseout=function(){
			xxk[this.index].style.display="none";
		}
	}
})

//热门品牌小图片遮罩

$(function(){
	var zhezhao=$(".zhezhao",$(".rmppcenter")[0]);
	var lis=$("li",$(".rmppcenter")[0]);
	console.log(lis.length)
	for(var i=0;i<lis.length;i++){
		zhezhao[i].style.display="none";
		lis[i].index=i;
		lis[i].onmouseover=function(){
			zhezhao[this.index].style.display="block";
		}
		lis[i].onmouseout=function(){
			zhezhao[this.index].style.display="none";
		}
	}
})
//猜你喜欢边款动效
$(function(){
	var bigox=$(".redbk");
	var lis=$("li",$(".cnxhbottom")[0]);
	console.log(lis.length)
	move(lis,bigox);
	function move(parent,child){
	for(var i=0;i<parent.length;i++){
		child[i].style.display="none";
		parent[i].index=i;
		parent[i].onmouseover=function(){
			child[this.index].style.display="block";
			// child[this.index].style.cssText="opacity:0.5";
		}
		parent[i].onmouseout=function(){
			child[this.index].style.display="none";
		}
	}
  }
})

//右导航动画
$(function(){
	var action=$(".action",$(".rightbar")[0]);
    console.log(action.length)
    var lis=$(".box2",$(".rightbar")[0]);
    console.log(lis.length)
    for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		for(var j=0;j<action.length;j++){
			// animate(action[j],{opacity:0 right:50});
			animate(action[j],{opacity:0,right:80});
            lis[i].onmouseover=function(){
			 animate(action[this.index],{opacity:1,right:35});
		   }
		}
		
		lis[i].onmouseout=function(){
			animate(action[this.index],{opacity:0,right:80});
		}
	}
	var mtdh=$(".mtdh",$(".rightbar")[0])[0];
	var mwem=$(".mwem",mtdh)[0];
	mwem.style.display="none";
	mtdh.onmouseover=function(){
		mwem.style.display="block";
	}
	mtdh.onmouseout=function(){
		mwem.style.display="none";
	}
})
