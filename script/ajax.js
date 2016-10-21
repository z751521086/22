	var uploadUrl = 'http://139.129.52.244/index.php/Api/Upload/index';
	function cancleAjax(){
		YTF.cancelAjax(
        {   signName: 'testAjaxGet'},
        function(ret,err){
        alert(ret);
        });
	}

	function nimingAjax(url){

         YTF.ajax({
         		url:url,
//			   url: 'http://gank.io/api/data/福利/10/1',
//			   url: 'http://v.juhe.cn/toutiao/index?type=top&key=c6a1c40649d8b22fee7bc8801402756d',
               signName: 'testAjaxGet',
               methodType: 'get',
               //cacheKey: 'cacheKey123456789'
			   },function(ret,err){
			        if(ret){
						alert(ret);
			            
			        }else{
//			            alert(err);
			        }

       		   })
	}

	function nimingAjaxPost(url,txt){

         YTF.ajax({
         	   url:url,
//			   url: 'http://192.168.100.26/pack/androidApp/index/post',
               signName: 'testAjaxPost',
               methodType: 'post',
               data: {
                    values: {
//                       txt: 'haha'
						txt: txt
                    }
                }
			   },function(ret,err){
			   		if(ret){
			   			alert("客户端返回数据为："+ret);
			   		}else if(err){
			   			alert(err);
			   		}
        			
       		   })
	}



	function nimingAjaxUpload(url,files){

         YTF.ajax({
//			   url: 'http://139.129.52.244/index.php/Api/Upload/index',
			   url: url,
               signName: 'testAjaxPost1',
               methodType: 'post',
               data: {
                    files: {
//                      flieupload: ['/storage/emulated/0/ytfDownload/ic_launcher.png','/storage/emulated/0/ytfDownload/ic_launcher2.png']
                        flieupload:files
                    }
                }
			   },function(ret,err){
			        if(ret){
			            alert(ret);
			            var retTmp = eval("("+ret+")");
			            if(retTmp.data.data.flie_url){
			            	var publicUrl ='http://139.129.52.244/'+retTmp.data.data.flie_url ;
			            	$("#imgUpload").attr('src',publicUrl); 
			            }
			            
			        }else{
			            alert(err);
			        }

       		   });
	}

	function downLoadAjax(url) {

	YTF.ajaxDownload({
			//      	url: 'https://codeload.github.com/hongyangAndroid/okhttp-utils/zip/master',
			url: url,
			methodType: 'get',
			signName: 'testAjaxDownLoad',
			//saveFileName如果不传，是否保留源文件名？
			saveFileName: 'master.zip'
		},
		function(ret, err) {
			if(ret) {
                alert(ret);
				var retTmp = eval("(" + ret + ")");
//				alert(retTmp.progress);
				if(retTmp && retTmp.progress) {
//					alert(retTmp.progress);
					$(".progress .spanWidth").css("width", retTmp.progress+ "%" );
//					$(".progress .spanWidth").width(parseInt(retTmp.progress));
				}
				if(retTmp.progress = 100 && retTmp.filePath ) {
					alert("下载完成！地址为：" + retTmp.filePath);
				}
			} else if(err) {
				alert(err);
			}

			//     console.log('downLoadAjax :'+ret);
			//     console.log('downLoadAjax :'+err);
		});
}


	function cancleDownLoadAjax(){

        YTF.cancelAjax(
        {   signName: 'testAjaxDownLoad'},
        function(ret,err){
        alert(ret);
        });
	}


	/**调用本地相册 多选 */
	function media_album(){
	    YTF.mediaGetPicture({
	        sourceType:"album",
	        isCheckbox:false
	    }, function(ret, err){
            if(ret){
                 //alert(ret);
                 var imgObj = eval("("+ ret + ")");
                 var imgArr=[];
                 imgArr = imgObj.imagePath;
//               imgArr.push(ret);
				//var retTmp = ret.substring(2,ret.length-2);
				//alert(retTmp);
//				imgArr = retTmp.slice(",");
				//imgArr.push(retTmp);
				//alert(imgArr[0]);
                nimingAjaxUpload(uploadUrl,imgArr)
            }else{
                 alert(err);
            }
        });
	}