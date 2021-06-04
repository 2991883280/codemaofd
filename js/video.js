//这是要遍历视频轴的数据
var dimeAxis=[
	{
	url:'https://www.bilibili.com/video/BV1WK411V7dn',
	js:'社长推荐！这系列教程视频全免费，并且讲的很详细，非常适合入门者。作者：阿发你好AF',
	title:'Unity2020入门教程 2D/3D游戏开发'
},
{
	url:'https://www.bilibili.com/video/BV1Wz4y1m7C9/',
	js:'类似AI大黄鸡的自动化到作品评论区进行评论的实现方法，使用python制作，简单方便，快来试试吧！作者：冷鱼闲风。',
	title:'编程猫作品AI评论【批量】'
},
	{
	url:'https://www.bilibili.com/video/BV18h411D7eF',
	js:'【小心Q群机器人】【酷Q祭】在许多群中混入一些人，但是他就是不说话，我们也就不管他，他可能会获取群里面的聊天记录哦！如果对于工作群，情报群等涉及隐私的聊天，如果拉入其他人（也可能是机器人哦！）就会成为一个间谍了。这次我用酷Q搭建的机器人然后再配合post数据提交到云端，随时随地获取群聊信息。。。然而你并不知情。。。。（所以在群里遇到可疑人物或者百年不说话而且是比较重要的群聊请及时T出！）作者：冷鱼闲风。',
	title:'【酷Q祭】一个机器人插件，数据全泄露。'
},
	

]


 
$(function(){
	$.each(dimeAxis,function(i,e){
		
			
		if(i==0){$('.time-axis').empty();}
var htmll='<div class="video">'+
              '<h1>'+e.title+'</h1>'+
			  '<hr  size="15px" color="#777777">'+
      '<p>  '+e.js+'</p>'+
	  '<a href="'+e.url+'" target="_blank"><input  type="button" value="查看视频" class="an"></a> '+
         ' </div></div>';
		$('.time-axis').append(htmll);
	
	});
});
