// const Button = ({ content = "", handleClick = () => {}, disabled = false }) => {
//   return (
//     <button onClick={handleClick} disabled={disabled}>
//       {content}
//     </button>
//   );
// };

const Button = ({ content, handleClick, disabled }) => {
  return (
    <button onClick={handleClick} disabled={disabled}>
      {content}
    </button>
  );
};

Button.defaultProps = {
  content: "",
  handleClick: () => {},
  disabled: false,
};

export default Button;
