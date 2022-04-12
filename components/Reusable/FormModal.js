export default function FormModal(props) {
  const { msg, status } = props;
  // setTimeout(() => {
  //   setModal(null);
  // }, 1500);
  // console.log(setModal);
  return <h4 className={`modal modal-${status}`}>{msg}</h4>;
}
