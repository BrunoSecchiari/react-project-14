import Header from '../components/Header.jsx';
import Challenges from '../components/Challenges.jsx';
import ChallengesContextProvider from '../store/challenges-context.jsx';

const ChallengesPage = () => {
  return (
    <ChallengesContextProvider>
      <Header />
      <main>
        <Challenges />
      </main>
    </ChallengesContextProvider>
  );
};

export default ChallengesPage;
