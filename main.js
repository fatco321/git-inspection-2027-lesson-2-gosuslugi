$(function(){
 let active=null;
 function close(){if(!active)return;active.find('.illustration__dropdown').stop(true,true).hide().css({height:'',maxHeight:'',overflow:''});active.find('.illustration__dot').attr('aria-expanded','false');active.css('z-index','');active=null;}
 function show(dot){
  const parent=$(dot).parent(),box=parent.find('.illustration__dropdown');
  if(active&&active[0]===parent[0]&&box.is(':visible'))return;
  close();active=parent;parent.css('z-index',4);$(dot).attr('aria-expanded','true');
  box.removeClass('illustration__dropdown--opposite-left illustration__dropdown--opposite-top').css({display:'block',height:'auto',maxHeight:'none',overflow:'visible',width:'',left:'',right:'',top:'',bottom:''});
  if(innerWidth>575){
   const r=dot.getBoundingClientRect(),w=Math.min(360,innerWidth-32);
   box.css({position:'absolute',width:w,maxWidth:w,left:Math.max(16-r.left,Math.min(0,innerWidth-16-r.left-w)),top:22,bottom:'auto',right:'auto'});
   const h=box.outerHeight();if(r.bottom+22+h>innerHeight&&r.top>h+16)box.css({top:'auto',bottom:32});
  }
 }
 $('.illustration__dot').on('mouseenter focus click',function(){show(this)});
 $('.illustration__prompt').on('mouseleave',function(){if(active?.[0]===this)close()});
 $('.illustration__dropdown-close').on('click',close);
 $(document).on('keydown',e=>{if(e.key==='Escape')close()}).on('click',e=>{if(!$(e.target).closest('.illustration__prompt').length)close()});
 $(window).on('resize',close);
 const script=document.createElement('script');script.src='./iframeResizer.contentWindow.min.js';document.body.append(script);
});
