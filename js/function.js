/*getClass("one",[context])
select指定的classname
context 指定的范围 如果传入指定的范围那么我们就在指定的范围查询，
                   如果不传的话context=document
思路：
0.context初始化
1.判断浏览器
document.getElementsByClassName;
2.获取指定元素
true w3c
false ie6~8
获取所有元素
遍历
筛选 obj.className==select
     arr.push(obj)
     return arr
*/
function getClass(select,context){
     var context=context?context:document;//三元运算符 context初始化
     if(document.getElementsByClassName){
     	// alert("w3c");
     	return context.getElementsByClassName(select);
     } 
     else{
     	// alert("ie6");
     	var all=context.getElementsByTagName("*");
     	var arr=[];
     	for(var i=0;i<all.length;i++){
     		// if(all[i].className==select){
     		// 	arr.push(all[i]);
     		// }

               /*每一个对象的className是否包含指定的select*/
               if(checkClass(all[i].className,select)){
                    arr.push(all[i]);//在数组末尾添加元素
               }
     	}
     	return arr;
      }
}
//解决多个类名的情况<div class="one two"></div>
//classname里面是否包含有select
// all[i].className--->classname
//只针对类名class
function checkClass(classname,select){
     var arr=classname.split(" ");//把字符串分割成数组 用空格分割
     //arr["one","two"]
     for(var i=0;i<arr.length;i++){
          if(arr[i]==select){//数组arr是的第i个的元素是否等于select
               return true;
          }
     }
     return false;
}

/*setContent(obj,val)
obj 指定的对象
val 要设置的值
第一步判断val
如果val 有值,设置obj文本
如果val 无值,获取obj文本
*/ 

function setContent(obj,val){
    // alert(1);
    // alert(val);//undefined
     if(val==undefined){
         if(obj.innerText){
           return obj.innerText;
        }
        else{
          return obj.textContent;
        }
     }
     else{
          if(obj.innerText){
               obj.innerText=val;
          }
          else{
               obj.textContent=val;
          }
     }
     
}
/*$(string) 获取页面元素
   ".one" 获取指定类名的元素的集合
   "#one" 获取指定id的第一个元素
   "div"  获取指定标签名的元素的集合

 思路：

 第一步：判断字符串的首字符，
 第二部：如果是. getClass
 # document.getElementById
 标签 document.getElementsByTagName
 context 指定的范围 如果传入指定的范围那么我们就在指定的范围查询，
                   如果不传的话context=document
 */
 //函数重载
 function $(selector,context){
  //判断输入的是字符串还是函数
   if(typeof selector=="string"){
      // 范围初始化
     var context=context||document;
      if(selector.charAt(0)=="."){
      //.one ---->ones
        return getClass(selector.slice(1),context);
      }else if(selector.charAt(0)=="#"){
      //#one ---->one
        return document.getElementById(selector.substring(1));
      }//正则表达式
      else if(/^[a-z][a-z1-6]{0,8}$/.test(selector)){
        return context.getElementsByTagName(selector);
      }//<div>
      else if(/^<[a-z][a-z1-6]{0,8}>$/.test(selector))
        return document.creatElement(selector.slice(1,-1));
   }
   //如果是函数执行以下程序 函数重载根据参数的类型或参数的个数不同实现不同的功能
   else if(typeof selector=="function"){
      /*window.onload=function(){
        selector();//回调函数
      }*/
      addEvent(window,"load",selector);
   }
  
 }
 /*$(string) 获取页面元素
   ".one" 获取指定类名的元素的集合
   "#one" 获取指定id的第一个元素
   "div"  获取指定标签名的元素的集合

 思路：
 第一步：判断字符串的首字符，
 第二部：如果是. getClass
 # document.getElementById
 标签 document.getElementsByTagName
 
 function $(selector){
  
    if(selector.charAt(0)=="."){
      //.one ---->one
      return getClass(selector.slice(1));
    }else if(selector.charAt(0)=="#"){
      //#one ---->one
      return document.getElementById(selector.substring(1));
    }else if(/^[a-z][a-z1-6]{0,8}&/.test(selector)){
      return document.getElementsByTagName(selector);
    }
 }*/

 /*
 getStyle(one,"width")
 用来获取指定的元素指定的样式
 attr属性值
 */
 function getStyle(obj,attr){
     if(obj.currentStyle){
        return obj.currentStyle[attr];
     }else{
         //getComputedStyle(obj.null)."width";
        return getComputedStyle(obj,null)[attr];
     }
 }

 /*用来获得某个对象的元素节点
 getChild(obj,type)
 obj:指定的对象
 type：获取子节点的类型
 思路：1：获取所有子节点
 2：建立空数组
 3：遍历所有子节点
   通过子节点的类型 nodeType
   ture child[i].nodeType==1
   false child[i].nodeType==1||child[i].nodeType==3&&(/^\s+$/.test(childes[i].nodeValue))
 4：返回
 */
 /*function getChild(one,type){
      var childes=obj.childNodes;
      var type=type==undefined?true:type;
      var arr=[];
      for(var i=0;i<childes.length;i++){
        if(type==true){
          if(childes[i].nodeType==1){
            arr.push(childes[i]);
          }else{
            if(childes[i].nodeType==1||(child[i].nodeType==3&&(/^\s+$/.test(childes[i].nodeValue)))){
            arr.push(childes[i]);
          }
          }
        }
      }
      return arr;
 }*/
function getChild(obj,type){
  var childes=obj.childNodes;
  var type=type==undefined?true:type;
  var arr=[];
  for(var i=0;i<childes.length;i++){
      if(type===true){
         if(childes[i].nodeType==1){
          arr.push(childes[i]);
         } 
       }else{
              if(childes[i].nodeType==1||(childes[i].nodeType==3&&!(/^\s+$/.test(childes[i].nodeValue)))){
                arr.push(childes[i]);
              }
         
       }
    }
      return arr;
 }
// 获得第一个子节点
function firstChild(obj,type){
    return getChild(obj,type)[0];
 }
// 获得最后一个节点
 function lastChild(obj,type){
    //var childes=getChild(obj,type);
    // return getChild(obj,type)[getChild(obj,type).length-1];
    var child=getChild(obj,type);
    return child[child.length-1];
 }
 function randomChild(obj,num){
   return  getChild(obj)[num];
 }
 /*getNext(obj)
 获得下一个元素节点
 思路：第一步：判断obj是否有下一个兄弟元素
 没有 false 
 有更新next=next.sibling
 next 是否为空
 return next;
 */
 function getNext(obj){
  var next=obj.nextSibling;
  if(next==null){
    return false;
  }
  while(next.nodeType==8||next.nodeType==3){
    next=next.nextSibling;
    if(next==null){
      return false;
    }
  }
  return next;
 }

 function getNextContent(obj){
  var next=obj.nextSibling;
  if(next==null){
    return false;
  }
  while(next.nodeType==8||(next.nodeType==3&&(/^\s+$/.test(next.nodeValue)))){
    next=next.nextSibling;
    if(next==null){
      return false;
    }
  }
  return next;
 }
//getPrevious(obj)
 // 获得上一个元素节点
 function getPrevious(obj){
  var next=obj.previousSibling;
  if(next==null){
    return false;
  }
  while(next.nodeType==8||next.nodeType==3){
    next=next.previousSibling;
    if(next==null){
      return false;
    }
  }
  return next;
 }

 function getPreviousContent(obj){
    var previous=obj.previousSibling;
    if(previous==null){
      return false;
    }
    while(previous.nodeType==8||(previous.nodeType==3&&(/^\s+$/.test(previous.nodeValue)))){
      previous=previous.previousSibling;
      if(previous==null){
        return false;
      }
    }
    return previous;
 }
 /*inserAfter(obj,ooj1)
    将obj插入到obj1后面
    思路：要将obj插入到obj1下一个兄弟节点的前面
      第一步：获取obj1下一个兄弟节点和父元素
      第二步：判断兄弟节点
      true 获取父元素 parent.insertBfore(obj,next)
      false parent.appendChild(obj);
      obj1 下一个节点
 */
 //插入到某个对象之后后面 obj1子节点
 function insertAfter(obj,obj1){
      var parent=obj1.parentNode;
      var next=getNext(obj1);
      if(next){
         parent.insertBefore(obj,next)
      }else{
        appendChild(obj);
      }
 }
//插入到最前面 obj1是父元素
/*将obj插入到父元素obj1的最前面
思路：1.找到obj1第一个子元素first
2.*/
 function appendBefore(obj,obj1){
      var first=firstChild(obj1);
      if(first){
        obj1.insertBefore(obj,first);
      }else{
        obj1.appendChild(obj);
      }
 }
 //同一个事件绑定多个事件兼容性
 // addEvent(one,"click",aa)
 function addEvent(obj,type,fn){
      if(obj.attachEvent){
         obj.attachEvent("on"+type,fn);
      }else{
         obj.addEventListener(type,fn,false);
      }
 }

function removeEvent(obj,type,fn){
      if(obj.detachEvent){
         obj.detachEvent("on"+type,fn);
      }else{
         obj.removeEventListener(type,fn,false);
      }
 }

 /*offset()用来获取某一个对象距离浏览器的距离{left:,top:}
 思路：第一步：获取所有具有定位属性的父元素
 第二部：将所有父元素的offsetleft+(border-left)+自身offsetLeft
返回结果是一个对象*/
function offset(obj){
  //声明一个对象
   var result={left:0,top:0};
   //获取父元素
   var arr=[];
   arr.push(obj);
   var parent=obj.parentNode;
   //获取所有具有定位属性的父元素
   while(parent.nodeName!=="BODY"){
      if((getStyle(parent,"position"))=="relative"||(getStyle(parent,"position")=="absolute")){
        arr.push(parent); 
      }
      parent=parent.parentNode;
   }
   //将所有父元素的offsetleft+(border-left)+自身offsetLeft
   for(var i=0;i<arr.length;i++){
      var left=arr[i].offsetLeft;
      var borderLeft=getStyle(arr[i],"borderLeftWidth")?parseInt(getStyle(arr[i],"borderLeftWidth")):0;
      //最里面的子元素边框不加
      if(i==0){
        borderLeft=0
      }
      result.left+=left+borderLeft;

      var top=arr[i].offsetTop;
      var borderTop=getStyle(arr[i],"borderTopWidth")?parseInt(getStyle(arr[i],"borderTopWidth")):0;
      // console.log(top);
      if(i==0){
        borderTop=0
      }
      result.top+=top+borderTop;
   }
   return result;
}

/*滚轮滚动的兼容性 mousewheel(document,function(){alert(1)},function(){alert(2)}){
        }
        mousewheel(obj,downFn,upFn)*/
function mousewheel(obj,downFn,upFn){
  if(document.attachEvent){
       document.attachEvent("onmousewheel",scrollFn); //IE、 opera
       }else if(document.addEventListener){
       document.addEventListener("mousewheel",scrollFn,false);
       //chrome,safari -webkit-
       document.addEventListener("DOMMouseScroll",scrollFn,false);
       //firefox -moz-
      }
      function scrollFn(e){
        var ev=e||windowEvent;
        var dir=ev.wheelDelta||ev.detail;
        if (ev.preventDefault ){
         ev.preventDefault(); //阻止默认浏览器动作(W3C)
         } 
        else{
          ev.returnValue = false;//IE中阻止函数器默认动作的
        }
        if(dir==-120||dir==3){
          //冒充
          downFn.call(obj);
        }else if(dir==120||dir==-3){
          upFn.call(obj);
        }
      }
}