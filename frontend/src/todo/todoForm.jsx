import React from 'react';


export default props => (
    <div role="form" className="todoForm">
        <div className="col-xs-12 col-sm-9 col-md-10">
            <input id="videoUrl" className="form-control"
                   placeholder="Insert YouTube Url Video"
                   onChange={props.urlChange}
                   value={props.videoUrl}>
            </input>
        </div>

        <div className="col-xs-12 col-sm-3 col-md-2">
            <button className="btn btn-primary" onClick={props.videoAdd}>
                <i className="fa fa-plus"></i> Insert Url
            </button>
        </div>

    </div>
);