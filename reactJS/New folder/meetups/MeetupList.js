import styles from "./MeetupList.module.css";
import Meet from "./Meet";
function MeetupList(props) {
  return (
    <ul className={styles.list}>
      {props.meetups.map((meetup) => (
        <Meet
          key={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
