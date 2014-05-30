Ext.namespace("gxp.plugins");

gxp.plugins.BusquedaPlanos = Ext.extend(gxp.plugins.Tool, {

    ptype: "gxp_busqueda_planos",

    menuText: "Busqueda de planos",

    toolTip: "Busqueda de planos",

    constructor: function(config) {
        gxp.plugins.LayerTree.superclass.constructor.apply(this, arguments);
    },

    addActions: function() {
        var actions = gxp.plugins.BusquedaPlanos.superclass.addActions.apply(this, [{
            menuText: 'Busqueda de planos',
            iconCls: "ordenCapas",
            tooltip: this.toolTip,
            handler: function() {
                this.removeOutput();
                this.addOutput();
            },
            scope: this
        }]);
        return actions;
    },

    addOutput: function(config) {
      var self = this;
        config = config || {};

      this.outputConfig.title = "Orden";
      this.outputConfig.shortTitle = "Orden";

      //TODO create generic gxp_layerpanel
      var panelConfig = this.layerOrderConfig;
      if (panelConfig && panelConfig[xtype]) {
          Ext.apply(config, panelConfig[xtype]);
      }
    }
});

Ext.preg(gxp.plugins.BusquedaPlanos.prototype.ptype, gxp.plugins.BusquedaPlanos);
