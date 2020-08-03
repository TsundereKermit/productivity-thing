import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { connect } from "react-redux";
import {
  getStickyNotes,
  deleteStickyNotes,
} from "../actions/stickyNoteActions";
import PropTypes from "prop-types";

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
          {sticky.map(({ id, content }) => (
            <ListGroupItem key={id}>
              {content}
              <Button
                className="remove-btn float-right"
                color="danger"
                size="sm"
                onClick={this.onDeleteClick.bind(this, id)}
              >
                Delete
              </Button>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Container>
    );
  }
}

StickyNotes.propTypes = {
  getStickyNotes: PropTypes.func.isRequired,
  stickyNotes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  stickyNotes: state.sticky,
});

export default connect(mapStateToProps, { getStickyNotes, deleteStickyNotes })(
  StickyNotes
);
