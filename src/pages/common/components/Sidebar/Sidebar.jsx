import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const menuItems = [
    {
      id: '1',
      name: 'Home',
      path: '/',
    },
    {
      id: '2',
      name: 'Movies',
      path: '/movies',
    },
  ];
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarBrandBox}></div>
      <ul>
        {menuItems.map(item => (
          <li key={item.id}>
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                [styles.navLink, isActive ? styles.navLinkActive : ''].join(' ')
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
