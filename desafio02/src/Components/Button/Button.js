import '../Button/Button.css'

const Button = ({Label}) => {
    return(
        <button onClick={() => alert(`A label desse botão é ${Label}`)}>{Label}</button>
    )
}

Button.defaultProps = {
    Label: 'Clique aqui'
}

export default Button