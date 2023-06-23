import Card from './Card';
import Subtitle from '../Subtitle/Subtitle';
import './Community.css';
import memberIcon from '../../assets/memberIcon.svg';
import memberIcon2 from '../../assets/memberIcon2.svg';
import memberIcon3 from '../../assets/memberIcon3.svg';

const Community = () => {
  return (
    <section className="community-container">
      <Subtitle
        text="Manage your entire community in a single system"
        size="3rem"
        align="center"
      />
      <p
        style={{
          textAlign: 'center',
        }}
      >
        Who is Nextcent suitable for?
      </p>

      <div className="cards-container">
        <Card
          src={memberIcon}
          alt="member icon"
          title="Membership Organisations"
          desc="Our membership management software provides full automation of membership renewals and payments"
        />
        <Card
          src={memberIcon2}
          alt="member icon"
          title="National Associations"
          desc="Our membership management software provides full automation of membership renewals and payments"
        />
        <Card
          src={memberIcon3}
          alt="member icon"
          title="Clubs And Groups"
          desc="Our membership management software provides full automation of membership renewals and payments"
        />
      </div>
    </section>
  );
};

export default Community;
