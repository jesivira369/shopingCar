import { Component } from "react";
import BubbleAlert from "./BubbleAlert.jsx";
import DetallesCarro from "./DetallesCarro.jsx";

const styles = {
  carro: {
    backgroundColor: "#359A2C",
    color: "#fff",
    border: "none",
    padding: "15px",
    borderRadius: "15px",
    cursor: "pointer",
  },
  bubble: {
    position: "relative",
    left: 12,
    top: 20,
  },
};

class Carro extends Component {
  render() {
    // Destructuring de las props pasadas desde el componente padre
    const { carro, esCarroVisible, mostrarCarro } = this.props;
    // Determina la cantidad de elementos en el carro para mostrar la burbuja de alerta
    const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0);
    return (
      <div>
        <span style={styles.bubble}>
          {cantidad !== 0 ? <BubbleAlert value={cantidad} /> : null}
        </span>
        <button onClick={mostrarCarro} style={styles.carro}>
          Carro
        </button>
        {esCarroVisible ? <DetallesCarro carro={carro} /> : null}
      </div>
    );
  }
}
export default Carro;
