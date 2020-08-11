import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { connect } from "react-redux";
import {
  getStickyNotes,
  deleteStickyNotes,
} from "../actions/stickyNoteActions";

class StickyNotes extends Component {
  componentDidMount() {
    this.props.getStickyNotes();
  }

  onDeleteClick = (id) => {
    this.props.deleteStickyNotes(id);
  };

  render() {
    const { sticky } = this.props.stickyNotes;
    return (
      <Container className="mx-0" fluid>
        <ListGroup>
          {sticky.map(({ _id, content }) => (
            <ListGroupItem key={_id}>
              {content}
              {this.props.isAuthenticated ? (
                <Button
                  className="remove-btn float-right"
                  color="danger"
                  size="sm"
                  onClick={this.onDeleteClick.bind(this, _id)}
                >
                  Delete
                </Button>
              ) : null}
            </ListGroupItem>
          ))}
        </ListGroup>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  stickyNotes: state.sticky,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getStickyNotes, deleteStickyNotes })(
  StickyNotes
);
