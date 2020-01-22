$(document).ready(function () {
    var userfeed = new Instagram({
        get : 'user',
        userId : '1489732056',
        limit : 12,
        resolution : 'standard_resolution',
        accessToken : '1489732056.1677ed0.cda3470d83454c65850f822712cbfb91',
        sortBy : 'most-recent',
        template : '<div class="gallery"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluld"/></a></div>',
    });
    userfeed.run();
});