//Import styling to this componet only
import styles from "./Meet.module.css";

import Card from "../ui/Card";
function Meet(props) {
  return (
    //using props in each dive to take data from parents componets
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={styles.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={styles.actions}>
          <button>To Favourites</button>
        </div>
      </Card>
    </li>
  );
}

export default Meet;
