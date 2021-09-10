import NavBarCategories from "./nav_bar/nav_bar_categories";
import NavBar from "./nav_bar/nav_bar";

const navHeader = () => {
  return (
    <div>
      <header id="nav">
        <NavBar />
      </header>
      <div>
        <NavBarCategories />
      </div>
    </div>
  );
};

export default navHeader;
