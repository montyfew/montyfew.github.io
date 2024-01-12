---
layout: default
---
{% if page.tracks %}
<section class="cards">
<div class="music_player">
    <img class="song-thumbnail" data-amplitude-song-info="cover_art_url"/>
    <span data-amplitude-song-info="name"></span>
    <p class="artist-album"><span data-amplitude-song-info="artist"></span> - <span data-amplitude-song-info="album"></span></p>
    <div class="progress-bar">
        <div class="amplitude-wave-form"></div>
        <input type="range" class="amplitude-song-slider"/>
    </div>
    <p>
        <span class="amplitude-play-pause">Play</span>
        <span class="amplitude-prev">Previous</span>
        <span class="amplitude-next">Next</span>
    </p>
</div>

<section class = "tracks">
<h2> Tracks </h2>
<ol>
{% for track in page.tracks %}
<li class="amplitude-song-container amplitude-skip-to" data-amplitude-song-index="{{forloop.index0}}" data-amplitude-location="0">
{{track.name}}
</li>
{% endfor %}
</ol>
</section>

<section class = "notes">
{{ content }}
</section>

</section>

<script>
    // Hide all the traditional html5 audio elements if JS is enabled.
    [...document.querySelectorAll("audio")].map(e => e.style.display = "none")

    function setMediaSessionData(song) {
        if ('mediaSession' in navigator) {

            navigator.mediaSession.metadata = new MediaMetadata({
            title: song.name,
            artist: song.artist,
            album: song.album,
            artwork: [
                { src: "{{page.image.src}}",   sizes: '512x512',   type: 'image/png' },
                // { src: 'https://dummyimage.com/128x128', sizes: '128x128', type: 'image/png' },
                // { src: 'https://dummyimage.com/192x192', sizes: '192x192', type: 'image/png' },
                // { src: 'https://dummyimage.com/256x256', sizes: '256x256', type: 'image/png' },
                // { src: 'https://dummyimage.com/384x384', sizes: '384x384', type: 'image/png' },
                // { src: 'https://dummyimage.com/512x512', sizes: '512x512', type: 'image/png' },
            ]
            });

            // navigator.mediaSession.setActionHandler('play', Amplitude.play);
            // navigator.mediaSession.setActionHandler('pause', Amplitude.pause);
            // navigator.mediaSession.setActionHandler('seekbackward', function() {});
            // navigator.mediaSession.setActionHandler('seekforward', function() {});
            navigator.mediaSession.setActionHandler('previoustrack', () => Amplitude.prev() );
            navigator.mediaSession.setActionHandler('nexttrack', () => Amplitude.next());
        }
    }

    let songs = [{% for track in page.tracks %}
			{
				"name": "{{track.name}}",
				"artist": "Monty Williams",
				"album": "{{page.title}}",
				"url": "{{page.track_folder | uri_escape}}/{{track.src | uri_escape}}",
				//"cover_art_url": "{{page.image.src}}"
		},{% endfor %} ];

	Amplitude.init({
        {% if jekyll.environment == "development" %}debug: true, {% endif %}
        default_album_art: "{{page.image.src}}",
        waveforms: {
            sample_rate: 50,
        },
        callbacks: {
			 play: e => {
                 let song = Amplitude.getActiveSongMetadata();
				 console.log(song);
                 setMediaSessionData(song)
             }
		},
		songs: songs,
        playlists: {
            "album": {
            songs: [...Array(songs.length).keys()],
            title: "{{page.title}}"
            },
        },
        // starting_playlist: "album",
	});

    document.queryE
</script>
{% else %}
{{content}}
{% endif %}







