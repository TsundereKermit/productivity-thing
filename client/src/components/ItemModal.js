import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { connect } from "react-redux";
import { addStickyNote } from "../actions/stickyNoteActions";
import { v4 as uuid } from "uuid";

class ItemModal extends Component {
  state = {
    modal: false,
    note: "",
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newStickyNote = {
      id: uuid(),
      content: this.state.note,
    };

    this.props.addStickyNote(newStickyNote);
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem", marginLeft: "1rem" }}
          onClick={this.toggle}
        >
          Add Sticky Note
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Add a sticky note to the board
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="note">Sticky note</Label>
                <Input
                  type="text"
                  name="note"
                  placeholder=""
                  onChange={this.onChange}
                />
                <Button color="dark" style={{ marginTop: "1rem" }} block>
                  Add Sticky Note
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  stickyNotes: state.sticky,
});

export default connect(mapStateToProps, { addStickyNote })(ItemModal);
