// Audio Changer for MP3 tracks.
$('.play').click(function(e) {
    e.preventDefault();
    $('#main_player').empty();
    var input = $(this).attr('data-media');
    var output = '<audio id="player" preload="auto" controls>';
    output += '<source type="audio/mpeg" src="' + input + '"/>';
    output += '</audio>';
    $('#main_player').html(output);
    var aud = $('#player').get(0);
    aud.play();
});

    $('#player').mediaelementplayer({
        //audioWidth: 400,
        //audioHeight: 30,
        startVolume: 0.8,
        loop: false,
        enableAutosize: false,
        features: ['playpause','current','progress','duration','volume'],
        alwaysShowControls: false,
        iPadUseNativeControls: false,
        iPhoneUseNativeControls: false, 
        AndroidUseNativeControls: false,
        alwaysShowHours: false,
        pauseOtherPlayers: true,
        keyActions: []
    });
