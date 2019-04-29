import React from "react";
import ConfirmationQuestions from "./ConfirmationQuestions";
import NewTicketForm from "./NewTicketForm";
import PropTypes from "prop-types";

class NewTicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    // this.handleClick = this.handleClick.bind(this);
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(
      this
    );
  }

  //   handleClick() {
  //     this.setState({ formVisibleOnPage: true });
  //     console.log(
  //       "formVisibleOnPage is currently set to:" + this.state.formVisibleOnPage
  //     );
  //   }

  handleTroubleshootingConfirmation() {
    this.setState({ formVisibleOnPage: true });
  }

  render() {
    let visibleContent = null;
    if (this.state.formVisibleOnPage) {
      visibleContent = (
        <NewTicketForm onNewTicketCreation={this.props.onNewTicketCreation} />
      );
    } else {
      visibleContent = (
        <ConfirmationQuestions
          onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}
        />
      );
    }
    return <div>{visibleContent}</div>;
  }
}

NewTicketControl.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketControl;
