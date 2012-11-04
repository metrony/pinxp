			$(document).ready(function(){
				
				//Activate the main dynamic form
				var mainDynamicForm = $("#people").dynamicForm("#plus", "#minus", {
					limit:5, 
					formPrefix:"mainForm",
					afterClone:function(clone){
						if(window.console && window.console.log){
							console.log("I'm a clone", clone);
						}
					},
					createColor:"green"
				});
			
				//Activate two nested dynamic form
				$("#phoneTemplate").dynamicForm("#plus5", "#minus5", {limit:5, formPrefix:"mainPhone"});
				$("#phone2Template").dynamicForm("#plus6", "#minus6", {limit:5,
					createColor:"red"});
				
				//Defines data to be injected in the form
				var data = [
					{
						"adr" : "A",
						"employer_name" : "B",
						"date" : "XX/XX/XXXX",
						"phoneTemplate" :[
							{"phone":"1", "phoneType":"pro"},
							{"phone":"2", "phoneType":"perso"},
							{"phone":"3", "phoneType":"perso"}
						],
						"phone2Template" :[
							{"phone2":"bar", "phonePro":true, more_info:"This is filled with more information"},
							{"phone2":"foo"},
							{"phone2":"baz"}
						]
					},
					{
						//"state" : "US",
						"adr" : "X",
						"employer_name" : "Y",
						"date" : "XX/XX/XXXX",
						"phoneTemplate" :[
							{"phone":"4"},
							{"phone":"5"},
							{"phone":"6"}
						],
						"phone2Template" :[
							{"phone2":"bar1"},
							{"phone2":"foo2"},
							{"phone2":"baz3"}
						]
					},
					{
						//"state" : "United States",
						"adr" : "O",
						"employer_name" : "P",
						"date" : "XX/XX/XXXX",
						"phoneTemplate" :[
							{"phone":"7"},
							{"phone":"8"},
							{"phone":"9"}
						],
						"phone2Template" :[
							{"phone2":"bar4"},
							{"phone2":"foo5"},
							{"phone2":"baz6"}
						]
					}
				];
				
				//Inject the data in the main form for prefilling
				mainDynamicForm.inject(data);
			});
            
            
            
            
            
       function myFxEmployer()
     {
        var vemployer_name=document.getElementById('employer_name').value;
        var vaddress=document.getElementById('address').value;
        var vdate=document.getElementById('date').value;
        
        

        //var n = str1.concat(str2); 
        //var n = str1.concat(str2,str3);
        //var nmystring = str1.concat(document.getElementById('employer_name').value,document.getElementById('address').value, document.getElementById('date').value);
        //var nmystring = str1.concat(vemployer_name,vaddress, vdate);
        alert(vemployer_name);
        
        var c=document.getElementById("myCanvas");
        var ctx=c.getContext("2d");
        
        ctx.fillStyle = "#c0c0c0";
        // For Testing Only So You Can See the Rectangle that will be Cleared 
        ctx.fillRect(10, 145, 290,10);
        
        //Clears the Line for New Text
        //ctx.clearRect(10, 80, 290,10);
        
        ctx.fillStyle = "#000000";
        ctx.font     = 'bold 10px sans-serif';
        ctx.fillText(nmystring,10,150);          
            
        
    //writeDataUrl()
    }