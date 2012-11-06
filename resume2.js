      function GUID ()
        {
            var S4 = function ()
            {
                return Math.floor(
                        Math.random() * 0x10000 /* 65536 */
                    ).toString(16);
            };
        
            return (
                    S4() + S4() + "-" +
                    S4() + "-" +
                    S4() + "-" +
                    S4() + "-" +
                    S4() + S4() + S4()
                );
        }

        function setGuid()
        {
            $("#session")[0].value = GUID();    
        }

// add startswith to javascript strings
if (typeof String.prototype.startsWith != 'function') {
  // see below for better implementation!
  String.prototype.startsWith = function (str){
    return this.indexOf(str) == 0;
  };
}
    
    
    //FORM VALIDATION
        function validateForm()
        {
        var x=document.forms["myForm"]["fname"].value;
        if (x==null || x=="")
          {
          alert("First name must be filled out");
          return false;
          }
        }
    
    // MAKE THE PHOTO DRAGGABLE
    
        function allowDrop(ev)
    {
    ev.preventDefault();
    }
    
    function drag(ev)
    {
    ev.dataTransfer.setData("Text",ev.target.id);
    }
    
    function drop(ev)
    {
    ev.preventDefault();
    var data=ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
    }


        
        
    //ADD A SEPARATOR
      function mySeparator()
    {
        
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    
      //Draw a red line at y=200
    ctx.strokeStyle="red";
    ctx.moveTo(5,200);
    ctx.lineTo(395,200);
    ctx.stroke();
    
    }



    //ADD COLOR
    function myFunctionColor()
    {
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    
    // Create gradient
    var grd=ctx.createLinearGradient(0,0,200,0);
    grd.addColorStop(0,"red");
    grd.addColorStop(1,"white");
    
    // Fill with gradient
    ctx.fillStyle=grd;
    ctx.fillRect(0,0,250,100);
    }


    //ADD NAME
    function myFunctionNameLine()
     {
        var vfname=document.getElementById('fname').value;
        var vlname=document.getElementById('lname').value;
        //alert(fname);
        
        var c=document.getElementById("myCanvas");
        var ctx=c.getContext("2d");
        
        ctx.fillStyle = "#ffc0c0";
        // For Testing Only So You Can See the Rectangle that will be Cleared 
        ctx.fillRect(10, 35, 290,100);
        
        //Clears the Line for New Text
        //ctx.clearRect(10, 35, 290,15);
        
        ctx.fillStyle = "#000000";
        ctx.font         = 'bold 20px sans-serif';
        ctx.fillText(vfname+ " " + vlname,10,50);    
        
        //Draw a red line at y=200
        ctx.strokeStyle="red";
        ctx.moveTo(10,55);
        ctx.lineTo(395,55);
        ctx.stroke();
            
        
    //writeDataUrl()
    }
    
    
     function myFunctionAddressLine1()
     {
          
        var vaddress1=document.getElementById('address1').value;
              
        var c=document.getElementById("myCanvas");
        var ctx=c.getContext("2d");
        
        ctx.fillStyle = "#c0ffc0";
        // For Testing Only So You Can See the Rectangle that will be Cleared 
        ctx.fillRect(10, 62, 290,10);
        
        //Clears the Line for New Text Rect(x, y, width,height)
        //ctx.clearRect(5, 50, 290,10);
        
        ctx.fillStyle = "#000000";
        ctx.font     = 'bold 10px sans-serif';
        ctx.fillText(vaddress1,10,70);          
            
        
   // writeDataUrl()
    }
    
    function myFunctionAddressLine2()
     {
        var vaddress2=document.getElementById('address2').value;
              
        var c=document.getElementById("myCanvas");
        var ctx=c.getContext("2d");
        
        ctx.fillStyle = "#c0ceff";
        // For Testing Only So You Can See the Rectangle that will be Cleared 
        ctx.fillRect(10, 75, 290,10);
        
        //Clears the Line for New Text
        //ctx.clearRect(10, 75, 290,10);
        
        ctx.fillStyle = "#000000";
        ctx.font     = 'bold 10px sans-serif';
        ctx.fillText(vaddress2,10,85);          
            
        
    //writeDataUrl()
    }
    
     function myFunctionCityLine()
     {
        var vcity=document.getElementById('city').value;
        var vstate=document.getElementById('state').value;
        var vzip=document.getElementById('zip').value;
    
        var c=document.getElementById("myCanvas");
        var ctx=c.getContext("2d");
        
        ctx.fillStyle = "#eeffc0";
        // For Testing Only So You Can See the Rectangle that will be Cleared 
        ctx.fillRect(10, 94, 290,10);
        
        //Clears the Line for New Text
        //ctx.clearRect(10, 70, 290,10);
        
        ctx.fillStyle = "#000000";
        ctx.font     = 'bold 10px sans-serif';
        ctx.fillText(vcity + ", " + vstate + " " + vzip,10,100);          
            
        
    //writeDataUrl()
    }
    
     function myFunctionCountryLine()
     {
        var vcountry=document.getElementById('country').value;
                
        var c=document.getElementById("myCanvas");
        var ctx=c.getContext("2d");
        
        ctx.fillStyle = "#c0c0c0";
        // For Testing Only So You Can See the Rectangle that will be Cleared 
        ctx.fillRect(10, 113, 290,10);
        
        //Clears the Line for New Text
        //ctx.clearRect(10, 80, 290,10);
        
        ctx.fillStyle = "#000000";
        ctx.font     = 'bold 10px sans-serif';
        ctx.fillText(vcountry,10,120);          
            
        
    //writeDataUrl()
    }
    
    
        
    function myFunctionPhoto()
    {
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    var img=document.getElementById("photo");
     //alert("hi");
    ctx.drawImage(img,10,10);
    }
    
    
    // loaded automatically on page load
window.onload = function() {
    var div = document.getElementById("canvasDiv");
    var canvas = document.getElementById("myCanvas");
    canvas.height = div.offsetHeight;
    canvas.width  = div.offsetWidth;
}

var writeDataUrl = function(){
     var c=document.getElementById("myCanvas");
    $('#dataurl')[0].value=    c.toDataURL();
       $("#session")[0].value = GUID();   
       $("#resformdata")[0].value = $(":input ").serializeArray()
}




function populatCanvasFromForm(){
    
    //alert("hi");
    var text = "";
   // var formAsArray = $("#resForm").serializeArray()
   // $.each(formAsArray,function(idx,x){text += x.name  +":" + x.value + "\n";}) HUGE STRING FOR NAME N ADDRESS

    //get a reference to the the canvas on the page and wrap it in the Fabric lib
    var canvas = new fabric.Canvas('myCanvas',{
                                                  backgroundColor: "#ffffff"
                                                });
      
    //Add the first block of text - CANDIATE Personal Information
    var vfname=document.getElementById('fname').value;
    var vlname=document.getElementById('lname').value;
    
    var vaddress1=document.getElementById('address1').value;
    var vaddress2=document.getElementById('address2').value;
    
    var vcity=document.getElementById('city').value;
    var vstate=document.getElementById('state').value;
    var vzip=document.getElementById('zip').value;
    
    var vcountry=document.getElementById('country').value;
               
      
    //BEGIN Candidate Name Section ----
        // BLOCK 1 Create the fabric text object for Cadidate First Name and Last Name
        var textObj = new fabric.Text(vfname + " " + vlname , { 
          fontFamily: 'DejaVu_Serif_400', 
          left: 10,
          top: 10,
          fontSize: 26,
         // textAlign: "left",
          fill:"#000000",  // Set text color to BLUE
          //backgroundColor: "#ffffff"
      });
    
          //compute the top and left Coordinates. NOTE that the Fabric js uses top,left for the CENTER of the object
          textObj.top = Math.floor(textObj.height /2) + 1;
          textObj.left = Math.floor(textObj.width /2) + 1;
          //Then ADD the textObj to the Canvas
          canvas.add(textObj);
    //END Candidate Name Section ----
        
        
     //BEGIN Candidate Address Section ----
          //BLOCK 2 Create the fabric text object for Cadidate ADDRESS
            var textObj2 = new fabric.Text(vaddress1 + "\n" + vaddress2  + "\n" + vcity + ", " + vstate  + " " + vzip + "\n" + vcountry, { 
              fontFamily: 'DejaVu_Serif_400', 
              left: 0,
              top: 0,
              fontSize: 20,
             // textAlign: "left",
              fill:"#000000",  // Set text color to BLUE
              //backgroundColor: "#ffffff"
          });
          
           //Calculate the CENTER of the object that needs to follow
          textObj2.top  = textObj.height + Math.floor(textObj2.height /2) + 5;
          //width is only dependant on this obj, not the previous one
          textObj2.left = Math.floor(textObj2.width /2) + 1;
      
          //Add THIRD obj to canvas
          canvas.add(textObj2);
    //END Candidate Address Section ----
    
    
    //BEGIN EMPLOYMENT Section(s) ----
          //Add next object dupe this for jobs
                //get all the form items - JOBS ONLY
          $("#job_history :input").each(function(idx,item){
             
                text += item.value + "\n"
          })
          
          
          var textObj3 = new fabric.Text(text, { 
              fontFamily: 'DejaVu_Serif_400', 
              left: 0,
              top: 0,
              fontSize: 16,
              textAlign: "left",
              fill:"#000000"  // Set text color to black
          });
          
          //Calculate the CENTER of the object that needs to follow
          textObj3.top  = textObj.height + textObj2.height + Math.floor(textObj3.height /2) + 10;
          //width is only dependant on this obj, not the previous one
          textObj3.left = Math.floor(textObj3.width /2) + 1;
      
          //Add THIRD obj to canvas
          canvas.add(textObj3);
    //END EMPLOYMENT Section(s) ----
      writeDataUrl();
}


//NEW Code for pinbutton
/*
1)  add         <script type="text/javascript" src="lib/pinterest-plus-html5.min.js">
2)where you want to button to show add:

      <div id="pin-it-button" class="pin-it-button" data-url="" data-image="" data-description=""></div>

3) wire up the form on the bottom of the page to call the createResumeImage
         <input type="button" onclick="createResumeImage()" value="Create image and see PIN button"/> (value does not matter)
*/

 //setup pintrest button
 function setupPin(pageUrl, imageUrl, descr){
     $("#pin-it-button").attr("data-url", pageUrl);
     $("#pin-it-button").attr("data-image", imageUrl);
     $("#pin-it-button").attr("data-description", descr);
     PinterestPlus.pinit()
  }
     
  //this call actually sends the data to the API and upon success renders the pin button
  function createResumeImage(){
      if ( $("#dataurl")[0].value.length < 10) {alert("No canvas data to send!");return}
      $.post('/api/save_resume',{dataurl: $("#dataurl")[0].value,session: $("#session")[0].value }, function(data) {
          var descr = document.getElementById('fname').value + "'s Resume";
          /*********
          *** NOTE: Page url is harccoded here
          */
          //data['ok'] will be the image url of the Resume as returned by the API call
          setupPin("http://pinxp.metrony.c9.io/index3-resFull.html", data['ok'],descr);
        });
  }