

//这是要遍历社员的数据
var dimeAxis1=[



{
	qq:'2991883280',
	author1:'冷鱼闲风',
	jj:'一个二次元小鱼弟，美术生一枚，科创只是我的爱好，别人都喜欢叫我冷鱼awa',
	zw:'维帆社社长',
	xxzw:'<p>维帆社社长</p><p>疯癫工作室副室长</p><p>前逗帆社副社长</p>',
	nl:'<p>我可是蒟蒻~</p><p>【doge】</p>',
	hj:'不想展示！挺菜的我~',
	zz:'期末要学业考试了，必须每科都要合格！学业繁忙~',
	js:'一个二次元轻微患者，懒癌患者之一，美术生一枚（可恶啊，速写真**难），编程只是我的爱好罢了，我技术不是很好，也就一般般，中学生，压力有点大！喝口水压压惊！'
},



]


























//社员个人数据存储	
	
	//获取网址参数
				function GetQueryString(name) {
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     
     if(r!=null) {
         return  decodeURI(r[2]);
     } else {
          return null;
    }      
}

//列表处理，看不懂就不要动！





$(function(){
	$.each(dimeAxis1,function(i,e){
		
	
	   var syy='<section class="top-category-widget-area pt-90 pb-90">'+
   '<center><div class="container">'+

     '<div class="col-lg-4">'+
      '<div class="single-cat-widget">'+
      '<div class="content relative">'+
       ' <div class="overlay overlay-bg"></div>'+
       ' <a href="./members.html?id='+i+'&name='+e.author1+'" target="_blank">'+
       '  <div class="thumb">'+
       '   <img class="content-image img-fluid d-block mx-auto" src="http://q1.qlogo.cn/g?b=qq&nk='+e.qq+'&s=640" alt="" />'+
       '  </div>'+
        ' <div class="content-details">'+
        '  <h4 class="content-title mx-auto text-uppercase">'+e.author1+'</h4>'+
        '  <span></span>'+
       '   <p>'+e.zw+'</p>'+
      '   </div></a>'+
    '   </div>'+
    '  </div>'+
    ' </div><br><p>'+e.jj+'</p></center> </section>';
	     $('.grzs').append(syy);



		if(i==GetQueryString("id")){	
		$('.name').empty();
		
		//名称
		var name='<h1>'+e.author1+'</h1><p>'+e.jj+'</p>';
		$('.name').append(name);
		//头像
		var qqtx='<img src="http://q1.qlogo.cn/g?b=qq&nk='+e.qq+'&s=640" alt="" width="250px" height="250px"/>';
		$('.qqtx').append(qqtx);
		
		$('.zw').empty();
		//职务
		var zw=e.xxzw;
		$('.zw').append(zw);
		
		$('.nl').empty();
		//能力
		var nl=e.nl;
		$('.nl').append(nl);
		
		$('.js').empty();
		//介绍
		var js=e.js;
		$('.js').append(js);
		
		$('.zz').empty();
		//在干嘛
		var zz=e.zz;
		$('.zz').append(zz);
		
			$('.hj').empty();
		//获奖
		var hj=e.hj;
		$('.hj').append(hj);
		}	
	});
}); 
