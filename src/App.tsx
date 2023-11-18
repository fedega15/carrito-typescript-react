// App.tsx

import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import FeatureSection from "./components/FeatureSection";
import { FaCreditCard, FaLock, FaShippingFast } from "react-icons/fa";
import CustomModal from "./components/CustomModal";

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

    window.addEventListener("resize", handleResize);
    handleResize(); // Verificar el ancho inicial al cargar la página

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const content = (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {viewCart ? (
        <CustomModal isOpen={viewCart} onRequestClose={closeModal} isSmallScreen={isSmallScreen}>
          <Cart />
        </CustomModal>
      ) : (
        <ProductList />
      )}
      <div className="feature-section2">
      <FeatureSection icon={<FaShippingFast />} title="Envío a todo el país" title2="Despachamos los pedidos en el dia" />
      <FeatureSection icon={<FaCreditCard />} title="3 Cuotas sin interés" title2="Con todas las tarjetas en tres cuotas " />
      <FeatureSection icon={<FaLock />} title="Compra asegurada" title2="Contamos con seguro de envios " />
      </div>
      <Footer viewCart={viewCart} />
    </>
  );

  return content;
}

export default App;
