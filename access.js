var mongoose = require('mongoose');
var productSchema = ('./user');

var User = mongoose.model('User', productSchema);

var u = new User({
    profile: { username: 'egasparian316'}
});

modifyUserProfile(u, {
    picture: 'http://pbs.twimg.com/profile_images/550304223036854272/Wwmwuh2t.png'
});

// modifyUserProfile van **only** modufy
// user.profile, not user.data
function modifyUserProfile (user, profile, callback) {
    user.profile = profile;
    user.save(function (error, user) {
        // handle result
    })
}