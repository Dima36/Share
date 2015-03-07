Meteor.startup(function () {
    UploadServer.init({
        tmpDir: process.env.PWD + '/.uploads/tmp',
        uploadDir: process.env.PWD + '/.uploads/',
        checkCreateDirectories: true,
        imageVersions: {
            small: {
                width: 200,
                height: 100
            }
        }
    });
});
