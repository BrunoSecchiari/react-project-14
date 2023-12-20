import { AnimatePresence, motion } from 'framer-motion';
import { useContext } from 'react';
import { ChallengesContext } from '../store/challenges-context.jsx';

const ChallengeItem = ({ challenge, onViewDetails, isExpanded }) => {
  const { updateChallengeStatus } = useContext(ChallengesContext);

  const formattedDate = new Date(challenge.deadline).toLocaleDateString(
    'en-US',
    {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }
  );

  const handleCancel = () => {
    updateChallengeStatus(challenge.id, 'failed');
  };

  const handleComplete = () => {
    updateChallengeStatus(challenge.id, 'completed');
  };

  return (
    <motion.li layout exit={{ y: -20, opacity: 0 }}>
      <article className='challenge-item'>
        <header>
          <img {...challenge.image} />
          <div className='challenge-item-meta'>
            <h2>{challenge.title}</h2>
            <p>Complete until {formattedDate}</p>
            <p className='challenge-item-actions'>
              <button onClick={handleCancel} className='btn-negative'>
                Mark as failed
              </button>
              <button onClick={handleComplete}>Mark as completed</button>
            </p>
          </div>
        </header>
        <div className='challenge-item-details'>
          <p>
            <button onClick={onViewDetails}>
              View Details{' '}
              <motion.span
                className='challenge-item-details-icon'
                animate={{ rotate: isExpanded ? 180 : 0 }}
              >
                &#9650;
              </motion.span>
            </button>
          </p>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                animate={{ height: 'auto', opacity: 1 }}
                initial={{ height: 0, opacity: 0 }}
                exit={{ height: 0, opacity: 0 }}
              >
                <p className='challenge-item-description'>
                  {challenge.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </article>
    </motion.li>
  );
};

export default ChallengeItem;
