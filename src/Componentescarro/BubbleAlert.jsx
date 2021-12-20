import { Component } from "react";

const styles = {
  bubbleAlert: {
    borderRadius: "15px",
    backgroundColor: "#E9725A",
    color: "#fff",
    padding: "2px 10px",
    fontSize: "0.9rem",
    width: "20px",
  },
};

class BubbleAlert extends Component {
  getNumber(n) {
    if (!n) {
      return "";
    }
    return n > 9 ? "9+" : n;
  }

  render() {
    const { value } = this.props;
    return <span style={styles.bubbleAlert}>{this.getNumber(value)}</span>;
  }
}

export default BubbleAlert;
