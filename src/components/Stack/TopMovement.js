import styled from "@emotion/styled"

const TopMovement = styled.div`
  animation: slide 35s linear infinite;
  animation-fill-mode: forwards;
  transform: translate3d(0, 0, 0);

  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-250px * 7));
    }
  }

  @media (max-width: 700px) {
    animation: slide 40s linear infinite;

    @keyframes slide {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(calc(-180px * 7));
      }
    }
  }
`

export default TopMovement
