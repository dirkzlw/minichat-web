window.utils = {
	serverIp : 'http://192.168.1.7:8080',
	/**
	 * @param {Object} obj 判断obj是否为空
	 * return treu : 空
	 * return false : 非空
	 */
	isNull : function(obj){
		if(obj == null || obj == "" || obj == undefined){
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
	},
	
	/**
	 * 删除指定键值的缓存
	 * @param {Object} key
	 */	
	removeUserInfo : function(){
		plus.storage.removeItem("userInfo")
	}
	
	
}