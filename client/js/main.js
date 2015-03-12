uploadFile = function () {
    $(document).on("change", "input:file", function () {
        setTimeout(function () {
            $('.upload-control.start').trigger('click');
        }, 200)
    });
}
