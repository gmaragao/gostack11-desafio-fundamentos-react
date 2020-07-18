import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;
        }
      }

      ul {
        display: flex;
        li {
          font-family: Poppins;
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          list-style-type: none;
          transition: border 0.5s ease;

          & + li {
            margin-left: 10px;
          }

          &:after {
            content: '';
            display: block;
            margin: auto;
            height: 3px;
            width: 0px;
            background: transparent;
            transition: width 0.5s ease, background-color 0.5s ease;
          }

          &:hover:after {
            width: 100%;
            background: #ff872c;
          }
        }
      }
    }
  }
`;
