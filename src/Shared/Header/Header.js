import { Avatar, Dropdown, Navbar } from "flowbite-react";
import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hook/useFirebase";

const Header = () => {
  const { handleSignOut, user } = useFirebase();
  console.log(user);

  return (
    <Navbar className="p-0" fluid={true} rounded={true}>
      <Navbar.Brand>
        <img
          src="https://i.ibb.co/b36sdhF/Digital-Garage-Horiz-Colour.png"
          className=" h-10 sm:h-12"
          alt="Flowbite Logo"
        />
      </Navbar.Brand>
      {!user ? (
        <Link
          className="text-lg font-bold bg-blue-700 text-white my-2 w-20 h-8 rounded-lg hover:bg-blue-900 order-2 hover:text-gray-200"
          to="/login"
        >
          Log in
        </Link>
      ) : (
        <div className="flex order-2 px-0">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar alt="User settings" img={user.photoURL} rounded={true} />
            }
          >
            <Dropdown.Header>
              <span className="block text-xl">{user.displayName}</span>
              <span className="block truncate text-sm font-medium">
                {user.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
      )}

      <Navbar.Collapse className="nav-bar">
        <Navbar.Link>
          <p>
            <Link to="/"> Home </Link>
          </p>
        </Navbar.Link>
        <Navbar.Link>
          <p>
            <Link to="/services"> Services </Link>
          </p>
        </Navbar.Link>
        <Navbar.Link>
          <p>
            <Link to="/experts">Experts</Link>
          </p>
        </Navbar.Link>
        <Navbar.Link>
          <p>
            <Link to="/about">About</Link>{" "}
          </p>
        </Navbar.Link>
        <Navbar.Link>
          <p>
            <Link to="/contact">Contact</Link>
          </p>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
