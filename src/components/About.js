import { Link } from "react-router-dom"

const About = () => {
  return (
      <div className="about_con">
        <p>Task Tracker is a mini widget application to keep track of your daily task.</p><br/>
        <p>Using task tracker you can add, remove your task and also set reminder.</p><br/><br/>
        <h4>Task Tracker v1.0.0</h4><br/>  
        <Link to='/' className="link">Go back</Link>  
    </div>
  )
}

export default About