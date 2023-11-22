(function () {

    function image_details(file, callback) {
        try {
            const img = new Image();
            img.src = window.URL.createObjectURL(file);
            img.onload = function () {
                const width = img.naturalWidth;
                const height = img.naturalHeight;
                window.URL.revokeObjectURL(img.src);
                callback(null, { width, height, type: file.type });
            };
        } catch (error) {
            callback(Error(error), null);
        }
    }

    function image_size_validation(file, width, height, callback) {
        try {
            image_details(file, (error, response) => {
                if (error) {
                    callback(Error(error), null);
                } else {
                    if (width == response.width && height == response.height) {
                        callback(null, {
                            width: response.width,
                            height: response.height,
                            type: response.type,
                            status: true,
                            message: 'Correct image size'
                        });
                    } else {
                        callback({
                            width: response.width,
                            height: response.height,
                            type: response.type,
                            status: false,
                            message: 'Incorrect image size'
                        }, null);
                    }
                }
            });
        } catch (error) {
            callback(Error(error), null);
        }
    }

    let input = document.getElementById('formFile');
    var forms = document.querySelectorAll('.needs-validation');

    input.addEventListener('change', () => {
        let files = input.files;
        if (files.length > 0) {
            let file = files[0];

            if (file.type != 'image/png') {
                // 'File Type must be png';
                console.log('File Type must be png');
                input.value = null;
                toastr.error('File Type must be png');
                return;
            }

            const width = 1920;
            const height = 1080;

            image_size_validation(file, width, height, (error, response) => {
                if (error) {
                    console.log(error);
                    input.value = null;
                    toastr.error(error.message);
                } else {
                    console.log(response);
                    toastr.success(response.message);
                }
            });
        }
    });
})();
