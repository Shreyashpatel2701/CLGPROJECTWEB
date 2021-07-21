


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDB4bAQQmALMmu32Zte3goocytuSBU_XYU",
    authDomain: "qrcodescanner-5611b.firebaseapp.com",
    databaseURL: "https://qrcodescanner-5611b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "qrcodescanner-5611b",
    storageBucket: "qrcodescanner-5611b.appspot.com",
    messagingSenderId: "773945001647",
    appId: "1:773945001647:web:b59b36687ae0a3b23eb65a",
    measurementId: "G-BWWVZ1WDK3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();



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
	
	var fnm,lnm,mob_no,em_id,state,city,address,Person_to_meet,Reason_M,fev,cough,breath_diff,resp_dis,meet_date,meet_time,area_code,visit_status;
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
		Reason_M=document.getElementById('purposeMeet').value;
		meet_date=document.getElementById('txt_dt').value;
		meet_time=document.getElementById('txt_tm').value;
		visit_status=false;
		
		
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
  
  
  function insert_data()
  {
  
	  getData();
	  firebase.database().ref('Visitors/'+mob_no).set({
		Mobile_NO:mob_no,
		AreaCode:area_code,
		First_Name:fnm,
		Last_Name:lnm,
		Email_ID:em_id,
		Address:address,
		City:city,
		State:state,
		WhomToMeet:Person_to_meet,
		Reason:Reason_M,
		MDate:meet_date,
		MTime:meet_time,
		FeverStatus:fev,
		Cough:cough,
		Breathing_Difficulty:breath_diff,
		Resp_Problem:resp_dis,
		Visited_Status:visit_status
		
		
	  });
	  alert("Form Submitted Successfully !!!!!");
  }
  
  function check_doc()
  {
	  
					
					mob_no=document.getElementById('mob').value;
					
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
					document.getElementById('last_nm').value=snapshot.val().First_Name;
					document.getElementById('first_nm').value=snapshot.val().Last_Name;
					}
					});
				
  }
  