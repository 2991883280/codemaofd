

//这是要遍历社员的数据
var dimeAxis1=[
{
	qq:'843050374',
	author1:'橙橙',
	jj:'吃了橙子后变成人的萌新awa~',
	zw:'技术员助理',
	xxzw:'<p>技术员助理</p>',
	nl:'<p>还OK吧qwq</p>',
	hj:'就算上帝来了我还是没有',
	zz:'流口水.阿巴阿巴(¯﹃¯)',
	js:'编程是我最大的爱好，妈妈是编程的最大敌人（意思就是她不让我玩QAQ）'
},


{
	qq:'1969764933',
	author1:'33工作',
	jj:'一个努力学习OI的蒟蒻。我太菜了~',
	zw:'算法设计技术员/人事管理员<br>',
	xxzw:'<p>算法设计<br>人事管理员</p>',
	nl:'<p>好差</p>',
	hj:'',
	zz:'学习~',
	js:'一个努力学习OI的蒟蒻。我太菜了~'
},

{
	qq:'3563587782',
	author1:'_明某人_',
	jj:'沉迷二次元无法自拔233333333333333awa',
	zw:'人事管理员',
	xxzw:'<p>人事管理员</p>',
	nl:'<p>会一点点py233</p>',
	hj:'今天就算天王老子来了我也获不了奖',
	zz:'待着(az',
	js:'沉迷二次元无法自拔233333333333333awa'
},

{
	qq:'2991883280',
	author1:'冷鱼闲风',
	jj:'一个二次元小鱼弟，美术生一枚，别人都喜欢叫我冷鱼awa',
	zw:'维帆社社长',
	xxzw:'<p>维帆社社长</p><p>UI设计师</p><p>前端开发</p><p>后端开发</p>',
	nl:'<p>蒟蒻~</p><p>【doge】</p>',
	hj:'<p>2020编程猫教师节活动＋国庆节活动kitten作品TOP5</p><p>2020全国青少年电脑制作大赛（人工智能）一等奖</p><p>第十一届蓝桥杯青少年创意编程（KITTEN高级）省赛一等奖<p>第十一届蓝桥杯青少年STEMA（Python高级）一等奖</p><p>2019“童心杯”美术国际大赛银牌</p><p>2020"白石杯" 中国青少年书画大赛银牌</p><p>2020“华夏杯”全国青少年书画大赛全能银奖</p><p>2018“国学杯”全国青少年国学大赛（选拔赛）二等奖（国赛）三等奖</p><p>2018广东青少年scratch创新大赛一等奖</p><p>2017广东青少年scratch创新大赛一等奖</p><p>2016广东省书法比赛三等奖</p>',
	zz:'（马上就要参加蓝桥杯全国赛和NOC大赛了，啊啊啊啊啊啊啊）期末要学业考试了，必须每科都要合格！准备战美术联考~还有阔怕的校考。 学业繁忙~(其余的学习信息学奥赛，可能会参加2021年NOIp！【不管能不能参加，能学到东西就行~毕竟高中忙~再加上我是美术生.....】)',
	js:'一个二次元轻微患者，懒癌患者之一，美术生一枚（可恶啊，真**难），编程是我的爱好罢了，中学生压力有点大！喝口水压压惊！'
},


{
	qq:'1024728281',
	author1:'SS_LMgXn',
	jj:'正如名字是个萌新awa，倒过来倒过去也是萌新',
	zw:'Python工程师',
	xxzw:'<p>Python工程师</p>',
	nl:'<p>萌新等级</p><p>【doge】</p>',
	hj:'我怎么可能获奖的，除非天打雷劈',
	zz:'机密',
	js:'编程只是爱好~我没啥好介绍的，要介绍就是 萌 新！'
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
