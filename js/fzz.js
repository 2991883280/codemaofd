//这是要遍历时间轴的数据
var dimeAxis=[{
	date:'2020.10.5',
	title:'维帆社东山再起，冷鱼闲风担任社长，开始正式对外招人！',
	achievement:''
},{
	date:'2020.10.5',
	title:'维帆社网站建设完成，正式向外公布！',
	achievement:''
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










