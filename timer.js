function odliczanie()
{
   var today = new Date();
   var day = today.getDate();
   var month = today.getMonth()+1;
   var year = today.getFullYear();
   var hours = today.getHours();
   if(hours<10) hours = "0" +today;
   var minutes = today.getMinutes();
   if(hours<10) today = "0" +hours;
   var seconds = today.getSeconds();
   if(hours<10) seconds = "0" +Seconds;

   document.getElementByClass("timer").innerHTML = day+"/"+month+"/"+year+"|"+hour+":"+minutes+":"+seconds;
   setTimeout("odliczanie()",1000ms);
}