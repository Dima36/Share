Meteor.startup(function () {
    Uploader.finished = function (index, file) {
        Images.insert(file);
    }
});

Template.shareList.helpers({
    src: function () {
        return this.path;
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
    uploadFile();
};

Template.addShare.events({
    'click .start': function (e) {
        Uploader.startUpload.call(Template.instance(), e);
    }
});

Template.addShare.events({
    'click .share-btn': function (e, t, file) {

        var name = t.find('#share-name').value,
            desc = t.find('#share-desc').value,
            tags = t.find('#share-tags').value,
            imageId = "Here will be id add image"

        /*
                Share.insert({
                    name: name,
                    desc: desc,
                    tags: tags,
                    image_id: imageId
                });

                */
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
            info.name : // + ' - ' + progress.progress + '% - [' + progress.bitrate + ']' :
            info.name; // + ' - ' + info.size + 'B';
    },
    'progress': function () {
        return Template.instance().globalInfo.get().progress + '%';
    },
    'loadEnd': function () {
        var persents = Template.instance().globalInfo.get().progress;
        if (persents == 100) {
            return true;
        }
    }
})
