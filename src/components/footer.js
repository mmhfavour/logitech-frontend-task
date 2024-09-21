function Footer({ resetProducts}) {
    return (
      <footer className='reset-container mt-2 pt-2'>
        <button className="btn btn-secondary" onClick={ () => resetProducts() }>Reset</button>
      </footer>
    );
}
  
export default Footer;