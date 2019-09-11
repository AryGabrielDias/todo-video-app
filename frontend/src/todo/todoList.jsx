import React from 'react';
import YouTube from 'react-youtube';

export default props => {

    const renderRows = () => {

        const list = props.list || [];
        
        return list.map(todo => (
            <tr key={todo._id}>
                <td>
                    <YouTube
                        videoId={todo.videoId}
                        opts={props.opts}
                        onReady={props._onReady}>
                    </YouTube>
                
                    <button className="btn btn-danger" 
                            style={{float: "left", marginBlock: "5px"}}
                            onClick={() => props.videoDelete(todo)}>
                        Delete
                    </button>
                    
                    <button className="btn btn-success" 
                            style={{float: "left", marginBlock: "5px"}}
                            onClick={() => props.videoEdit(todo)}>
                        Edit
                    </button>
                </td>
            </tr>
        ))
    };

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Vídeos</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
};