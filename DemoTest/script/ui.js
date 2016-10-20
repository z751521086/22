/**Alert弹窗*/
	function Alert(){
	    YTF.webUIAlert({
            title:"提示框",
            msg:"测试内容",
            buttons:["确定"]

	    },function(ret,err){
	        alert(ret);
	    });
	}
	/**Alert弹窗*/
	function AlertMsg(msg){
	    YTF.webUIAlert({
            title:"提示框",
            msg:msg,
            buttons:["确定"]

	    },function(ret,err){
	        alert(ret);
	    });
	}
	/**Alert弹窗*/
	function Alert1(){
	    YTF.webUIConfirm({
            title:"提示框",
            msg:"测试内容",
            buttons:["确定","忽略","取消"]

	    },function(ret,err){
	        alert(ret);
	    });
	}
		/**Alert弹窗*/
	function Alert2(){
	    YTF.webUIPrompt({
            title:"提示框",
            msg:"测试内容",
            text:"请输入......",
            buttons:["确定","忽略","取消"],
            type:"number"

	    },function(ret,err){
	        alert(ret);
	    });
	}
	 /**进度弹窗*/
	function Progress(){
        YTF.webUIShowProgress({
            imgUrl:"images/loading.gif",
            bottomText:"加载中···",
            bgColor:"#55333333",
            xywh:{
            	w:120,
            	h:120
            },
            gifSize:{
            	w:63,
            	h:63
            },
            modal:false
        });
	}

	/**关闭弹窗*/
	function closeProgress(){
	    YTF.webUIHideProgress();
	}
	
	/**下拉刷新设置*/
	function setPull(){
	    YTF.webUISetPullRefresh({
	        isShow:true,
	        imgUrl:"widget/images/default_ptr_rotate.png",
	        textColor:"#FF0191F7",
	        textDown:"下拉可以刷新",
	        textUp:"松开可以刷新",
	        textLoading:"加载中",
	        textUpdateTime:"5年前",
	        isShowUpdateTime:true
	    },function(ret,err){
//	    	alert(ret);
//	        setPullCallback();
	    });

	}
	
	/**
	 * 设置下拉回调
	 */
	function setPullCallback(){
		YTF.webUIPullRefreshListener(function(ret,err){
//            alert(ret);
              var retObj= eval("("+ret+")");
              if(retObj&&retObj.state&&retObj.state===1){
              	AlertMsg("下拉刷新回调");
//            	getAjaxData();
              }
            });
	}
	
	/**关闭刷新*/
	function closePull(){
	    YTF.webUIPullRefreshDone();
	}
	/**设置为下拉刷新状态*/
	function openPull(){
	    YTF.webUIPullRefreshLoading();
	}
	
	
/**Toast弹窗*/
	function toast(){
	    YTF.webUIToast({
	        msg:"测试弹窗",
	        location:'middle',
	        duration:2000,
	        global:false
	    });
	}