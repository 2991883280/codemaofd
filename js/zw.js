//这是要遍历职位轴的数据
var dimeAxis=[
{
	name:'前端技术员',
	bm:'技术部门',
	bmz:'暂无',
	gznr:'1、使用 HTML/CSS/JS/Nodejs 等各种 Web 前端技术进行移动端、PC端界面开发；<br>2、整体页面结构及样式层结构的设计、优化；<br>3、在团队的代码格式、结构的规定下，编写易读、易维护、高质量、高效率的代码；<br>4、具有良好的沟通能力、团队配合精神，对新技术敏感。<br>5、负责维护及优化各相关网站、业务系统开发。<br>6、有微信小程序、H5项目开发经验优先考虑；<br>7、熟悉jQuery、vue、AJAX其中一种<br>8、熟练运用CSS3新特性，熟悉HTML5较新规范；能够熟练运用HTML5特性构建移动端的WebApp；<br>9、具有丰富经验优先考虑；<br>10、开发效率高、抗压能力强。',
	zwdj:'职务等级：技术员--高级技术员--首席技术员'
},	
{
	name:'后端技术员',
	bm:'技术部门',
	bmz:'暂无',
	gznr:'1、熟练掌握PHP/SQL和前后端交互<br>2、掌握MyPhpAdmin/MySql操作<br>3、掌握前端开发技术优先考虑<br>4、具有良好的沟通能力、团队配合精神，对新技术敏感。<br>5、负责维护及优化各相关网站、业务系统开发。<br>6、有H5项目开发经验优先考虑<br>7、熟练PHP语言编写规范，懂得使用新特性<br>8、开发效率高，抗压能力强。',
	zwdj:'职务等级：技术员--高级技术员--首席技术员'
},	

{
	name:'网络安全技术员',
	bm:'技术部门',
	bmz:'暂无',
	gznr:'1、精通网络安全技术：包括端口、服务漏洞扫描、程序漏洞分析检测、权限管理、入侵和攻击分析追踪、网站渗透、病毒木马防范等<br>2、熟悉tcp/ip协议，熟悉sql注入原理和手工检测、熟悉内存缓冲区溢出原理和防范措施、熟悉信息存储和传输安全、熟悉数据包结构、熟悉ddos攻击类型和原理有一定的ddos攻防经验，熟悉iis安全设置、熟悉ipsec、组策略等系统安全设置<br>3、熟悉windows或linux系统，精通php/shell/perl/python/c/c++ 等至少一种语言<br>4、了解主流网络安全产品{如fw（firewall）、ids（入侵检测系统）、scanner（扫描仪）、audit等}的配置及使用<br>7、善于表达沟通，诚实守信，责任心强，讲求效率，具有良好的团队协作精神<br>8、负责解决程序漏洞优化问题，及时给出解决方案',
	zwdj:'职务等级：技术员--高级技术员--首席技术员'
},	

{
	name:'算法设计技术员',
	bm:'技术部门',
	bmz:'33工作',
	gznr:'1.暂无需求',
	zwdj:'职务等级：技术员--高级技术员--首席技术员'
},	

{
	name:'Python游戏技术员',
	bm:'技术部门',
	bmz:'陈年老桉',
	gznr:'1、暂无需求',
	zwdj:'职务等级：技术员--高级技术员--首席技术员'
},	
{
	name:'Python软件技术员',
	bm:'技术部门',
	bmz:'暂无',
	gznr:'1、暂无需求',
	zwdj:'职务等级：技术员--高级技术员--首席技术员'
},	

{
	name:'安卓技术员',
	bm:'技术部门',
	bmz:'暂无',
	gznr:'1、暂无需求',
	zwdj:'职务等级：技术员--高级技术员--首席技术员'
},	

{
	name:'嵌入式技术员',
	bm:'技术部门',
	bmz:'暂无',
	gznr:'1、暂无需求',
	zwdj:'职务等级：技术员--高级技术员--首席技术员'
},

{
	name:'插画师',
	bm:'艺术部门',
	bmz:'暂无',
	gznr:'1、熟练掌握设计软件：PS / AI / SAI等和手绘技能<br>2、对IP行业了解并有自己独到的见解<br>3、有较强的执行力和良好的学习能力，敏锐的设计观察及良好的审美<br>4、思维活跃有创新意识<br>5、掌握多种插画风格，尤其擅长萌系风格<br>6、负责项目的漫画创作工作<br>7、有良好的绘画能力<br>7、美术生或作品优秀者优先考虑',
	zwdj:'职务等级：技术员--高级技术员--首席技术员'
},
{
	name:'UI设计师',
	bm:'艺术部门',
	bmz:'冷鱼闲风',
	gznr:'1、美术生或作品优秀者优先考虑<br>2、具有独立完成项目视觉风格推导及实现的经验<br>3、具有体系化的设计理论与娴熟的设计技巧，善于捕捉设计流行趋势<br>4、熟练掌握绘图工具软件PS、AI、Sketch、AE，手绘与C4D<br>5、熟悉iOS/Android/PC Web平台设计规范。熟知用户体验，用户心理学<br>6、 注重设计细节，拥有持续学习力，抗压能力强，有责任心，自律，有高度有追求',
	zwdj:'职务等级：技术员--高级技术员--首席技术员'
},
{
	name:'UX规划师',
	bm:'技术部门',
	bmz:'暂无',
	gznr:'1、了解用户行为，懂得从用户习惯出发<br>2、熟知用户体验，给出软件优化建议<br>3、懂得心理学',
	zwdj:'职务等级：技术员--高级技术员--首席技术员'
},
{
	name:'人事管理员',
	bm:'管理部门',
	bmz:'暂无',
	gznr:'1、社团人数/表单数据查询/宣传招新等管理<br>2、维护社团Q群秩序，按规定奖惩，清理活跃度低成员（最后回复>=1个月，特殊要求除外）且告知社长<br>3、招新的人名单及时给相应的部长，让相应的部长审核<br>4、善于表达沟通，诚实守信，责任心强，讲求效率，具有良好的团队协作精神',
	zwdj:'职务等级：技术员--高级技术员--首席技术员'
},
{
	name:'社团规划师',
	bm:'管理部门',
	bmz:'暂无',
	gznr:'1、根据当前社团情况规范发展规划<br>2、根据当前社团缺点给出解决方案，社团章程定制/修改<br>3、善于表达沟通，诚实守信，责任心强，讲求效率，具有良好的团队协作精神',
	zwdj:'职务等级：技术员--高级技术员--首席技术员'
},
{
	name:'技术员助理',
	bm:'管理部门',
	bmz:'暂无',
	gznr:'1、协助其他技术员/管理员的需求<br>2、善于表达沟通，诚实守信，责任心强，讲求效率，具有良好的团队协作精神',
	zwdj:'职务等级：技术员--高级技术员--首席技术员'
},

]


 
 
 
 	
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

 
 
 
 
 
 
$(function(){
	$.each(dimeAxis,function(i,e){
 if(e.name==GetQueryString("name")){

				$('.name').empty();
var htmll='<h1>'+e.name+'</h1><br><br><br>';
		$('.name').append(htmll);


		$('.zw').empty();
var htmll='<p>'+e.bm+'</p>';
		$('.zw').append(htmll);
		
		
		
		$('.nl').empty();
var htmll='<p>'+e.bmz+'</p>';
		$('.nl').append(htmll);
		
		
		
		
		$('.nr').empty();
var htmll='<p>'+e.gznr+'</p>';
		$('.nr').append(htmll);

		
 }
		
	});
			
		
	});
