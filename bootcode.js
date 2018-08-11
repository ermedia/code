(function() { var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true; po.src = 'https://apis.google.com/js/platform.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s); })();

function openBlog() {
	document.getElementById("blog").style.display="block";
	document.getElementById("landing-blog").style.display="none";
} 

function resetScroller(e){var o=window.pageYOffset,n=document.getElementById(e).offsetTop,r=setTimeout("resetScroller('"+e+"')",speed);o>n?(scrollY=o-distance,window.scroll(0,scrollY)):clearTimeout(r)}var appended=!1,bookmark2=document.createElement("div");bookmark2.id="backto-top",bookmark2.innerHTML='<div id="backtotop" onclick="return false;" onmousedown="resetScroller(&quot;judulblog&quot;);"></div>',onscroll=function(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>600?appended||(document.body.appendChild(bookmark2),appended=!0):appended&&(document.body.removeChild(bookmark2),appended=!1)};var scrollY=0,distance=40,speed=24;

function openSosprofil(){var e=document.getElementById("search-box");"block"!==e.style.display?e.style.display="block":e.style.display="none";var e=document.getElementById("close-icon");"block"!==e.style.display?e.style.display="block":e.style.display="none";var e=document.getElementById("menupage");"none"!==e.style.display?e.style.display="none":e.style.display="block";var e=document.getElementById("search-icon");"none"!==e.style.display?e.style.display="none":e.style.display="block"};

function toggle_visibility() {
	document.getElementById("blog").style.display="none";
	document.getElementById("landing-blog").style.display="block";
}

var imgDefer=document.getElementsByTagName("img");for(var i=0;i<imgDefer.length;i++){if(imgDefer[i].getAttribute("data-src")){imgDefer[i].setAttribute("src",imgDefer[i].getAttribute("data-src"))}};

var vidDefer = document.getElementsByTagName('iframe');
for (var i=0; i<vidDefer.length; i++) {
if(vidDefer[i].getAttribute('data-src')) {
vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
} };

function resizeThumb(e,t,g){for(var m=document.getElementById(e),r=m.getElementsByTagName("img"),s=0;s<r.length;s++)r[s].src=r[s].src.replace(/\/s72\-c/,"/s"+t),r[s].width=t,r[s].height=g}resizeThumb("PopularPosts1",90,70);

function openMobilemenu(){var e=document.getElementById("judulblog");"block"!==e.style.display?e.style.display="block":e.style.display="none"};

var _0x4daf=["54\x65\x6d\x70\x6c\x61\x74\x65\x20\x62\x79\x20\x3c\x61\x20\x68\x72\x65\x66\x3d\x27\x2f\x2f\x77\x77\x77\x2e\x6f\x6e\x69\x65\x78\x6d\x65\x64\x69\x61\x2e\x63\x6f\x6d\x2f\x27\x20\x74\x61\x72\x67\x65\x74\x3d\x27\x5f\x62\x6c\x61\x6e\x6b\x27\x20\x74\x69\x74\x6c\x65\x3d\x27\x4f\x6e\x69\x65\x78\x20\x4d\x65\x64\x69\x61\x27\x3e\x4f\x6e\x69\x65\x78\x20\x4d\x65\x64\x69\x61\x3c\x2f\x61\x3e"];(function printMsg(){var _0xf426x2=document[_0x4daf[1]](_0x4daf[0]);_0xf426x2[_0x4daf[2]]=_0x4daf[3]})()
