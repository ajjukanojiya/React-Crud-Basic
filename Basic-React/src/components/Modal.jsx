function Modal({ isOpen, children }) {
  if (!isOpen) return null;
    console.log('cc',children)
  return (
    <div style={overlay}>
      <div style={box}>
        {children}
      </div>
    </div>
  );
}

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const box = {
  background: "#fff",
  padding: "20px",
  borderRadius: "8px",
  width: "300px"
};

export default Modal;