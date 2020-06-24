import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import useKeyPress from "../../hooks/useKeyPress";
import { setParagraph } from "../../actions/lazyActions";

const Paragraph = ({ paragraph, setParagraph } ) => {
  
  useEffect(() => {
    setParagraph();
    setCurrentChar(paragraph.charAt(0));
    setIncomingChars(paragraph.substr(1));
  }, []);
  
  const [leftPadding, setLeftPadding] = useState(
    new Array(20).fill(" ").join("")
  );
  const [outgoingChars, setOutgoingChars] = useState("");
  const [currentChar, setCurrentChar] = useState();
  const [incomingChars, setIncomingChars] = useState("");

  

  useKeyPress((key) => {
    //1
    let updatedOutgoingChars = outgoingChars;
    let updatedIncomingChars = incomingChars;

    //2
    if (key === currentChar) {
      //3
      if (leftPadding.length > 0) {
        setLeftPadding(leftPadding.substring(1));
      }
      //4
      updatedOutgoingChars += currentChar;
      setOutgoingChars(updatedOutgoingChars);

      //5
      setCurrentChar(incomingChars.charAt(0));

      //6
      updatedIncomingChars = incomingChars.substring(1);
      if (updatedIncomingChars.split(" ").length < 10) {
        setParagraph();
        updatedIncomingChars += " " + paragraph;
      }
      setIncomingChars(updatedIncomingChars);
    }
  });

  return (
    <div>
      <p className='Character'>
        <span className='Character-out'>
          {(leftPadding + outgoingChars).slice(-20)}
        </span>
        <span className='Character-current'>{currentChar}</span>
        <span>{incomingChars.substr(0, 20)}</span>
      </p>
    </div>
  );
};

const mapStateToProp = (state) => ({
  paragraph: state.paragraph,
});

export default connect(mapStateToProp, { setParagraph })(Paragraph);
