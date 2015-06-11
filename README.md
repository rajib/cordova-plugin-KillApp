# Cordova KillApp Plugin

Simple plugin that exit android process using 'android.os.Process.killProcess(android.os.Process.myPid());'.

Greeting app exit with 'navigator.app.exitApp();' some time does not work, as because it does not actually terminate the process. In those cshenario it is useful.

## Using

Create a new Cordova Project

    $ cordova create hello com.example.helloapp Hello
    
Install the plugin

    $ cd hello
    $ cordova plugin install https://github.com/rajib/cordova-plugin-KillApp
    

Edit `www/index.html` and add the following code inside `<HEAD></HEAD>`

```Javascript
    `<script type="text/javascript" src="KillApp.js"></script>`
    
    `KillApp.killProcess();`
