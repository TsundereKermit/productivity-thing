import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {v4 as uuid} from 'uuid';

class StickyNotes extends Component {
    state = {
        sticky: [
            { id: uuid(), content: "haha what if i put" },
            { id: uuid(), content: "my minecraft bed" },
            { id: uuid(), content: "next to yours" },
            { id: uuid(), content: "jk... unless?" },
        ]
    }

    render() {
        const {sticky} = this.state;

        return (
            <Container className="mx-0" fluid>
                <Button 
                    color="dark" 
                    style={{marginBottom: "2rem"}}
                    onClick={() => {
                        const content = prompt("Enter sticky note");
                        if (content) {
                            this.setState({sticky: [...this.state.sticky, {id: uuid(), content: content}]});
                        }
                    }}
                >
                    Add sticky note
                </Button>
                <ListGroup>
                    {sticky.map(({ id, content }) => (
                        <ListGroupItem key={id}>
                            {content}
                            <Button 
                                className="remove-btn float-right" 
                                color="danger" 
                                size="sm"
                                onClick={() => {
                                    this.setState({sticky: this.state.sticky.filter(note => note.id !== id)});
                                }}
                            >
                                Delete
                            </Button>
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </Container>
        )
    }
}

export default StickyNotes;