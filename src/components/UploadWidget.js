import React from 'react';

class UploadWidget extends React.Component {
 
    checkUploadResult = (resultEvent) => {
        if (resultEvent.event === 'success') {
            console.log(this.props.currentUser.id)
            this.props.postPhoto({user_id: this.props.currentUser.id,
            caption: '',
            url: resultEvent.info.secure_url})
            .then(this.props.history.push('/myastronomy'))
        }
    }

    showWidget = (widget) => {
        widget.open()
    }

    render() {

        let widget = window.cloudinary.createUploadWidget({
            cloudName: "dinzh7vu8",
            uploadPreset: "zcfagdyx" },
            (error, result) => {this.checkUploadResult(result)})

      return (
        <>
          <div id='PhotoContaner'>
            <button onClick={this.showWidget(widget)}>Upload Photo</button>
          </div>  
         </> 
        );
      }
    }
  
export default UploadWidget;