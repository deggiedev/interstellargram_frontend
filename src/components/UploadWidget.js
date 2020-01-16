import React from 'react';

class UploadWidget extends React.Component {
 
    checkUploadResult = (resultEvent) => {
        if (resultEvent.event === 'success') {
            console.log(this.props.currentUser.id)
        }
    }

    showWidget = (widget) => {
        widget.open()
    }

    render() {

        let widget = window.cloudinary.createUploadWidget({
            cloudName: "dinzh7vu8",
            uploadPreset: "InterstellarGram" },
            (error, result) => {this.checkUploadResult(result)})

      return (
          <div id='photo-form-container'>
            <button onClick={this.showWidget(widget)}>Upload Photo</button>
          </div>  
        );
      }
    }
  
export default UploadWidget;