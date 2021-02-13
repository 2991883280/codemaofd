//这是要遍历视频轴的数据
var dimeAxis=[
	

]


 
$(function(){
	$.each(dimeAxis,function(i,e){
		
			$('.time-axis').empty();
var htmll='<div class="video">'+
              '<h1>'+e.title+'</h1>'+
			  '<hr  size="15px" color="#777777">'+
      '<p>  '+e.js+'</p>'+
	  '<input onclick="tz('+e.url+')" type="button" value="查看视频" class="an"> '+
         ' </div></div>';
		$('.time-axis').append(htmll);
	
	});
});
