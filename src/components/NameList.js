import React from 'react'
import Track from './Track'

function NameList() {
    const tracks =
        [{
            "trackName": "Eye In The Sky",
            "artistName": "The Alan Parsons Project",
            "albumName": "Eye In The Sky (Expanded Edition)",
            "trackUri": "spotify:track:39qYD4J4BKvZMQgxfXl5bv"
        },
        {
            "trackName": "Down To The Waterline",
            "artistName": "Dire Straits",
            "albumName": "Dire Straits",
            "trackUri": "spotify:track:7fYKKFD0jiSlMDgG9IUs1q"
        },
        {
            "trackName": "Heroes - 2017 Remaster",
            "artistName": "David Bowie",
            "albumName": "\"Heroes\"",
            "trackUri": "spotify:track:7Jh1bpe76CNTCgdgAdBw4Z"
        }]

    const playlist = tracks.map(track =>
        <Track track={track}></Track>
    )
    return (
        <div>{playlist}</div>
    )
}

export default NameList