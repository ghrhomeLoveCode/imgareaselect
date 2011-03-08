module("API");

(function () {

test("setSelection()/getSelection()", function () {
    /* Initialization */
    $('#t').append('<img id="test-img" src="data/elephant.jpg" />');

    stop();

    var ias = $('#test-img').imgAreaSelect({
        show: true,
        onInit: function (img, selection) {
            ias.setSelection(10, 20, 30, 40);
            ias.update();
            var selection = ias.getSelection();

            same(ias.getSelection(), { x1: 10, y1: 20, x2: 30, y2: 40,
                width: 20, height: 20 },
                'Check if the returned selection is correct');

            equals($('.imgareaselect-selection').width(), 20,
                'Check if the selection area div element has the proper width');
            
            equals($('.imgareaselect-selection').height(), 20,
                'Check if the selection area div element has the proper ' +
                'height');

            /* Cleanup */
            $('#test-img').imgAreaSelect({ remove: true });
            testCleanup();

            start();
        },
        instance: true
    });
});

test("setSelection()/getSelection() with scaling", function () {
    /* Initialization */
    $('#t').append('<img id="test-img" src="data/elephant.jpg" \
        style="width: 160px; height: 100px;" />');

    stop();

    var ias = $('#test-img').imgAreaSelect({
        show: true,
        imageWidth: 320,
        imageHeight: 200,
        onInit: function (img, selection) {
            ias.setSelection(10, 20, 30, 40);
            ias.update();
            var selection = ias.getSelection();
            
            same(ias.getSelection(), { x1: 10, y1: 20, x2: 30, y2: 40,
                width: 20, height: 20 },
                'Check if the returned selection is correct');

            equals($('.imgareaselect-selection').width(), 10,
                'Check if the selection area div element has the proper width');
        
            equals($('.imgareaselect-selection').height(), 10,
                'Check if the selection area div element has the proper ' +
                'height');

            /* Cleanup */
            $('#test-img').imgAreaSelect({ remove: true });
            testCleanup();

            start();
        },
        instance: true
    });
});

})();