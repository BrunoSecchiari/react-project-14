import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';

const Modal = ({ title, children, onClose }) => {
  /* const hidden = { opacity: 0, y: 30 }; */

  return createPortal(
    <>
      <div className='backdrop' onClick={onClose} />
      <motion.dialog
        open
        className='modal'
        animate='visible'
        initial='hidden'
        exit='hidden'
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')
  );
};

export default Modal;
