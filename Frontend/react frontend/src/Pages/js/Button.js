import React from 'react';
import '../css/Button.css'
import {Modal, Button, ButtonToolbar, setModalShow, modalShow} from 'react-bootstrap'

function FileModal(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Add File
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>

        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
        </Modal>
    );
}
    
function FileUploadButton() {
    const [modalShow, setModalShow] = React.useState(false);
    
    return (
        <ButtonToolbar>


        <div className="button-div" onClick={() => setModalShow(true)}>
            <container>
                <h1 className="uploadbutton">+</h1>
            </container>

        </div>


        <FileModal
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
        </ButtonToolbar>
    );
}

  
export default FileUploadButton





    /*
    constructor(){
        super()
        this.state = {

        }
    }*/
/*

      return(
          <div className="button-div">
            <container>
                <h1 className="uploadbutton">+</h1>
            </container>

          </div>
      )*/
      /*
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Centered Modal</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
}
function FileUploadButton() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <ButtonToolbar>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
  
        <test
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </ButtonToolbar>
    );*/
