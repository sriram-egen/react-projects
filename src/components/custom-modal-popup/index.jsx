import "./styles.css";

export default function CustomModalPopup({
  id,
  header,
  body,
  footer,
  onClose,
}) {
  return (
    <div id={id || "modal"} className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <span onClick={onClose} className="close-modal-icon">
            &times;
          </span>
          <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="modal-body">
          {body ? body : <div>This is our modal body</div>}
        </div>
        <div className="modal-footer">
          {footer ? footer : <div>This is our modal footer</div>}
        </div>
      </div>
    </div>
  );
}
