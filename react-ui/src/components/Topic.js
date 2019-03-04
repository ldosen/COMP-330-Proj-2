import React from "react";

//Topic component, basically everything in each list item
//Includes topic name and its sentiment
class Topic extends React.Component {
  render() {
    //check if topic is currently selected, if so set TopicInfo component
    //to contain the data of this topic via the setTopic function in its props
    if (this.props.listPosition === this.props.selectedTopic) {
      this.props.setTopicInfo(this.props.listPosition);
      return (
        //highlight topic
        <div className="highlighted individual-topic">
          <div className="topic-subcontainer">
            {/*Render topic name*/}
            <span>{this.props.name}</span>
            {/*Render topic sentiment via getTopicInfo function from props
            and change color of text based on which one*/}
            <span
              className={
                "sentiment " +
                this.props.getTopicInfo(this.props.listPosition).sentiment
              }
            >
              {this.props.getTopicInfo(this.props.listPosition).sentiment}
            </span>
          </div>
        </div>
      );
    } else {
      //render all topics that aren't currently selected (should be 9)
      return (
        <div className="individual-topic">
          <div className="topic-subcontainer">
            {/*Render topic name*/}
            <span>{this.props.name}</span>
            {/*Render topic sentiment via getTopicInfo function from props
            and change color of text based on which one*/}
            <span
              className={
                "sentiment " +
                this.props.getTopicInfo(this.props.listPosition).sentiment
              }
            >
              {this.props.getTopicInfo(this.props.listPosition).sentiment}
            </span>
          </div>
        </div>
      );
    }
  }
}

export default Topic;
