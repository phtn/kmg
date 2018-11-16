import React, { useReducer } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Responsive } from "semantic-ui-react";
import Palace from '../assets/palace.svg'
import MenuIcon from '../assets/menu.svg'

function reducer(state, action) {
  switch (action) {
    case "home":
      return { home: true, web: false };
    case "web":
      return { home: false, web: true };
    default:
      return state;
  }
}

const styles = {
  container: {
    backgroundColor: "rgb(128, 224, 208)"
  },
  items: {
    textTransform: "uppercase",
    fontFamily: "Abel, sans-serif",
    fontWeight: "bolder",
    letterSpacing: 2,
    // color: "white"
  },
  links: {
    color: "#fff"
  }
};

export default props => {
  const [state, dispatch] = useReducer(reducer, { home: true, web: false });

  return (
    <div style={styles.container}>
      {/* <Responsive as={Menu} pointing secondary>
        <Menu.Item active={state.home}>
          <NavLink to="/" onClick={()=> dispatch('home')}>Keystone Media</NavLink>
        </Menu.Item>
        <Menu.Item position="right" />
        <Menu.Item active={state.web} position="right">
          <NavLink to="/webapps" onClick={()=> dispatch('web')}> Web Apps</NavLink>
        </Menu.Item>
      </Responsive> */}

      <Responsive as={Menu} minWidth={768} pointing secondary>
        {/* <Menu.Item active={ui.activeTab === 'home'} ><img src={Castle} height={20} alt=''/></Menu.Item> */}
        <Menu.Item style={styles.items} active={state.home}>
          <NavLink style={styles.links} to="/" onClick={() => dispatch("home")}>
            <img src={Palace} width={20} alt='palace'/>
          </NavLink>
        </Menu.Item>
      </Responsive>
      <Responsive as={Menu} maxWidth={767} pointing secondary>
        {/* <Menu.Item><img src={Castle} height={20} alt=''/></Menu.Item> */}
        <Menu.Item style={styles.items} active={state.home}>
          <NavLink style={styles.links} to="/" onClick={() => dispatch("home")}>
            <img src={Palace} width={25} alt='palace'/>
          </NavLink>
        </Menu.Item>
        <Menu.Item position="right" style={styles.items} active={state.web}>
          <NavLink style={styles.links} to="/web" onClick={() => dispatch("web")}>
          <img src={MenuIcon} width={25} alt='MenuIcon'/>
          </NavLink>
        </Menu.Item>
      </Responsive>
    </div>
  );
};