import styled from "@emotion/styled"

const CardContent = styled.div`
  background-color:#fff;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 0.75rem;
  padding: 1.5rem;
  border-top: 6px solid #039BE5;
  box-shadow: 0px 4px 8px rgba(60, 45, 111, 0.1),
    0px 1px 3px rgba(60, 45, 111, 0.15);
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  -webkit-transition: all linear 0.1s;
  transition: all linear 0.1s;
  &:hover {
    -webkit-transform: translateY(-1px);
    -ms-transform: translateY(-1px);
    transform: translateY(-1px);
    box-shadow: 0px 4px 16px rgba(60, 45, 111, 0.1),
      0px 1px 3px rgba(60, 45, 111, 0.15);
  }
`
export default CardContent
