<template>
<div class="callbacks_container">
	<ul class="rslides" id="slider">
		<li><a href="banner_xqy.html"><img src="../assets/images/pic_home_slider_1.jpg"></a></li>
		<li><a href="banner_xqy.html"><img src="../assets/images/pic_home_slider_2.jpg"></a></li>
		<li><a href="banner_xqy.html"><img src="../assets/images/pic_home_slider_3.jpg"></a></li>
		<li><a href="banner_xqy.html"><img src="../assets/images/pic_home_slider_4.jpg"></a></li>
        <li><a href="banner_xqy.html"><img src="../assets/images/pic_home_slider_2.jpg"></a></li>
    </ul>
</div>
</template>


<style scoped>
 @import url(../assets/css/banner.css);
</style>


<script>
   import  '../assets/js/responsiveslides.min.js';
    export default{
        mounted() {
         $(function () {
            $("#slider").responsiveSlides({
                auto: true,
                pager: false,
                nav: true,
                speed: 500,
                timeout:4000,
                pager: true, 
                pauseControls: true,
                namespace: "callbacks"
            });
        });
    }
}


</script>