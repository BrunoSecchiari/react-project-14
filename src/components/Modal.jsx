import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';

const Modal = ({ title, children, onClose }) => {
  return createPortal(
    <>
      <div className='backdrop' onClick={onClose} />
      <motion.dialog
        open
        className='modal'
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        exit={{ opacity: 0, y: 30 }}
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')
  );
};

export default Modal;
