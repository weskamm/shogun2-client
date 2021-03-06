Ext.define('ShogunClient.view.component.MapController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.component.map',

    /**
     *
     */
    setMap: function() {
        var me = this;
        var view = me.getView();

        if (!view.getMap()) {
            var appCtxUtil = ShogunClient.util.ApplicationContext;
            var appCtx = appCtxUtil.getApplicationContext();
            var olMap = BasiGX.util.ConfigParser.setupMap(appCtx);
            view.setMap(olMap);
        }
    },

    /**
     *
     */
    setControls: function() {
        var me = this;
        var view = me.getView();
        var map = view.getMap();
        var attribution = new ol.control.Attribution({
            collapsible: false,
            logo: false
        });
        map.addControl(attribution);
    }
});
