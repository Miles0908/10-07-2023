import { Outlet, Link } from "react-router-dom";
import styles from "./index.module.scss";

const DefaultLayout = ({ children }) => {
  const links = [
    {
      id: 1,
      name: "Homepage",
      value: "/",
    },

    {
      id: 2,
      name: "Product",
      value: "/product",
    },

    {
      id: 3,
      name: "Locations",
      value: "/Locations",
    },
  ];

  return (
    <div className={styles.DefaultLayout}>
      <div className={styles.Navbar}>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <Link to={link.value}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      {children}
      <div className={styles.footer}>
        <p>copyright 2023 {"<3"} Edgemony CB7</p>
      </div>
      <Outlet />
    </div>
  );
};
export default DefaultLayout;
