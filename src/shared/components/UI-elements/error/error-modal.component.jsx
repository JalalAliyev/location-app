import React from 'react';

import Modal from '../modal/modal.component';
import Button from '../../form-elements/button/button.component';

const ErrorModal = (props) => {
  return (
    <Modal
      onCancel={props.onClear}
      header="An Error Occurred!"
      show={!!props.error}
      footer={<Button onClick={props.onClear}>Okey</Button>}>
      <p>{props.error}</p>
    </Modal>
  );
};

export default ErrorModal;
