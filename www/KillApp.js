var exec = require('cordova/exec');

function KillApp() { 
}

KillApp.prototype.killProcess = function(){ 
	exec(
		function(result){ /*alert("OK" + reply);*/ }, 
		function(result){ /*alert("Error" + reply);*/ },
		"KillApp", '', []
	);
} 

var killApp = new KillApp(); 

module.exports = killApp;