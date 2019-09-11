import React, { Fragment } from 'react';
import YouTube from 'react-youtube';

export default class Example extends React.Component {

    _onReady(event) {
        event.target.pauseVideo();
    }

    render() {

        const opts = {
            height: '140',
            width: '250'
        };

        return (
            <div>
                <YouTube
                    videoId="Fjhx4ZIT08c"
                    opts={opts}
                    onReady={this._onReady}>
                </YouTube>
            </div>
        )

    };
};