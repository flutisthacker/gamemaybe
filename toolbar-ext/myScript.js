var url = chrome.extension.getURL("toolbar.html")
var height="35px";
console.log("myscript run")
// var iframe= "<iframe src='"+url+"' id='myowncustomtoolabar' style='height:'"+height+"></iframe>";
var iframe=document.createElement("iframe")
iframe.src=url
iframe.id="myowncustomtoolbar"
iframe.style.height=height
// document.body.prepend(iframe)
$("html").append(iframe)
$("body").css({
  "transform":"translateY("+height+")"
})



// document.body.prepend(iframe)
// document.getElementsByTagName("body").style= "transform:translateY(35px)";
