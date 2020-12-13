//这是要遍历时间轴的数据
var dimeAxis=[{
	date:'2020.10.5',
	title:'维帆社东山再起，冷鱼闲风担任社长，网站开始建设',
	achievement:''
},{
	date:'2020.10.8',
	title:'维帆社网站建设完成，正式向外公布！并且开始招人',
	achievement:''
},{
	date:'2020.10.25',
	title:'bcmapi库（Python）完成升级，开发者：SS_LMgXn，冷鱼闲风',
	achievement:'库文档：<a href="http://doc.viyrs.com">http://doc.viyrs.com</a>'
},
{
	date:'2020.12.12',
	title:'编程猫个人大数据生成器发布，开发者：冷鱼闲风',
	achievement:'数据是由Python+Wed交互生成，在本地即可生成，生成速度快。'
},

]
//以下是样式，一般不用改动，看不懂就算了，反正到时候都要重写
$(function(){
	$.each(dimeAxis,function(i,e){
		var html='<li class="time-axis-item">'+
			'<div class="time-axis-date">'+e.date+'<span></span></div>'+
			'<div class="time-axis-title">'+e.title+'</div>'+
			'<p class="time-axis-achievement">'+e.achievement+'</p>'+
			'</li>';
		$('.time-axis').append(html);
	});
});










