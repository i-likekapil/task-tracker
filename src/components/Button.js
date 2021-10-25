import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, color, onClick }) => {

    // const onClick = () => {
    //     console.log("clicked")
    // }



    return (
        <button className='btn' style={{ backgroundColor: color }} onClick={onClick}>{text}</button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,

}

export default Button
