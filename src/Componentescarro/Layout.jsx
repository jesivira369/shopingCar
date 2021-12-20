import { Component } from "react";

const styles = {
  layout: {
    backgroundColor: "#fff",
    color: "#0A283E",
    alingItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  container: {
    width: "1200px",
  },
};

class Layout extends Component {
  render() {
    return (
      <div style={styles.layout}>
        <div style={styles.container}>{this.props.children}</div>
      </div>
    );
  }
}
export default Layout;
