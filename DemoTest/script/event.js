	
	
	function eventListenerAdd(eventName){
		YTF.eventListenerAdd(
	      {eventName: eventName},
	      function(ret, err){
	        if( ret ){
//	              alert(ret);
	              toastMsg(ret);
	            }else{
	              console.log(err);
	        }
        });
	}
	
	
	function cancleEvent(eventName){
		YTF.eventListenerRm(
	      {eventName: eventName},
	      function(ret, err){
	        if( ret ){
	              console.log('local online :'+ret);
	              alert('local online :'+ret);
	              toastMsg(ret);
	            }else{
	              console.log(err);
	            }
        	});
	}
	
	function cancleOnlineEvent(){
	console.log('>>>>>>>>>>>>>>cancleOnlineEvent>>>>>>>>>>>>');
      YTF.eventListenerRm(
      {eventName: 'onOffLine'},
      function(ret, err){
        if( ret ){
              console.log('local online :'+ret);
              alert('local online :'+ret);
//            toast(ret);
            }else{
              console.log(err);
            }
        });
	}


	function cancleAppBackEvent(){
	console.log('>>>>>>>>>>>>>>cancleAppBackEvent>>>>>>>>>>>>');
      YTF.eventListenerRm(
      {eventName: 'appBack'},
      function(ret, err){
        if( ret ){
              console.log('local appBack :'+ret);
              alert('local online :'+ret);
//            toast(ret);
            }else{
              console.log(err);
            }
        });
	}
	
	function sendEvent(eventName){
		YTF.eventSend({
		    eventName: eventName,
		    attr: {
	        key1: '发送自定义消息：', 
	        key2: eventName
	    }
		});
	}

