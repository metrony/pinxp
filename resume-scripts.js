    <script type="text/javascript">
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
		</script>