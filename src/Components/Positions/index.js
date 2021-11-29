import { useState, useEffect } from 'react';
import styles from './postulants.module.css';
import Button from '../../Components/Shared/Button';
import Modal from '../Shared/Modal';
import Message from '../Shared/Message';

function Positions() {
  const [positions, setPositions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [idActive, setIdActive] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [messageType, setMessageType] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/positions`)
      .then((response) => {
        if (response.status === 200 || response.status === 201) return response.json();
        throw new Error(`HTTP ${response.status}`);
      })
      .then((response) => {
        setPositions(response);
      });
  }, []);

  // add
  const handleClickAdd = () => {
    setShowModal(true);
    setModalType('positions');
    setIdActive('');
  };

  const handleAddPosition = (position) => {
    fetch(`${process.env.REACT_APP_API}/positions`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(position)
    })
      .then((response) => {
        if (response.status === 200 || response.status === 201) return response.json();
        throw new Error(`HTTP ${response.status}`);
      })
      .then((response) => {
        if (response.errors || response.code) {
          setShowMessage(true);
          setMessageType('error');
          setMessage('Error with parameters');
          return;
        }
        setShowMessage(true);
        setMessageType('success');
        setMessage('Position added');
        setPositions([...positions, response]);
      })
      .catch((err) => {
        console.log(err);
        setShowMessage(true);
        setMessageType('error');
      });
  };
  //delete position
  const handleClickDelete = (id) => {
    setShowModal(true);
    setIdActive(id);
    setModalType('delete');
  };

  const handleDelete = (id) => {
    fetch(`${process.env.REACT_APP_API}/positions/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then((response) => {
        if (response.status === 200 || response.status === 201) return response.json();
        throw new Error(`HTTP ${response.status}`);
      })
      .then(() => {
        setShowMessage(true);
        setMessageType('success');
        setMessage('Candidate deleted');
        setPositions(positions.filter((position) => position._id !== id));
      })
      .catch((error) => {
        console.log(error);
        setShowMessage(true);
        setMessageType('error');
      });
  };

  // update position 
  const handleClickUpdate = (id) => {
    setShowModal(true);
    setIdActive(id);
    setModalType('positions');
  };

  const handleUpdatePosition = (position) => {
    fetch(`${process.env.REACT_APP_API}/positions/${idActive}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(position)
    })
      .then((response) => {
        if (response.status === 200 || response.status === 201) return response.json();
        throw new Error(`HTTP ${response.status}`);
      })
      .then((response) => {
        setShowMessage(true);
        setMessageType('success');
        setMessage('Position updated');
        setPositions(
          positions.map((position) => (position._id === idActive ? response : position))
        );
      })
      .catch((error) => {
        console.log(error);
        setShowMessage(true);
        setMessageType('error');
      });
  };
  //
  const handleShowModal = () => {
    setShowModal(false);
  };

  const handleShowMessage = () => {
    setShowMessage(false);
  };

  return (
    <section className={styles.container}>
      <h2>Positions</h2>
      {showMessage && (
        <Message type={messageType} message={message} showMessage={handleShowMessage} />
      )}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Client</th>
            <th>Profile</th>
            <th>Full Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Address</th>
            <th>City</th>
            <th>ZIP Code</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {positions.map((position) => {
            return (
              <tr key={position._id}>
                <td>{positions.idClient ? positions.idClient.name : 'ID not found'}</td>
                <td>{positions.idProfile ? positions.idProfile.name : 'ID not found'}</td>
                <td>{positions.name}</td>
                <td>{positions.description}</td>
                <td>{positions.status}</td>
                <td>{positions.address}</td>
                <td>{positions.city}</td>
                <td>{positions.postalCode}</td>
                <td>
                  <Button type="delete" onClick={() => handleClickDelete(position._id)} />
                  <Button type="update" onClick={() => handleClickUpdate(position._id)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Button type="add" onClick={handleClickAdd} />
      {showModal && (
        <Modal
          handleShowModal={handleShowModal}
          modalType={modalType}
          handleSubmit={
            modalType === 'delete'
              ? () => handleDelete(idActive)
              : modalType === 'positions' && !idActive
              ? handleAddPosition
              : handleUpdatePosition
          }
          meta={idActive}
        />
      )}
    </section>
  );
}

export default Positions;