import styled from "styled-components";
import theme from "../../shared/theme";
import Postcode from "../product/Postcode";
export default function ProdBuyAddress({
  name, setName,
  num, setNum,
  address, setAddress,
  detailAddress, setDetailAddress,
  deliveryMessage, setDeliveryMessage,
  code, setCode
}) {

  // 입력 필드 내용이 변경될 때 호출되는 핸들러
  const handleNameChange = (e) => {
    const text = e.target.value;
    setName(text);
  };
  const handleNumChange = (e) => {
    const text = e.target.value;
    setNum(text);
  };
  const handleCodeChange = (e) => {
    const text = e.target.value;
    setCode(text);
  };
  const handleAddressChange = (e) => {
    const text = e.target.value;
    setAddress(text);
  };
  const handleDetailAddressChange = (e) => {
    const text = e.target.value;
    setDetailAddress(text);
  };
  const handleMessageChange = (e) => {
    const text = e.target.value;
    setDeliveryMessage(text);
  };
  return (
    <ContWrap>
      <Hang>
        <Tag>이름</Tag>
        <Input
          value={name} // 입력 필드의 값은 상태 변수와 바인딩됩니다.
          onChange={handleNameChange} // 입력 필드 값이 변경될 때 핸들러 호출
        />
      </Hang>
      <Hang1>
        <Tag>주소</Tag>
        <CodeButton>
          <Input1 value={code} // 입력 필드의 값은 상태 변수와 바인딩됩니다.
            onChange={handleCodeChange} // 입력 필드 값이 변경될 때 핸들러 호출           
            disabled
          />
          <Postcode setAddress={setAddress} setCode={setCode} />
        </CodeButton>
      </Hang1>
      <Hang>
        <Tag></Tag>
        <Input value={address} // 입력 필드의 값은 상태 변수와 바인딩됩니다.
          onChange={handleAddressChange} // 입력 필드 값이 변경될 때 핸들러 호출           
          disabled
        />
      </Hang>
      <Hang>
        <Tag></Tag>
        <Input value={detailAddress}
          placeholder="상세주소를 입력하세요."
          onChange={handleDetailAddressChange}
        />
      </Hang>
      <Hang>
        <Tag>휴대폰 번호</Tag>
        <Input
          value={num} // 입력 필드의 값은 상태 변수와 바인딩됩니다.
          onChange={handleNumChange} // 입력 필드 값이 변경될 때 핸들러 호출
        />
      </Hang>
      <Hang>
        <Tag>배송메시지</Tag>
        <Input value={deliveryMessage} // 입력 필드의 값은 상태 변수와 바인딩됩니다.
          onChange={handleMessageChange} // 입력 필드 값이 변경될 때 핸들러 호출           
        />
      </Hang>
    </ContWrap>
  )
}
const ContWrap = styled.div`
margin : 20px 0px;
padding: 10px 20px;
`;
const Hang = styled.div`
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.smallmedium};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
display: grid;
grid-template-columns: 1fr 2fr;
padding: 5px 0px;
align-items: center;
`;
const Hang1 = styled.div`
display: grid;
grid-template-columns: 1fr 2fr;
font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.smallmedium};
font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
padding: 5px 0px;
align-items: center;
`;

const Tag = styled.div`
text-align: left;
font-weight:700;
width: 50px;
`;

const Input = styled.input`
padding-left: 12px;
height: 43px;
width: 69vw;
border: solid 1px rgb(218,218,218);
`;
const Input1 = styled.input`
padding-left: 12px;
height: 43px;
width: 44vw;
border: solid 1px rgb(218,218,218);
`;
const CodeButton = styled.div`
display: flex;
padding-right:20px;
`;