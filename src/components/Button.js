import PropTypes from 'prop-types'

const Button = ({text, onClick}) => {
    return (
        <button onClick={onClick} className='btn taskAddBtn flexc' style={{ margin: '0px 14px' }}>{text}</button>
    )
}



Button.propTypes = {
    text: PropTypes.object,
    onClick: PropTypes.func
}

export default Button