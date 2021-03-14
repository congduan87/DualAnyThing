var CropImage = {
    jcrop: {},
    Initialize: function () {
        CropImage.jcrop = Jcrop.attach('target');
        CropImage.jcrop.setOptions({ multi: true, shadeColor: 'black', canDrag: false });
        CropImage.jcrop.addClass('jcrop-ux-fade-more');
        CropImage.onEvent();
        CropImage.upEvent();
    },
    onEvent: function () {
        CropImage.jcrop.listen("crop.activate", function (widget, e) {
            console.log('crop.activate');
        });

        CropImage.jcrop.listen("crop.update", function (widget, e) {
            console.log('crop.update');
        });

        CropImage.jcrop.listen("crop.change", function (widget, e) {
            console.log('crop.change');
            console.log(widget);
            //Jcrop.load('target').then(img => Jcrop.attach(img, { shadeColor: 'red'}));
            //CropImage.jcrop.setOptions({ shade: true });
            //CropImage.jcrop.addWidget(Jcrop.Widget.create(50, 50, 20, 20));
        });

        CropImage.jcrop.listen("crop.remove", function (widget, e) {
            console.log('crop.remove');
        });
    },
    upEvent: function (container) {
        if (container == null) {
            container = jQuery(document);
        }
    },
    newWidget: function (x, y, w, h, options) {
        CropImage.jcrop.newWidget(Jcrop.Rect.create(x, y, w, h), options);
    },
    removeWidget: function (activeWidget) {
        CropImage.jcrop.removeWidget(activeWidget);
    },

};

jQuery(document).ready(function () {
    CropImage.Initialize();
});