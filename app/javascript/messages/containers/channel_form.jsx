import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { createChannel, setChannels } from '../actions'

class ChannelForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      nameValue: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const name = document.querySelector('#channelName');
    this.props.createChannel(name.value);
    this.setState({nameValue: ''});
  }

  handleNameChange = (event) => {
    this.setState({
      nameValue: event.target.value
    });
  }

  render(){
    return(
      <form className="simple_form" onSubmit={this.handleSubmit}><input name="utf8" type="hidden" value="&#x2713;" />
        <div className="search-form-control form-group">
          <input type="text" id="channelName" className="form-input form-control string required" placeholder="New channel" value={this.state.nameValue} onChange={this.handleNameChange} />
          <button name="button" type="submit" className="btn btn-flat">
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createChannel: createChannel,
      setChannels: setChannels },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(ChannelForm);
