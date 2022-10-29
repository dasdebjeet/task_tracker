import { useLocation } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'


import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
    const loc = useLocation()
    return (
        <header className='header'>
            <h1>{title}</h1>
            {loc.pathname === '/' && <Button text={showAdd ? <FaTimes /> : <FaPlus />} onClick={onAdd} />}
        </header>
    )
}


// CSS in js
// const headerStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header