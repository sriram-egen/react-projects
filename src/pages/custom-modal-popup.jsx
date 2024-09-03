import { useState } from "react";
import CustomModalPopup from "../components/custom-modal-popup";

export default function CustomModalPopupPage() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose(){
    setShowModalPopup(false)
  }

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {showModalPopup && <CustomModalPopup onClose={onClose}  />}
    </div>
  );
}
