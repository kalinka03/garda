function city_map_hostel(){var i=[45.671119,10.744817],e=new google.maps.MarkerImage("img/city/block3/Map.svg",null,null,null,new google.maps.Size(62,88)),t='<div id="content-city"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading">Дезенцано дель Гарда</h1><div id="bodyContent"><img src="img/city/block3/foto-sity.png"> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. </p><a href="#">Узнать больше</a> </div></div>';$("#test2").gmap3({center:i,zoom:10,mapTypeId:google.maps.MapTypeId.ROADMAP}).marker({position:[45.687863,10.657001],icon:e}).infowindow({content:t}).then(function(i){var e=this.get(0),t=this.get(1);t.addListener("click",function(){i.open(e,t)})})}$(function(){city_map_hostel()});