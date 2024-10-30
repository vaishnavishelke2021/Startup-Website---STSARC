// import React from 'react';
// import styled from 'styled-components';

// const Button = ({text}) => {
//   return (
//     <StyledWrapper>
//       <button id="bottone1"><strong>{text}</strong></button>
//     </StyledWrapper>
//   );
// }

// const StyledWrapper = styled.div`
//   #bottone1 {
//    padding: 12px 33px;
//    border-radius: 30px;
//    background: #F97316;
//    border: none;
//    font-family: inherit;
//    text-align: center;
//    cursor: pointer;
//    transition: 0.4s;
//    color: white;
//   }

//   #bottone1:hover {
//    box-shadow: 7px 5px 56px -14px #f97416c6;
//    transition: all 0.3s;
//   }

//   #bottone1:active {
//    transform: scale(0.97);
//    box-shadow: 7px 5px 56px -10px #f97416c6;
//   }`;

// export default Button;





// ========================================================= 2 ======================================================= 


// import React from 'react';
// import styled from 'styled-components';

// const Button = ({text}) => {
//   return (
//     <StyledWrapper>
//       <button className="button2"> {text} </button>
//     </StyledWrapper>
//   );
// }

// const StyledWrapper = styled.div`
//   .button2 {
//     display: inline-block;
//     transition: all 0.1s ease-in;
//     position: relative;
//     overflow: hidden;
//     z-index: 1;
//     color: #f97316;
//     padding: 0.6em 1.4em;
//     cursor: pointer;
//     font-size: 18px;
//     border-radius: 2.4rem;
//     background: #f6ece5;
//     border: 1px solid #e8e8e8;
//     box-shadow: 3px 3px 12px #c5c5c5, -3px -3px 12px #ffffff;
//   }

//   .button2:active {
//     color: #666;
//     box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
//   }

//   .button2:before {
//     content: "";
//     position: absolute;
//     left: 50%;
//     transform: translateX(-50%) scaleY(1) scaleX(1.25);
//     top: 100%;
//     width: 140%;
//     height: 180%;
//     background-color: rgba(0, 0, 0, 0.05);
//     border-radius: 50%;
//     display: block;
//     transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
//     z-index: -1;
//   }

//   .button2:after {
//     content: "";
//     position: absolute;
//     left: 55%;
//     transform: translateX(-50%) scaleY(1) scaleX(1.45);
//     top: 180%;
//     width: 160%;
//     height: 190%;
//     background-color: #f97316;
//     border-radius: 50%;
//     display: block;
//     transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
//     z-index: -1;
//   }

//   .button2:hover {
//     color: #ffffff;
//     border: 1px solid #f97316;
//   }

//   .button2:hover:before {
//     top: -35%;
//     background-color: #f97316;
//     transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
//   }

//   .button2:hover:after {
//     top: -45%;
//     background-color: #f97316;
//     transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
//   }`;

// export default Button;



// ===================================== 3 ============================================ 

import React from 'react';
import styled from 'styled-components';

const Button = ({ text, targetId }) => {
  const scrollToSection = () => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StyledWrapper>
      <button onClick={scrollToSection}>{text}</button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    --color: #f97316;
    font-family: inherit;
    display: inline-block;
    width: 8em;
    height: 2.6em;
    line-height: 2.5em;
    margin: 20px;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    border: 2px solid var(--color);
    transition: color 0.5s;
    z-index: 1;
    font-size: 17px;
    border-radius: 30px;
    font-weight: 500;
    color: var(--color);
  }

  button:before {
    content: "";
    position: absolute;
    z-index: -1;
    background: var(--color);
    height: 150px;
    width: 200px;
    border-radius: 50%;
  }

  button:hover {
    color: #fff;
  }

  button:before {
    top: 100%;
    left: 100%;
    transition: all 0.7s;
  }

  button:hover:before {
    top: -30px;
    left: -30px;
  }

  button:active:before {
    background: #f97316;
    transition: background 0s;
  }
`;

export default Button;
