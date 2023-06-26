import styles from "../styles/Header.module.css";

const Header = ()=> {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
    color: '#aeadad',
    textAlign: 'center',
  };
  return(
     <header
     style={headerStyle} className={styles.header}>
        <h1> Todo</h1>
        <p>itmes will presist in localstrage</p>
    </header>
  )
   
  
}
export default Header;