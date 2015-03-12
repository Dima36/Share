Router.configure({
    layoutTemplate: 'layout',
    waitOn: function () {
        return Meteor.subscribe('images')
    }
});

Router.map(function () {
    this.route('home', {
        path: '/'
    });

    this.route('load', {
        path: '/load',
        data: function () {
            return {
                images: Images.find()
            }
        }
    });
});
