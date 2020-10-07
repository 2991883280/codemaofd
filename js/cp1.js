//这是要遍历产品轴的数据
var dimeAxis=[

{
	data:'（半成品）压缩包里面有说明，拿去参考把~',
	title:'鼠标闯关-py源',
	author:'陈年老按',
	url:'https://www.lanzoux.com/i63YIh8n5mf'
},	
	
{
	data:'聚合编程猫社区<20条API，获取/提交数据更简单~',
	title:'编程猫社区API库-py源',
	author:'冷鱼闲风',
	url:'https://www.lanzoux.com/iCiVhh7edpg'
},
{
	data:'自动发送多条一言消息到指定作品评论区！',
	title:'编程猫社区作品一言评论-py源',
	author:'冷鱼闲风',
	url:'https://www.lanzoux.com/ievquh7ebva'
},
{
	data:'一个可以支持批量翻译文本的应用。',
	title:'有道翻译器-py源',
	author:'冷鱼闲风',
	url:'https://www.lanzoux.com/iIFjbh7e15e'
},{
	data:'自动回复指定作品下的评论。做到15s内秒回~',
	title:'AI 编程猫社区作品评论机器人-py源',
	author:'冷鱼闲风',
	url:'https://www.lanzoux.com/iCqCsh7e7yj'
},
]

$(function(){
	$.each(dimeAxis,function(i,e){
			if(i==0){$('.time-axis').empty();
		var ht=' <br><p style="width: 100%;text-align: center;font-size: 50px;height: 40px;color:#000000;font-weight:600;">最新作品</p>';
			$('.time-a').append(ht);
		}
		
		if(i<5){
			
	var html=' <div class="single-feature">'+
			'   <a href="'+e.url+'" class="title" > <img href="img/product.htmlofter.jpg">'+
			'<h3>《'+e.title+'》</h3></a>'+
			'<p>作者：'+e.author+'，介绍：'+e.data+'</p>'+
			'</div>';
		$('.time-a').append(html);
		
		}
		
		
		
		
		
		
		
		
		
		var html=' <div class="single-feature">'+
			'   <a href="'+e.url+'" class="title" target="_blank"> <img href="img/product.htmlofter.jpg">'+
			'<h3>'+e.title+'</h3></a>'+
			'<p>'+e.data+'</p>'+
			'</div>';
		$('.time-axis').append(html);
	});
});
 
