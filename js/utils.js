window.utils = {
	serverIp : 'http://192.168.1.6:8080',
	/**
	 * @param {Object} obj 判断obj是否为空
	 * return treu : 空
	 * return false : 非空
	 */
	isNull : function(obj){
		if(obj == "" || obj == null || obj == undefined){
			return true
		}
		return false
	},
	
	/**
	 * 将user保存在客户端的缓存中
	 * @param {Object} user
	 */
	setUserInfo : function(user) {
		var userJsonStr = JSON.stringify(user)
		plus.storage.setItem("userInfo",userJsonStr)
	},
	
	/**
	 * 获取缓存中的user
	 */
	getUserInfo : function(){
		var userJsonStr = plus.storage.getItem("userInfo");
		return JSON.parse(userJsonStr)
	}
	
}