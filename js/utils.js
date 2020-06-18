window.utils = {
	serverIp : 'http://192.168.1.6:8080',
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
	 * 删除用户信息的缓存
	 */	
	removeUserInfo : function(){
		plus.storage.removeItem("userInfo")
	},
	
	/**
	 * 将好友列表保存在客户端的缓存中
	 * @param {Object} user
	 */
	setFriendList : function(friendList) {
		var friendListJsonStr = JSON.stringify(friendList)
		plus.storage.setItem("friendList",friendListJsonStr)
	},
	
	/**
	 * 获取缓存中的好友列表
	 */
	getFriendList : function(){
		var friendListJsonStr = plus.storage.getItem("friendList");
		return JSON.parse(friendListJsonStr)
	},
	
	/**
	 * 删除好友信息列表的缓存
	 */	
	removeFriendListJsonStr : function(){
		plus.storage.removeItem("friendList")
	}
	
}