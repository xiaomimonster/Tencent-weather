/*
* @Author: 13350
* @Date:   2018-03-31 09:33:43
* @Last Modified by:   13350
* @Last Modified time: 2018-04-08 16:21:08
*/
// var weather;
// 请求吕梁天气情况的数据
$.ajax({
	url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=吕梁",
	dataType:"jsonp",
	type:"get",
	success:function(obj){
		weather=obj.data.weather;
		console.log(weather);
		// console.log(obj.data.weather.city_name);
	}
})
var City;
$.ajax({
	url:"https://www.toutiao.com/stream/widget/local_weather/city/",
	dataType:"jsonp",
	type:"get",
	success:function(obj){
		City=obj.data;
		console.log(obj.data);
	}
})
// 渲染数据
//      函数名
function updata(){
	// 城市名称
	var city_name=document.querySelector(".city");
	city_name.innerHTML=weather.city_name;

	// 当前温度
	var temperature=document.querySelector(".temperature");
	temperature.innerHTML=weather.current_temperature+"°";
	// console.log(temperature);
	// 当前天气情况
	var condition=document.querySelector(".condition");
    condition.innerHTML=weather.current_condition;
    // 今天最高温
    var dat_high_temperature=document.querySelector("#dat_high_temperature");
    dat_high_temperature.innerHTML=weather.dat_high_temperature;
    // console.log(dat_high_temperature);
    // 今天最低温
    var dat_low_temperature=document.querySelector("#dat_low_temperature");
    dat_low_temperature.innerHTML=weather.dat_low_temperature+"°";
    // 今天天气情况
    var dat_condition=document.querySelector(".bottom-text");
    dat_condition.innerHTML=weather.dat_condition;
    // 今天icon
    var dat_weather_icon_id=document.querySelector(".img");
    dat_weather_icon_id.style=`background-image:url(img/${weather.dat_weather_icon_id}.png)`;
    // 明天最高温
    var tomorrow_high_temperature=document.querySelector("#tomorrow_high_temperature");
    tomorrow_high_temperature.innerHTML=weather.tomorrow_high_temperature;
    // 明天最低温
    var tomorrow_low_temperature=document.querySelector("#tomorrow_low_temperature");
    tomorrow_low_temperature.innerHTML=weather.tomorrow_low_temperature+"°";
    // 明天天气情况
    var tomorrow_condition=document.querySelector("#tomorrow_condition");
    tomorrow_condition.innerHTML=weather.tomorrow_condition;
    // 明天icon
    var tomorrow_weather_icon_id=document.querySelectorAll(".tomorrow-img");
    tomorrow_weather_icon_id.style=`background-image:url(img/${weather.tomorrow_weather_icon_id}.png)`;
    // 数组类型对象
    // i代表数组下表
    // weather.hourly_forecast[i]  代表数组中的每一个元素
    for(var i in weather.hourly_forecast){
    	// 创建now元素
    	// 1.创建div
    	var now=document.createElement("div");
    	// 2.添加类名
    	now.className="now";
    	// 3.插入到页面中
    	var wrap=document.querySelector(".wrap");
    	// 将now插入到页面中
    	wrap.appendChild(now);
        // 没有命名的标签需要命名之后再插入
    	// var now=document.createElement("li");
    	// var wrap=document.querySelector(".wrap");
    	// wrap.appendChild(now);
    	// 创建时间元素
    	var h2=document.createElement("h2");
    	h2.className="now-time";
    	h2.innerHTML=weather.hourly_forecast[i].hour+":00";
    	now.appendChild(h2);
        // 创建图片
    	var icon=document.createElement("div");
        icon.className="now-icon";
    	icon.style=`background-image:url(img/${weather.hourly_forecast[i].weather_icon_id}.png)`;
    	now.appendChild(icon);
        // 创建温度
    	var temp=document.createElement("temp");
    	temp.className="now-temp";
    	temp.innerHTML=weather.hourly_forecast[i].temperature+"°";
    	now.appendChild(temp);
    }
    // 渲染近期的天气
    for(var j in weather.forecast_list){
    	// 创建con
    	var con=document.createElement("div");
        con.className="content";
        var wrap1=document.querySelector(".wrap1");
        wrap1.appendChild(con);


        // var a="2018-04-01";
        // var b=a.slice(5, 7);
        // console.log(b);
        // var c=a.slice(8,10);
        // console.log(c);
        // var d=b+"/"+c;
        // console.log(d);

        // 创建日期
        var date=document.createElement("div");
        date.className="content-date";
        date.innerHTML=weather.forecast_list[j].date.slice(5,7)+"/"+weather.forecast_list[j].date.slice(8);
        con.appendChild(date);
        // 创建天气情况
        var weaH=document.createElement("div");
        weaH.className="content-weaH";
        weaH.innerHTML=weather.forecast_list[j].condition;
        con.appendChild(weaH);
        // 创建icon
        var picH=document.createElement("div");
        picH.className="content-picH";
        picH.style=`background-image:url(img/${weather.forecast_list[j].weather_icon_id}.png)`;
        con.appendChild(picH);
        // 创建最高温
        var high=document.createElement("div");
        high.className="content-high";
        high.innerHTML=weather.forecast_list[j].high_temperature;
        con.appendChild(high);
        // 创建最低温
        var low=document.createElement("div");
        low.className="content-low";
        low.innerHTML=weather.forecast_list[j].low_temperature;
        con.appendChild(low);
        // 创建icon-
        var picL=document.createElement("div");
        picL.className="content-picL";
        picL.style=`background-image:url(img/${weather.forecast_list[j].weather_icon_id}.png)`;
        con.appendChild(picL);
        // 创建天气情况-
        var weaL=document.createElement("div");
        weaL.className="content-weaL";
        weaL.innerHTML=weather.forecast_list[j].condition;
        con.appendChild(weaL);
        // 创建风向
        var wind=document.createElement("div");
        wind.className="content-wind";
        wind.innerHTML=weather.forecast_list[j].wind_direction;
        con.appendChild(wind);
        // 创建风级
        var level=document.createElement("div");
        level.className="content-level";
        level.innerHTML=weather.forecast_list[j].wind_level;
        con.appendChild(level);

    }
    // 渲染城市
    for(var m in City){
        console.log(m);
        var h1=document.createElement("h1");
        h1.className="title1";
        h1.innerHTML=m;
        var city1=document.querySelector(".City");
        city1.appendChild(h1);


        // 创建City;
        var title1=document.createElement("div");
        title1.className="title1";
        city1.appendChild(title1);

        // 输出
        for(var n in City[m]){
            var City_box=document.createElement("div");
            City_box.className="City-box";
            City_box.innerHTML=n;
            title1.appendChild(City_box);
        }

    }


}
// 函数
// 请求各城市天气情况
function AJAX(str){
    var url1=`https://www.toutiao.com/stream/widget/local_weather/data/?city=${str}`;
    $.ajax({
        url:url1,
        dataType:"jsonp",
        type:"get",
        success:function(obj){
            weather=obj.data.weather;
            updata();
            $(".loaction").css({"display":"none"});
        }
    })
}
// 创建天气情况-
var weaL=document.createElement("div")
// 页面加载完成以后执行
window.onload=function(){
    updata();
    $(".City-box").on("click",function(){
        var cityh=this.innerHTML;
        AJAX(cityh);
    })
    $(".city").on("click",function(){
        $(".loaction").css({"display":"block"});
    })
    // 输入框获取焦点，按钮内容变搜索
    $("input").on("focus",function(){
        $(".section-right").html("搜索");
    })
    // 操作按钮
    var button=document.querySelector(".section-right");
    // console.log(button);
    // 点击  取消  loaction消失  搜索  str1=="城市名称n"   弹出
    button.onclick=function(){
        // 获取section-right文本内容
        var text=button.innerText;
        console.log(text);      
        if(text=="取消"){
            $(".loaction").css({"display":"none"});
        }
        else{
            // 获取input中的内容
            var str1=document.querySelector("input").value;
            // 比较二级城市名
            for(var i in City){
                for(var j in City[i]){
                    if(str1==j){
                        AJAX(str1);
                        return;
                    }
                }
            }
            alert("没有该城市");  
        }
    }
}
