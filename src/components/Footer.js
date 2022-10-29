import { Link } from "react-router-dom"

const Footer = () => {
  return (
      <footer className="footer flexc">
        <div>Made by <a href="https://dasdebjeet.github.io/">Debjeet Das</a></div>
        <div className="flexc" style={{marginTop: '5px', width:'100%', justifyContent: 'space-between'}}>
            <div>Copyright &copy; 2022</div>
            <div><Link to="/about" className="link">About</Link></div>
        </div>
    </footer>
  )
}

export default Footer