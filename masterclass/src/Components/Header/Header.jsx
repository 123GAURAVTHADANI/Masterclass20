import "../../index.css";
function Header() {
  return (
    <header>
      <img
        width={100}
        src="https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png"
      />
      <form>
        <input placeholder="Search anything" className="search" />
      </form>
      <div className="header__span">
        <span>
          <span>Hello Gaurav</span>
          <br />
          <b>Accounts & Lists</b>
        </span>
        <span>
          <span>Return</span>
          <br />
          <b>&Orders</b>
        </span>
      </div>
    </header>
  );
}

export default Header;
