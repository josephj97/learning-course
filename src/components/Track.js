import React from 'react'

function Track({track}) {
    return (
        <div>
            <h3>
                {track.trackName} by {track.artistName}
            </h3>
        </div>
    )
}

export default Track