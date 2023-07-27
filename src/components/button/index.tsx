interface ButtonProps {
    style?: string;
    text: string
}

const Button: React.FC<ButtonProps> = ({style, text}) => {
  return (
    <button className={`btn-primary mt-14 ${style}`}> {text} </button>
  )
}

export default Button;
