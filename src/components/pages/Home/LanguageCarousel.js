import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';

import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJsBadge,
  DiJava,
  DiMysql,
} from "react-icons/di";
import { SiMicrosoftazure, 
        SiPython, 
        SiHtml5, 
        SiCss3,
        SiPostgresql,
        SiAngularjs } from "react-icons/si";


function LanguageCarousel() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div>
      <ReactSimplyCarousel
        autoplay={true}
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 2,
            itemsToScroll: 2,
            minWidth: 768,
          },
        ]}
        speed={3000}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        <div style={{width: 200, height: 200, background: 'black'}}>
          
          <DiJsBadge size={180} ></DiJsBadge>
          <p className='lavendar'>Javascript</p>
        </div>
        <div style={{ width: 200, height: 200, background: 'black' }}>
          
          <SiPython size={180}></SiPython>
          <p className='lavendar' >Python</p>
        </div>
        <div style={{ width: 200, height: 200, background: 'black' }}>
          
          <SiHtml5 size={180}></SiHtml5>
          <p className='lavendar'>HTML</p>
        </div>
        <div style={{ width: 200, height: 200, background: 'black' }}>
          
          <SiCss3 size={180}></SiCss3>
          <p className='lavendar'>CSS</p>
        </div>
        <div style={{ width: 200, height: 200, background: 'black' }}>
          
          <SiMicrosoftazure size={180}></SiMicrosoftazure>
          <p className='lavendar'>Azure</p>
        </div>
        <div style={{ width: 200, height: 200, background: 'black' }}>
          
          <SiPostgresql size={180}></SiPostgresql>
          <p className='lavendar'>PostgreSQL</p>
        </div>
        <div style={{ width: 200, height: 200, background: 'black' }}>
          
          <DiMysql size={180}></DiMysql>
          <p className='lavendar'>MySQL</p>
        </div>
        <div style={{ width: 200, height: 200, background: 'black' }}>
          
          <SiAngularjs size={180}></SiAngularjs>
          <p className='lavendar'>Angular.js</p>
        </div>
        <div style={{ width: 200, height: 200, background: 'black' }}>
          
          <CgCPlusPlus size={180}></CgCPlusPlus>
          <p className='lavendar'>C++</p>
        </div>
        <div style={{ width: 200, height: 200, background: 'black' }}>
          
          <DiJava size={180}></DiJava>
          <p className='lavendar'>Java</p>
        </div>
      </ReactSimplyCarousel>
    </div>
  );
}

export default LanguageCarousel;


