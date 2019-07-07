/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
	// Application Constructor
	initialize: function() {
		this.bindEvents();
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicitly call 'app.receivedEvent(...);'
	onDeviceReady: function() {
		//alert("Device IS ready");
		//alert('We are Testing ');
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
			//alert('Connection type: ' + states[networkState]);
			if (states[networkState] == states[Connection.NONE]) {
				alert(" غير متصل بالانترنت !");
				//$(".check_interent").fadeIn(1000);
			} else {

				$('.preloader').fadeOut(500);
				//alert("Connected");
				if (localStorage.login_is) {
					$(".splash")
						.hide();
				} else {
					$(".skip_to_home").fadeIn(1000);
				}
			}
			//document.addEventListener("deviceready", onDeviceReady, false);
			//function onDeviceReady() {
			//	console.log(navigator.vibrate);
			//}
			// Vibrate for 1 second
			// Wait for 1 second
			// Vibrate for 3 seconds
			// Wait for 1 second
			// Vibrate for 5 seconds
			//	navigator.vibrate([1000, 1000, 3000, 1000, 5000]);
		}
		checkConnection();
	
	//);
	}
	/*,
		setupPush: function() {
			console.log('calling push init');
			var push = PushNotification.init({
				"android": {
					"senderID": "499005818743",
				},
				"browser": {},
				"ios": {
					"sound": true,
					"vibration": true,
					"badge": true
				},
				"windows": {}
			});
			console.log('after init');
			push.on('registration', function(data) {
				navigator.notification.beep(1);
				console.log('registration event: ' + data.registrationId);
				var oldRegId = localStorage.getItem('registrationId');
				if (oldRegId !== data.registrationId) {
					// Save new registration ID
					localStorage.setItem('registrationId', data.registrationId);
					// Post registrationId to your app server as the value has changed
				}
				var parentElement = document.getElementById('registration');
				var listeningElement = parentElement.querySelector('.waiting');
				var receivedElement = parentElement.querySelector('.received');
				listeningElement.setAttribute('style', 'display:none;');
				receivedElement.setAttribute('style', 'display:block;');
			});
			push.on('error', function(e) {
				console.log("push error = " + e.message);
			});
			push.on('notification', function(data) {
				//console.log('notification event');
				navigator.notification.alert(data.message, // message
					null, // callback
					data.title, // title
					'Ok' // buttonName
				);
			});
		}*/
};
//app.setupPush();