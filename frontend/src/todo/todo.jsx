import React, { Component } from 'react';
import axios from 'axios';
import TodoForm from './todoForm';
import TodoList from './todoList';
import YouTube from 'react-youtube';

const URL = 'http://localhost:3003/api/todos';

export default class Todo extends Component {

    constructor(props) {
        super(props);

        this.state = { videoUrl: '', list: [] };

        this.urlChange = this.urlChange.bind(this);
        this.videoAdd = this.videoAdd.bind(this);
        this.videoDelete = this.videoDelete.bind(this);
        this.videoEdit = this.videoEdit.bind(this);
        this.refresh();
    };

    clean() {
        videoUrl.value('');
    }

    refresh() {
        axios.get(`${URL}`)
            .then(resp => this.setState({...this.state, videoUrl: '', list: resp.data}));
    };

    urlChange(e) {
        this.setState({...this.state, 
                          videoUrl: e.target.value,
                          videoId: e.target.value.substring(e.target.value.indexOf("?") + 3)});
    };

    videoAdd() {
        const videoUrl = this.state.videoUrl;
        const videoId = videoUrl.substring(videoUrl.indexOf("?") + 3);
        axios.post(URL, { videoId })
            .then(resp => this.refresh());
        this.clean();
    };

    videoDelete(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh());
    };

    videoEdit(todo) {
        const videoUrl = this.state.videoUrl;
        const videoId = videoUrl.substring(videoUrl.indexOf("?") + 3);
        axios.put(`${URL}/${todo._id}`, {...todo, videoId: videoId} )
            .then(resp => this.refresh());
        this.clean();
    };

    _onReady(event) {
        event.target.pauseVideo();
    };

    render() {

        const opts = {
            height: '350',
            width: '650'
    };

        return (
            <div>
                <TodoForm videoUrl={this.state.videoUrl} 
                          urlChange={this.urlChange}
                          videoAdd={this.videoAdd}/>
                <TodoList list={this.state.list} 
                          videoDelete={this.videoDelete}
                          videoEdit={this.videoEdit}/>
            </div>
        )
    }
};