//博客数据存储	
	
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

//这是要遍历博客的数据
var dimeAxisl=[
	{
	author1:'冷鱼闲风',
	title1:'【设计心理学科普】人的动机来源',
	url1:'https://shequ.codemao.cn/community/370739',
	data1:'2021/04/1'
},

		{
	author1:'冷鱼闲风',
	title1:'著名的哈勃定律：星系不断远离，宇宙不断膨胀',
	url1:'https://shequ.codemao.cn/community/370791',
	data1:'2021/04/2'
},

	
	{
	author1:'冷鱼闲风',
	title1:'【后援会+官方支持】模拟AI大黄鸡程序（双端版）',
	url1:'https://shequ.codemao.cn/wiki/forum/371149',
	data1:'2021/04/4'
},


	{
	author1:'冷鱼闲风',
	title1:'【编程猫实时获取评论】挂在电脑后台，新消息自动提醒',
	url1:'https://shequ.codemao.cn/community/368905',
	data1:'2021/03/26'
},
{
	author1:'冷鱼闲风',
	title1:'维帆社新春福利派送',
	url1:'https://www.zybuluo.com/vifanlyrs/note/1776261',
	data1:'2021/02/12'
},







]




//列表处理，看不懂就不要动！
$(function(){
	$.each(dimeAxisl,function(i,e){
		if(i==0){$('.time-axis').empty();}
	if(i==0){
		var ht=' <br><style type="text/css">.pp {text-indent: 4.5cm}</style><p class="pp" style="font-size: 50px;height: 40px;color:#000000;font-weight:600;">最新文章</p>';
			$('.time-').append(ht);
		}
		
		if(i<5){
			var h=' <div class="single-feature">'+
			'   <a href="./blogw.html?id='+i+'" class="title" > <img href="img/product.htmlofter.jpg">'+
			'<h3>《'+e.title1+'》</h3></a>'+
			'<p>作者：'+e.author1+'，发表日期：'+e.data1+'</p>'+
			'</div>';
		$('.time-').append(h);
			
			
		}
		

	
	
	
		var html=' <div class="single-feature">'+
			'   <a href="./blogw.html?id='+i+'" class="title" > <img href="img/product.htmlofter.jpg">'+
			'<h3>《'+e.title1+'》</h3></a>'+
			'<p>作者：'+e.author1+'，发表日期：'+e.data1+'</p>'+
			'</div>';
		$('.time-axis').append(html);
		
	
		if(i==GetQueryString("id")){
			
		var html=''+
			'  <img href="img/product.htmlofter.jpg">'+
		
			'<iframe class="   -webkit-user-drag: none;	-webkit-border-radius: 10px;-moz-border-radius: 10px;border-radius: 10px;" height="1600" width="100%" src="'+e.url1+'" frameborder="0" allowfullscreen></iframe>';
			$('.left-part').empty();
			$('.time-axi').empty();
		$('.time-axi').append(html);
		
		var htm='<h1>《'+e.title1+'》</h1><p>作者：'+e.author1+'</p><p>日期：'+e.data1+'</p>';
		$('.left-part').append(htm);
		}
		
		
		
	});
	
	
	
	
});
 
