import { useEffect, useState } from "react";
import Modal from "react-modal";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import { IoMdClose } from "react-icons/io";

Modal.setAppElement("#root");
const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "55%",
    left: "100%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-100%, -50%)",
    width: "70%", // Ajusta el ancho del modal
    maxHeight: "450px", // Ajusta la altura máxima del modal
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "20px",
    overflow: "auto", // Hace que el contenido sea desplazable si es demasiado grande
    overlayClassName: "small-screen-modal"
  },
};

function App() {
  const [viewCart, setViewCart] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Función para cerrar el modal
  function closeModal() {
    setViewCart(false);
  }

  // Verificar el ancho de la pantalla y establecer el estado correspondiente
  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth <= 900); // Cambia el ancho límite según tus necesidades
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Verificar el ancho inicial al cargar la página

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
      top: '55%',
      left: '80%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-100%, -50%)',
      width: "60%",
      maxHeight: "450px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "20px",
      overflow: "auto",
    },
  };

  // Si la pantalla es pequeña, ajusta el estilo del modal
  if (isSmallScreen) {
    customStyles.content = {
      ...customStyles.content,
      width: '100%',
      left: '0',
      transform: 'none',
      top:'17%'
    };
  }

  
  return (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      <Modal
        isOpen={viewCart}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Cart Modal"
      >
        <button className="product__2" onClick={closeModal}>
          <IoMdClose />
        </button>
        <Cart />
      </Modal>
      <ProductList />
      <Footer viewCart={viewCart} />
    </>
  );
}

export default App;
