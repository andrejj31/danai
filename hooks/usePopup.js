import { useState, useEffect } from "react";

export default function usePopup(props) {
  const {
    popup: { open },
  } = props;
  const [show, setShow] = useState(open);
  useEffect(() => {
    setShow(open);
  }, [open]);

  const handleClose = (e) => {
    e.preventDefault();
    setShow(false);
    props.setPopup({ ...props.popup, open: false });
  };

  return { show, handleClose };
}
