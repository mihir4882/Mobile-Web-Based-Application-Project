function readRecords()
{
 $.ajax(
 {
  type:'GET',
  url:'ajaxjson.json',
  dataType:'json',
  success:fetchRecords  
 });
} 
function fetchRecords(data)
{
  
  var inp=$("#search").val();    

   // Countries with atleast 100000 cases
  var found=false;
  var info="";
  for(var x of data.countries)
  {
	 if(x.tc>=inp)
	 {
		info+=`<li>Total Cases:=${x.name}</li>`;
		found=true;
		
	 }		 
  }
   if(found===false)
   {
	  $("ul").empty();
      $("ul").append("<li>No such country !</li>");	  
   }
   else
   {
	  $("ul").empty();
      $("ul").append(info); 
   }
}
  

  