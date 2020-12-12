
	
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


//这是要遍历产品轴的数据
var dimeAxis=[
{

	data:'2020年10月25日',
	title:'集合大量编程猫社区接口，同时简化大量爬虫解析步骤，一键式获取资料！不仅是获取，还可以与官方后台交互，如：回复评论，作品收藏，作品点赞等。经过二次送代增入了类，提高了执行效率。',
	author:'cdmaoapi库',
	kfz:'SS_LiMgXn,冷鱼闲风',
	url:'http://doc.viyrs.com/cdmaoapi.py',
	help:'http://doc.viyrs.com/cdmaoapi'
},	{

	data:'2020年11月12日',
	title:'输入自己或对方用户ID,一键式生成可视化个人图表，作品前7个对比分析，还有粉丝（完整）显示，说不定让你大吃一惊哦~还可以生成海报哦~快去使用看看吧',
	author:'编程猫个人大数据生成',
	kfz:'冷鱼闲风',
	url:'https://vifan.lanzoux.com/idNwBjb9cub',
	help:'#'
},	


]
	

 
 
 
 
$(function(){
	$.each(dimeAxis,function(i,e){
 
		if(e.author==GetQueryString("name")){
			
var htmll='<h1>'+e.author+'</h1><p>'+e.title+'</p>';
$('.name').empty();
		$('.name').append(htmll);

var htmll='<h4>'+e.js+'</h4>';
$('.js').empty();
		$('.js').append(htmll);


var htmll='<h5>研发者：'+e.kfz+'</h5><br><h5>发布日期：'+e.data+'</h5>';
$('.jss').empty();
		$('.jss').append(htmll);

document.getElementById("url").href=e.url;
document.getElementById("urll").href=e.help;


		}
		
		
		
	});
			});
		
	
