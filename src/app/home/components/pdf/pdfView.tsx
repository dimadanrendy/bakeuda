

const PDFViewer = () => {
  const pdfURL = '/pdf/sejarah.pdf'; // Update the path to your PDF file

  return (
    
    <div className='grid justify-items-center mt-5'>
    <iframe
      src='/pdf/sejarah.pdf'
      title="PDF Viewer"
      width="80%"
      height="700px" // You can adjust the height as needed
    />
    </div>
    
  );
};

export default PDFViewer;

