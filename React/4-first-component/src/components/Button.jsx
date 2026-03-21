import "./Button.css"


// This how we can make button dynamic based on the props condition
const Button = ({type,btnText ,handler}) => {// if we destructure the props{props} -> we get {type,btnText} so in place of props i can use {type,btnText}
  if (type === 'success') {
    return <button className="green-button" onClick={handler}>
      {btnText}
    </button>
  }
  else if (type === 'danger') {
    return <button className="red-button" onClick={handler}>
      {btnText}
    </button>
  }
  else {
    return <button className="blue-button" onClick={handler}>
      {btnText}
    </button>
  }
};
export default Button;


// export function DangerButton() {
//   return (
//     <button className="red-button">Delete</button>
//   );
// }

// export function SuccessButton (){
//   return (
//     <button className="green-button">Save</button>
//   );
// }


