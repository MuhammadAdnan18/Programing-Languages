import { Link } from "react-router-dom";
//To import css file in the nav bar
import styles from "./MainNavigation.module.css";
function MainNavigation() {
  //define name of nav bar i-e:react Meetups and in nav tag define all the pages with a list
  //unlike HTML in react we dont put href tag to provide link to different pages bcz it would reload the whole application instead we use the link component with to provide by react itself.
  //NOW that the links are working the problem is styling them, see in bigger applicatons multiple components have a dedicated css file for their styling to make this add .module before.css in the file name eg:file.module.css

  return (
    <header className={styles.header}>
      <div className={styles.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>

          <li>
            <Link to="/new-meetup">New Meetups</Link>
          </li>

          <li>
            <Link to="/favourites">Favourites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
