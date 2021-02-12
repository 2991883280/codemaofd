//这是要遍历产品轴的数据
var dimeAxis=[

	{
	data:'设计符号个性昵称工具，涵盖了全网特殊字符、独家花样符号',
	title:'字符君(安卓)',
	author:'小F',
	url:'https://lanzous.com/icooogf'
},
		{
	data:'超好用的影视APP，内容涵盖全网非常全面！每天推荐精品',
	title:'大鱼影视-破解版(安卓)',
	author:'小F',
	url:'https://lanzous.com/id4348h'
},
		{
	data:'分散程序集成安装包，简单而快速打包',
	title:'PC程序打包成安装包',
	author:'冷鱼闲风',
	url:'https://lanzous.com/iNlw2had20h'
},
		{
	data:'我在逗帆时开发的SDK，一键式对接图灵机器人！',
	title:'逗帆图灵机器人对接动态网站SDK',
	author:'冷鱼闲风',
	url:'https://lanzous.com/iHgufhacqdi'
},
		{
	data:'建立一个网站商店就是如此简单',
	title:'阿里子订单系统破解版网站动态源码',
	author:'冷鱼闲风',
	url:'https://lanzous.com/ijulXhacqaf'
},
	
		{
	data:'可以调用系统TTS哦！',
	title:'语言交互TTS网站静态源码',
	author:'冷鱼闲风',
	url:'https://lanzous.com/iD5JChacpyd'
},
	
	
	
	{
	data:'有趣的图片动起来，配音乐哦~',
	title:'让你的图片动起来网站静态源码',
	author:'冷鱼闲风',
	url:'https://lanzous.com/iTAL5hacprg'
},
	
	
		
{
	data:'防站工具，超好用的网站另存为',
	title:'网站依赖文件一键式保存',
	author:'冷鱼闲风',
	url:'https://lanzous.com/iukkGhacppe'
},
	
	
	
{
	data:'这本电子书是搬过来的',
	title:'算法导论(原书第3版) 中文完整版',
	author:'33工作',
	url:'https://lanzous.com/iQiQkh9uokf'
},	
{
	data:'（半成品）压缩包里面有说明，拿去参考把~',
	title:'鼠标闯关-py源',
	author:'陈年老桉',
	url:'https://lanzous.com/i63YIh8n5mf'
},	
{
	data:'聚合编程猫社区<20条API，获取/提交数据更简单~',
	title:'编程猫社区API库-py源文件',
	author:'冷鱼闲风',
	url:'https://lanzous.com/iCiVhh7edpg'
},


{
	data:'自动发送多条一言消息到指定作品评论区！',
	title:'编程猫社区作品一言评论-py源文件',
	author:'冷鱼闲风',
	url:'https://lanzous.com/ievquh7ebva'
},
{
	data:'一个可以支持批量翻译文本的应用。',
	title:'有道翻译器-py源文件',
	author:'冷鱼闲风',
	url:'https://lanzous.com/iIFjbh7e15e'
},{
	data:'自动回复指定作品下的评论。做到15s内秒回~',
	title:'AI 编程猫社区作品评论机器人-py源文件',
	author:'冷鱼闲风',
	url:'https://lanzous.com/iCqCsh7e7yj'
},
]

$(function(){
	$.each(dimeAxis,function(i,e){
		
			if(i==0){
				$('.time-axis').empty();
			
		var ht=' <br><p style="width: 100%;text-align: center;font-size: 50px;height: 40px;color:#000000;font-weight:600;">最新文件</p>';
			$('.time-a').append(ht);
		}
		
		
		
								
var html=' <div class="single-feature">'+
			'   <a href="'+e.url+'" class="title" target="_blank"> <img href="img/product.htmlofter.jpg">'+
			'<h3>《'+e.title+'》</h3></a>'+
				'<p>发布者：'+e.author+'，介绍：'+e.data+'</p>'+
			'</div>';
		$('.time-axis').append(html);
		
	

		   

		

		
		if(i<5){
			
	var html=' <div class="single-feature">'+
			'   <a href="'+e.url+'" class="title" > <img href="img/product.htmlofter.jpg">'+
			'<h3>《'+e.title+'》</h3></a>'+
			'<p>发布者：'+e.author+'，介绍：'+e.data+'</p>'+
			'</div>';
		$('.time-a').append(html);
				

		
		}
		
		

		
		
		
		
		
		
		
		




		
		
		
	});
});
 
 
 
 
$(function(){
	$.each(dimeAxis,function(i,e){
 
		if(e.author==GetQueryString("name")){
			
var htmll=' <div class="single-feature">'+
			'   <a href="'+e.url+'" class="title" target="_blank"> <img href="img/product.htmlofter.jpg">'+
			'<h3>《'+e.title+'》</h3></a>'+
				'<p>介绍：'+e.data+'</p>'+
			'</div>';
		$('.grzp').append(htmll);


		}
		
		
		
	});
			
		
	});
