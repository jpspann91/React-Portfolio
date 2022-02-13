import React, {useEffect, useState} from 'react';
import resumePdf from '../../../Assets/Joseph_Spann_Resume.PDF'
import {RiDownloadLine} from 'react-icons/ri'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
const resumeLink = "https://raw.githubusercontent.com/jpspann91React-Portfolio/main/src/Assets/Joseph_Spann_Resume.PDF";

function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className='container-fluid fluid container'>
      <div className='row' style={{justifyContent: 'center', position: 'relative'}}>
        <button className='btn button' href={resumePdf}>
          <RiDownloadLine/>
          &nbsp;Download Resume
        </button>
      </div>
      <div className='row resume'>
        <Document file={resumeLink}>
          <Page pageNumber={1} scale={width > 786? 1.7: 0.6}/>
        </Document>
      </div>
      <div className='row' style={{justifyContent: 'center', position: 'relative'}}>
        <button className='btn button' href={resumePdf}>
          <RiDownloadLine/>
          &nbsp;Download Resume
        </button>
      </div>
      
    </div>
  );
}
export default Resume

