var app = {
	initialize: function() {
	  this.bindEvents();
	},
	bindEvents: function() {
	  document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	onDeviceReady: function() {
  	  alert("Device IS ready");
	  function checkConnection() {
		var networkState = navigator.connection.type;
		var states = {};
		states[Connection.UNKNOWN] = 'Unknown connection';
		states[Connection.ETHERNET] = 'Ethernet connection';
		states[Connection.WIFI] = 'WiFi connection';
		states[Connection.CELL_2G] = 'Cell 2G connection';
		states[Connection.CELL_3G] = 'Cell 3G connection';
		states[Connection.CELL_4G] = 'Cell 4G connection';
		states[Connection.CELL] = 'Cell generic connection';
		states[Connection.NONE] = 'No network connection';
		alert('Connection type: ' + states[networkState]);
		if (states[networkState] == states[Connection.NONE]) {
		  alert("أنت غير متصل بالانترنت !");
		  //$(".check_interent").fadeIn(1000);
		} else {
		  alert("Connected");
		 // $('.preload').fadeOut(500);
		 // $(".skip_to_home").fadeIn(1000);
		}
	  }
	  checkConnection();
	 
	} 
};
