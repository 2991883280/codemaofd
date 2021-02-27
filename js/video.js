//这是要遍历视频轴的数据
var dimeAxis=[
	
{
	url:'https://www.bilibili.com/video/BV1Wz4y1m7C9/',
	js:'类似AI大黄鸡的自动化到作品评论区进行评论的实现方法，使用python制作，简单方便，快来试试吧！作者：冷鱼闲风。',
	title:'编程猫作品AI评论【批量】'
},
]


 
$(function(){
	$.each(dimeAxis,function(i,e){
		
			$('.time-axis').empty();
var htmll='<div class="video">'+
              '<h1>'+e.title+'</h1>'+
			  '<hr  size="15px" color="#777777">'+
      '<p>  '+e.js+'</p>'+
	  '<a href="'+e.url+'" target="_blank"><input  type="button" value="查看视频" class="an"></a> '+
         ' </div></div>';
		$('.time-axis').append(htmll);
	
	});
});
