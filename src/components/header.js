function Header() {
    return (
        <header className="d-flex justify-content-end pb-2 border-bottom">
          <div className="d-inline px-1 rounded cart-button border border-2 float-end">
            Cart: 4 items
          </div>
        </header>
    );
}
  
export default Header;