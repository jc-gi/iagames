import styled from '@emotion/styled'

const BottomMovement = styled.div`
  animation: move 35s linear infinite;
  animation-fill-mode: forwards;
  transform: translate3d(0, 0, 0);

  @keyframes move {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(250px * 7));
    }
  }

  @media (max-width: 700px) {
    animation: move 40s linear infinite;

    @keyframes move {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(calc(180px * 7));
      }
    }
  }
`
export default BottomMovement