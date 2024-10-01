import React, { useState, useEffect } from "react";
import classes from "./Header.module.css";
import { AiOutlineMenu } from "react-icons/ai";

function LowerHeader() {
  // State to manage the visibility of the items
  const [showItems, setShowItems] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Function to toggle visibility
  const handleToggle = () => {
    if (isMobile) {
      setShowItems(!showItems);
    }
  };

  // Check screen size on component mount and when window is resized
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth <= 600) {
        setIsMobile(true);
        setShowItems(false); // Hide items initially on mobile
      } else {
        setIsMobile(false);
        setShowItems(true); // Show all items by default on larger devices
      }
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className={classes.lower_container}>
      <ul>
        <li onClick={handleToggle}>
          <AiOutlineMenu />
          <p>All</p>
        </li>

        {/* Conditionally render the rest of the items */}
        {showItems && (
          <>
            <li>Today's Deals</li>
            <li>Customer Service</li>
            <li>Registry</li>
            <li>Gift Cards</li>
            <li>Sell</li>
          </>
        )}
      </ul>
    </div>
  );
}

export default LowerHeader;
