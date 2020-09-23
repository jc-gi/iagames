import styled from "@emotion/styled"

const StackBrandsContent = styled.div`
  @mixin white-gradient {
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  width: 100%;
  height: 800px;
  position: relative;
  left: 50px;
  display: block;
  overflow: hidden;
  &::before,
  &::after {
    @include white-gradient;
    content: "";
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 2;
  }

  &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  &::before {
    left: 0;
    top: 0;
  }

  @media (max-width: 700px) {
    height: 650px;

  }
`

export default StackBrandsContent
