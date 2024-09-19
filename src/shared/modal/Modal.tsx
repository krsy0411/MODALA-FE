import { ReactNode, useState } from 'react';
import ReactModal from 'react-modal';

// 해당 컴포넌트에서는 모달의 위치만 정중앙으로 세팅해줍니다
const modalCustomStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    borderRadius: '10px',
    boxShadow: '5px 10px 15px rgba(0, 0, 0, 0.3)',
  },
};

// https://github.com/reactjs/react-modal
// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
ReactModal.setAppElement('#root');

interface ModalPropsType {
  children: ReactNode;
}
// 모달 내에서 사용할 UI의 컴포넌트를 자식으로 넣어주면 됩니다
export default function Modal({ children }: ModalPropsType) {
  const [modalIsOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <ReactModal
        isOpen={modalIsOpen}
        style={modalCustomStyle}
        onRequestClose={closeModal}
        closeTimeoutMS={1500}
      >
        {children}
      </ReactModal>
    </>
  );
}
