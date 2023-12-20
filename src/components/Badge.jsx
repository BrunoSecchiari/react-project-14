import { motion } from 'framer-motion';

const Badge = ({ caption }) => {
  return (
    <motion.span
      className='badge'
      initial={{ scale: 1.1 }}
      animate={{ scale: [1.1, 1.3, 1.1] }}
      transition={{ duration: 0.3 }}
    >
      {caption}
    </motion.span>
  );
};

export default Badge;
