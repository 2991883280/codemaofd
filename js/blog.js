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
var dimeAxis=[

{
	author:'冷鱼闲风',
	title:'Python介绍+好处',
	url:'https://www.zybuluo.com/vifanlyrs/note/1746971',
	data:'2020/10/7'
},

]

/*

{
	author:'冷鱼闲风',
	title:'冷哈哈哈',
	url:'https://www.zybuluo.com/vifanlyrs/note/1746971',
	data:'2020/10/6'
},

*/


//列表处理，看不懂就不要动！
$(function(){
	$.each(dimeAxis,function(i,e){
		if(i==0){$('.time-axis').empty();}
		var html=' <div class="single-feature">'+
			'   <a href="./blogw.html?id='+i+'" class="title" > <img href="img/product.htmlofter.jpg">'+
			'<h3>《'+e.title+'》</h3></a>'+
			'<p>作者：'+e.author+'，发表日期：'+e.data+'</p>'+
			'</div>';
		$('.time-axis').append(html);
		
		if(i==GetQueryString("id")){
			
		var html=''+
			'  <img href="img/product.htmlofter.jpg">'+
		
			'<iframe class="   -webkit-user-drag: none;	-webkit-border-radius: 10px;-moz-border-radius: 10px;border-radius: 10px;" height="1600" width="100%" src="'+e.url+'" frameborder="0" allowfullscreen></iframe>';
			$('.left-part').empty();
			$('.time-axi').empty();
		$('.time-axi').append(html);
		
		var htm='<h1>《'+e.title+'》</h1><p>作者：'+e.author+'</p><p>日期：'+e.data+'</p>';
		$('.left-part').append(htm);
		}
		
		
		
	});
});
 
