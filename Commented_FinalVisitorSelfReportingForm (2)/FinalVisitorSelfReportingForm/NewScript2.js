


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

 // Your w
 
/*var firebaseConfig = {
    apiKey: "AIzaSyBlNEXbjqlU6Y6UQRsOwiPK8YZ-uEvU7rk",
    authDomain: "fir-practice-f7c57.firebaseapp.com",
    databaseURL: "https://fir-practice-f7c57-default-rtdb.firebaseio.com",
    projectId: "fir-practice-f7c57",
    storageBucket: "fir-practice-f7c57.appspot.com",
    messagingSenderId: "1003791814766",
    appId: "1:1003791814766:web:8c57fc6615c2b9688f567f",
    measurementId: "G-1JRXFLGR7P"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();*/
  
  var firebaseConfig = {
    apiKey: "AIzaSyDB4bAQQmALMmu32Zte3goocytuSBU_XYU",
    authDomain: "qrcodescanner-5611b.firebaseapp.com",
    databaseURL: "https://qrcodescanner-5611b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "qrcodescanner-5611b",
    storageBucket: "qrcodescanner-5611b.appspot.com",
    messagingSenderId: "773945001647",
    appId: "1:773945001647:web:007fceea92e0f3d33eb65a",
    measurementId: "G-RZN1LB3DTT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
		
		  
		  
		/*  function demo(e)
		  {
		  
				var file=document.querySelector('#input_img').files[0];
				if(!file) return;
				const reader=new FileReader();
				
				reader.readAsDataURL(file);
				reader.onload=function(event)
				{
					const imgele=document.createElement("img");
					imgele.src=event.target.result;
					
					
					imgele.onload=function(e)
					{
						
						const canvas=document.createElement("canvas");
						const max_w=400;
						const scaleSize=max_w / e.target.width;
						canvas.width=max_w;
						canvas.height=e.target.height * scaleSize;
						
						const ctx=canvas.getContext("2d");
						ctx.drawImage(e.target,0,0,canvas.width,canvas.height);
						const srcEncoded=ctx.canvas.toDataURL(e.target,"image/jpeg");
						document.querySelector("#myimg").src=srcEncoded;
					}
				}
		  
		  };
		 */ 
	
	
	function phonenumber(inputtxt)
	{
	  var phoneno = /^\d{10}$/;
	  if(inputtxt.match(phoneno)){return true;}
	  else 
	  {  
	  alert("Please Enter a valid mobile NO !!!!!");
	  document.getElementById('mob').value="";
	  return false;
	  }
	}

	function validate_fields()
	{
		if(fnm===""||lnm===""||em_id===""||state===""||city===""||address===""||Person_to_meet===""||Reason_M===""||fev===""||cough===""||breath_diff===""||resp_dis===""||meet_time===""||meet_date===""||area_code==="")
		{
			alert("Please Enter All details !!!");
			return false;
		}
		else{
			
			return true;
		}
	}

	
		
	//function dd()
	//{
	//alert("Function Call");
	//var Element = document.querySelector('input');
	//var img = document.querySelector('img');
	//Element.addEventListener('change', function() {
	//var url = URL.createObjectURL(Element.files[0]);
	//img.src = url;
	//var d=document.querySelector("h2");
	//d.textContent+=url;alert(d.textContent);
	//});
	//}
	
	var fnm,lnm,mob_no,em_id,state,city,address,Person_to_meet,Reason_M,fev,cough,breath_diff,resp_dis,meet_date,meet_time,area_code,visit_status,Faculty_Name,notify_status;
	function getData()
	{
	
		fnm=document.getElementById('first_nm').value;
		lnm=document.getElementById('last_nm').value;
		mob_no=document.getElementById('mob').value;
		area_code=document.getElementById('area_co').value;
		em_id=document.getElementById('email').value;
		state=document.getElementById('state_nm').value;
		city=document.getElementById('city_nm').value;
		address=document.getElementById('address').value;
		Person_to_meet=document.getElementById('person_list').value;
		Faculty_Name=document.getElementById('person_list').options[document.getElementById('person_list').selectedIndex].text;
		Reason_M=document.getElementById('purposeMeet').value;
		meet_date=document.getElementById('txt_dt').value;
		meet_time=document.getElementById('txt_tm').value;
		visit_status=false;
		notify_status=false;
		
		
		
		var ele=document.getElementsByName('fever');
		for(i=0;i<ele.length;i++)
		{
			if(ele[i].checked)
			{
				fev=ele[i].value;
			}
		}
		
		var ele2=document.getElementsByName('cough');
		for(i=0;i<ele2.length;i++)
		{
			if(ele2[i].checked)
			{
				cough=ele2[i].value;
			}
		}
		
		
		var ele3=document.getElementsByName('radio3');
		for(i=0;i<ele3.length;i++)
		{
			if(ele3[i].checked)
			{
				breath_diff=ele3[i].value;
			}
		}
		
		var ele4=document.getElementsByName('radio4');
		for(i=0;i<ele4.length;i++)
		{
			if(ele4[i].checked)
			{
				resp_dis=ele4[i].value;
			}
		}
		
		
		
	}

  // Your web app's Firebase configuration
  
  
  function uploadData()
  {
			getData();
			if(validate_fields()&&phonenumber(mob_no))
			{
					firebase.database().ref('Visitors/'+mob_no).set(
							{
							Mobile_NO:mob_no,
							AreaCode:area_code,
							First_Name:fnm,
							Last_Name:lnm,
							Email_ID:em_id,
							Address:address,
							City:city,
							State:state,
							WhomToMeet_Name:Faculty_Name,
							WhomToMeet:Person_to_meet,
							Reason:Reason_M,
							MDate:meet_date,
							MTime:meet_time,
							FeverStatus:fev,
							Cough:cough,
							Breathing_Difficulty:breath_diff,
							Resp_Problem:resp_dis,
							Visited_Status:visit_status,
							Notification_Status:notify_status
							});
							
					firebase.database().ref('DateDB/'+meet_date+'/'+mob_no+'/').set({
							Mobile_NO:mob_no,
							AreaCode:area_code,
							First_Name:fnm,
							Last_Name:lnm,
							Email_ID:em_id,
							Address:address,
							City:city,
							State:state,
							WhomToMeet_Name:Faculty_Name,
							WhomToMeet:Person_to_meet,
							Reason:Reason_M,
							MDate:meet_date,
							MTime:meet_time,
							FeverStatus:fev,
							Cough:cough,
							Breathing_Difficulty:breath_diff,
							Resp_Problem:resp_dis,
							Visited_Status:visit_status,
							Notification_Status:notify_status
	
							});
		
				/* var dfile=document.querySelector('#input_img').files[0];
				if(dfile!=null)
				{
					const ref = firebase.storage().ref('Certificate_Images/');
					//const dbref=firebase.database().ref('DemoImgDB');
					const file = document.querySelector('#input_img').files[0]
					const name = (+new Date()) + '-' + file.name;
					const metadata = {
					  contentType: file.type
					};
					
					
					const task = ref.child(name).put(file, metadata);
					task
					  .then(snapshot => snapshot.ref.getDownloadURL())
					  .then((url) => {
						firebase.database().ref('DateDB/'+meet_date+'/'+mob_no+'/').update({
						ImageUrl:url,
						ImageName:name
						})
						firebase.database().ref('Visitors/'+mob_no).update({
						ImageUrl:url,
						ImageName:name
						})
						document.querySelector('#myimg').src = url;
						
					  })
					  .catch(console.error);
				}
				*/
				alert('Form Submitted Successfully!!!');
		  }
  }
			
	 

		
	  
	  
				//file=document.querySelector('input').files[0];
				//gName=document.getElementById('imgnm').value;
				//alert(file);
				//var uploadTask=firebase.storage().ref('Certificate_Images/'+imgName+'.jpeg').put(file);
				//alert(uploadTask);
				//uploadTask.on//('state_changed',function(sshot){
					
					//alert("Hi");
				//},
				
				//function(error)
				//{
					//alert("Error..."); 
				//},
				
				//function()
				//{
					
					//uploadTask.sshot.ref.getDownloadURL().then(function(url)
					//{
						//					});
				//}
				//);
		


//function enter_data()
//{
	
//}
  
  function check_doc()
  {
	  
					
					mob_no=document.getElementById('mob').value;
					if(phonenumber(mob_no))
					{
						firebase.database().ref('Visitors/'+mob_no).on('value',function(snapshot){
						var ret_value=snapshot.val();
						if(ret_value==null)
						{
						return;
						}
						else
						{
						
						document.getElementById('mob').value=snapshot.val().Mobile_NO;
						document.getElementById('area_co').value=snapshot.val().AreaCode
						document.getElementById('email').value=snapshot.val().Email_ID;
						document.getElementById('address').value=snapshot.val().Address;
						document.getElementById('city_nm').value=snapshot.val().City;
						document.getElementById('state_nm').value=snapshot.val().State;
						document.getElementById('last_nm').value=snapshot.val().Last_Name;
						document.getElementById('first_nm').value=snapshot.val().First_Name;
						
						}
						});
					}
					
					
				
  }
  
			const nameList=[];
			const desList=[];
			const keyList=[];
			function getDataForList()
			{
				
				qry=firebase.database().ref('Users').orderByKey();
				qry.once("value")
				  .then(function(snapshot) {
					snapshot.forEach(function(sn) {
					key = sn.key;
					var nm=sn.val().name;
					var des=sn.val().designation;
					nameList.push(nm);
					desList.push(des);
					keyList.push(key);
					
				  });
				});
				

			}
			
			function rem_opt()
			{
				var select=document.getElementById('person_list');
				for(var i=select.length-1;i>=0;i--)
				{
					select.remove(i);
				}
			}
			
			
			
			function create_list()
			{
				
				rem_opt();
				for(var i=0;i<nameList.length;i++)
				{
					var select=document.getElementById('person_list');
					ele=nameList[i]+"    "+desList[i];
					var com = document.createElement("option");
					var k=keyList[i];
					com.textContent = ele;
					com.value = k;
					select.appendChild(com);
					
				}
			}			
		
