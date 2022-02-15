import React, { useEffect, useState } from 'react';
import './Resume.css'
import resumePdf from '../../../Assets/Joseph_Spann_Resume.PDF'
import { RiDownloadLine } from 'react-icons/ri'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
// const resumeLink = "https://github.com/jpspann91/React-Portfolio/raw/b6f458ed3fdbb2e5211af28183befe421a7db47e/src/Assets/Joseph_Spann_Resume.PDF";

function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <div className='resume-container'>
        <div>
          <button className='btn dwnld-btn'>
            <RiDownloadLine />
            <a href={resumePdf} target="_blank" rel="noreferrer" download> &nbsp;Download Resume</a>

          </button>
        </div>
        <div className='row resume container-fluid'>
          <div className='col'>
          <Document file={resumePdf}>
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            <Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
          </div>
        </div>
        <div style={{ justifyContent: 'center'}}>
          <button className='btn dwnld-btn' >
            <RiDownloadLine />
            <a href={resumePdf} target="_blank" rel="noreferrer" download> &nbsp;Download Resume</a>

          </button>
        </div>

      </div>
    </div>
  );
}
export default Resume

