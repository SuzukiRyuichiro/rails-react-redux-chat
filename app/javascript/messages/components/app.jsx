import React from 'react';
import MessageList from '../containers/message_list';
import EmptyMessageList from './empty_message_list';
import ChannelList from '../containers/channel_list';
import MessageForm from '../containers/message_form';
import ChannelForm from '../containers/channel_form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const channelSelected = this.props.match.params.channel !== "No Channel Selected"
    let renderMessageList;
    console.log(channelSelected);
    if (channelSelected) {
      renderMessageList = <MessageList channelFromParams={this.props.match.params.channel} />
    } else {
      renderMessageList = <EmptyMessageList />
    }

    return (
      <div className="app">
        <div className="left-screen sticky-top">
          <div className="py-2 border-bottom">
            <h2><i className="devicon-react-original"></i> <i className="devicon-redux-original"></i> Chat</h2>
          </div>
          <ChannelList channelFromParams={this.props.match.params.channel} />
          <ChannelForm />
        </div>
        <div className="right-screen">
          <div className="right-screen-inner">
            {renderMessageList}
          </div>
          <MessageForm channelFromParams={this.props.match.params.channel} />
        </div>
      </div>
    );
  }
};
