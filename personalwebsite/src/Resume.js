import React, { Component } from 'react';
// import { Page } from 'react-pdf';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


class Resume extends Component {

  state = {
      numPages: null,
      pageNumber: 1,
    }

    onDocumentLoadSuccess = ({ numPages }) => {
      this.setState({ numPages });
    }

    render() {
      const { pageNumber, numPages } = this.state;

      return (
        <div className='main'>
          <Document
            file="/Users/Manny/Personal-Website/MannyShapir.pdf"
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <p>Page {pageNumber} of {numPages}</p>
        </div>
      );
    }

}

export default Resume;





// render() {
//   return (
//     <div>
//     <Document file='./MannyShapir.pdf' >
//     <Page />
//     </Document>
//     </div>
//   );
// }
