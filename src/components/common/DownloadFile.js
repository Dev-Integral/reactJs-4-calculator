import React, {Component} from 'react';

class DownloadFile extends Component{

    DownloadMyData=()=>{
            fetch('https://res.cloudinary.com/iinintinteintegintegrintegral/image/upload/v1603584099/My%20web/Ayoola_T._M_-_FE_cuwqnw.pdf')
            .then(response =>{
                response.arrayBuffer().then((buffer)=>{
                    
                    let url = window.URL.createObjectURL(new Blob([buffer
                    ]));
                    let link = document.createElement('a');
                    link.href = url;

                    link.setAttribute("download", "Ayoola_T._M_.pdf");  //or any other extension
                    document.body.appendChild(link);
                    link.click();
                }) 
            })
            .catch(err => {
                alert("Oops! Check your connection.");
            })
    }
    render(){
        return(
            <div>
                <div className="main-btn"><a href='#' onClick={this.DownloadMyData}>Click to download CV <i className="fa fa-download" /></a></div>
            </div>
        )
    }
}

export default DownloadFile;