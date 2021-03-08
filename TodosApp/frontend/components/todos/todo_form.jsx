import React from 'react';
import uniqueId from '/frontend/util/uniq_id'

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: uniqueId(),
            title: "",
            body: "",
            done: false,
        }
        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.updateDoneTrue = this.updateDoneTrue.bind(this);
        this.updateDoneFalse = this.updateDoneFalse.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateTitle(e) {
        this.setState({
            title: e.target.value,
        })
    }

    updateBody(e) {
        this.setState({
            body: e.target.value,
        })
    }

    updateDoneTrue(e) {
        debugger
        this.setState({
            done: true,
        })
    }

    updateDoneFalse(e) {
        this.setState({
            done: false,
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.receiveTodo(this.state);
        this.setState({
            id: uniqueId(),
            title: "",
            body: "",
            done: false
        });
    }

    render() {
        return (
            <form>
                <h3>Add A Todo</h3>
                <label> Title 
                    <input type="text" value={this.state.title} onChange={this.updateTitle}/>
                </label>
                <br/>
                <label> Body
                    <input type="text" value={this.state.body} onChange={this.updateBody} />
                </label>
                <br/>
                <label> Status
                    Done<input type="radio" name="done" onChange={this.updateDoneTrue} checked={this.state.done}/>
                    Not Done<input type="radio" name="done" onChange={this.updateDoneFalse} checked={!this.state.done}/>
                </label>
                <input type="submit" value="Add Todo" onClick={this.handleSubmit}/>
            </form>
        )
    }

}

export default TodoForm;
