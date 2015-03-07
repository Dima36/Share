Meteor.startup(function () {
    Uploader.finished = function (index, fileInfo, templateContext) {
        Images.insert(fileInfo);
    }
});

Template.shareList.helpers({
    src: function () {
        return 'upload/small' + this.path;
    },
    images: function () {
        return Images.find();
    }
});

Template.addShare.created = function () {
    Uploader.init(this);
}

Template.addShare.rendered = function () {
    Uploader.render.call(this);
};

Template.addShare.events({
    'click .start': function (e) {
        Uploader.startUpload.call(Template.instance(), e);


        var fileInfo = Template.instance().info.get()
        console.log(fileInfo);
    }
});

Template.addShare.helpers({
    'infoLabel': function () {
        var instance = Template.instance();

        // we may have not yet selected a file
        var info = instance.info.get()
        if (!info) {
            return;
        }

        var progress = instance.globalInfo.get();

        // we display different result when running or not
        return progress.running ?
            info.name + ' - ' + progress.progress + '% - [' + progress.bitrate + ']' :
            info.name + ' - ' + info.size + 'B';
    },
    'progress': function () {
        return Template.instance().globalInfo.get().progress + '%';
    }
})
