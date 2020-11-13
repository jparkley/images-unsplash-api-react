import React from "react";

class ImageCard extends React.Component {

  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = {span: 0};
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpan);
  }

  setSpan = () => {
    const height = this.imageRef.current.clientHeight;
    const span = Math.ceil(height / 10) + 1;
    this.setState({span});
  }

  render() {
    const {urls, alt_description, key} = this.props.image;
    return (
      <div style={{gridRowEnd: `span ${this.state.span}`}}>
      <img ref={this.imageRef} src={urls.regular} alt={alt_description} key={key} />
      </div>
    );
  }
}

export default ImageCard;
