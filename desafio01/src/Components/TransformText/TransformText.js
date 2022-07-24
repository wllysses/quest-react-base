const TransformText = ({children, color, textTransform}) => {
    return(
        <div style={{color: color, textTransform: textTransform}}>
            {children}
        </div>

    )
}

TransformText.defaultProps = {
    color: 'red'
}

export default TransformText