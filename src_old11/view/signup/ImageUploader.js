import React, { useRef } from 'react';
import styled from 'styled-components';
import theme from '../../shared/theme';
const ImageUploader = () => {
  const inputRef = useRef("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      document.getElementById('pic').src = imageURL;
    }
  };

  return (
    <div>
      <Button> 측정하기
        <CameraInput
          type="file"
          id="camera"
          name="camera"
          capture="camera"
          accept="image/*"
          ref={inputRef}
          onChange={handleFileChange}
        />
      </Button>
      <br />
    </div>
  );
};

export default ImageUploader;
const Button = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.smallmedium};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
border: solid 1px;
width : 30vw;
height : 40px;
display:flex;
justify-content:center;
align-items:center;
border-radius: 10px;
background-color:white;
margin:auto;
`;
const CameraInput = styled.input`
position : absolute;
left:40vw;
border: solid 1px;
width : 20vw;
padding: 10px 0px;
z-index: 999;
      opacity: 0;
      `;

