import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import theme from '../../shared/theme';
import { fetchNailMeasure } from '../../api/measure';
import Loading from '../components/element/Loading';

const ImageUploader1 = () => {
  const inputRef1 = useRef("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setLoading(true)
      const data = await fetchNailMeasure(file)
      const imageURL = URL.createObjectURL(data);
      document.getElementById('pic1').src = imageURL;
      setLoading(false)
    }
  };

  return (
    <div>
      <Button> 오른손 측정하기
        <CameraInput
          type="file"
          id="camera"
          name="camera"
          capture="camera"
          accept="image/*"
          ref={inputRef1}
          onChange={handleFileChange}
        />
      </Button>
      <br />
      {loading ? <Loading /> : null}
    </div>
  );
};

export default ImageUploader1;
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

