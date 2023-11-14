import React from 'react';

const PDFViewerStruktur = () => {
  const pdfURL = '/pdf/struktur.pdf'; // Update the path to your PDF file

  return (
    <>
    <div className='grid justify-items-center mt-5'>
    <iframe
      src={pdfURL}
      title="PDF Viewer"
      width="100%"
      height="700px" // You can adjust the height as needed
    ></iframe>
    </div>
    </>
  );
};

export default PDFViewerStruktur;
