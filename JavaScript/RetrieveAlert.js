var mySpace = function() {
    this.items = null;
    this.d = null;

    var buildItem = function () {
        var item = {
            "Title" : this.items.get_data()[0].get_fieldValues()["anru_Erreur"],
            "Picto" : this.items.get_data()[0].get_fieldValues()["anru_picto_Type"]
        };
        item.Picto = window.location.protocol + "//" + window.location.host + $(item.Picto).attr("src");
        return item;
    }
    var successAlerteCallback = function () {
        if (this.items.get_data().length === 1) {
            var item = buildItem();
            var html =  "<div id=\"dialog-confirm\" title=\"Alerte\">" +
                        "<p><img width=\"25\" style=\"float:left; margin:12px 12px 20px 0;\" src=\"" + item.Picto + "\" /></span>" + item.Title + "</p>" +
                        "</div>";
            jQuery(html).dialog({
                resizable: false,
                height: "auto",
                width: 400,
                modal: true,
                buttons: {
                    "Ok": function () {
                        jQuery(this).dialog("close");
                    }
                }
            });
            this.d.resolve();
        } else {
            this.d.reject("The key isn't supported yet");
        }
    }

    var successErrorCallback = function () {
        if (this.items.get_data().length === 1) {
            var item = buildItem();
            var html = "<p><img width=\"25\" style=\"float:left; margin:12px 12px 20px 0;\" src=\"" + item.Picto + "\" /></span>" + item.Title + "</p>"
            this.d.resolve(html);
        } else {
            this.d.reject("The key isn't supported yet");
        }
    }
    
    var failCallback = function () {
        this.d.reject("The promise failed");
    }

    var retrieveErrorOrAlert = function(key, successcallback) {
        d = jQuery.Deferred();

        var ctx = new SP.ClientContext.get_current();
        var camlQuery = new SP.CamlQuery();
        camlQuery.set_viewXml('<View><Query><Where><Eq><FieldRef Name="anru_Code_erreur" /><Value Type="Text">' + key +'</Value></Eq></Where></Query></View>');
        items = ctx.get_site().get_rootWeb().get_lists().getByTitle('Messages d\'erreurs ou d\'informations').getItems(camlQuery);
        ctx.load(items);
        var o = {d: d, items:items};
        ctx.executeQueryAsync(Function.createDelegate(o, successcallback), Function.createDelegate(o, failCallback));

        return d.promise();
    }

    this.retrieveAlerte = function (key) {
        return retrieveErrorOrAlert(key, successAlerteCallback);
    }

    this.retrieveError = function (key) {
        return retrieveErrorOrAlert(key, successErrorCallback);
    }
}

new mySpace().retrieveError("demandeTiers_Error_Entite_NotFound")
.done(function(html) {
    NWF$(".lbError").find("label").html(html);
    NWF$(".lbError").show();
    NWF.FormFiller.Functions.ProcessFillerControl(NWF$('.lbError'), NWF$('.formFillerDiv'));

    new mySpace().retrieveAlerte("demandeTiers_Error_Entite_NotFound")
    .fail(function (error) {
        console.log(error);
    })
})
.fail(function (error) {
    console.log(error);
})

