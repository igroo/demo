function dhtmlxSuitePlugin(){}function dhtmlxWindowsPlugin(){this.rootWins}var layoutOffsetValue={top:5,right:5,bottom:5,left:5};dhtmlxWindowsPlugin.prototype.getRootWindows=function(){return this.rootWins||(this.rootWins=new dhtmlXWindows,this.resizeViewport()),this.rootWins},dhtmlxWindowsPlugin.prototype.resizeViewport=function(){var t=window.innerWidth||document.body.clientWidth,o=0;o=Number(window.innerHeight||document.body.clientHeight),o-=50,this.getRootWindows().setViewport(0,0,t,o,"webos-viewport")},dhtmlxWindowsPlugin.prototype.getInstance=function(t,o){var i,n=this.getRootWindows();return n.isWindow(t)?(i=n.window(t),i.bringToTop()):(i=this.getRootWindows().createWindow(t,0,0,800,500),i.setText(o),i.centerOnScreen()),i},dhtmlxWindowsPlugin.prototype.closeOnTopWindow=function(){var t=!0;this.getRootWindows().forEachWindow(function(o){o.isOnTop()&&t&&(o.close(),t=!1)})};
//# sourceMappingURL=maps/dhtmlx-suite-plugin.js.map
