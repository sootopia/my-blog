import styled from 'styled-components';

const Footer = styled.footer`
  padding-top: 60px;
  padding-bottom: 60px;
  border-top: 1px solid #e2e8f0;
`;

const LinkGroup = styled.div`
  display: flex;
  gap: 16px;

  a {
    display: flex;
    width: 24px;
    height: 24px;
    color: #334155;
    align-items: center;
    justify-content: center;

    svg {
      width: 24px;
      height: 24px;
    }

    &:hover {
      opacity: 0.5;
    }
  }
`;

const PageFooter = () => {
  return (
    <Footer>
      <div className="container flex justify-between items-center">
        <p className="text-slate-700">&copy; 2024. Park Soohyun All rights reserved.</p>

        <LinkGroup>
          <a href="https://github.com/sootopia" target="_blank" rel="noopener noreferrer">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_13_130)">
                <path
                  d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2076 22.5814 20.278 21.0505 21.7446 19.008C23.2112 16.9656 24 14.5145 24 12C24 5.37 18.63 0 12 0Z"
                  fill="#334155"
                />
              </g>
              <defs>
                <clipPath id="clip0_13_130">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>

          <a href="mailto: shpark7502@gmail.com">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.075 5.3325C0.226227 4.66986 0.597983 4.07822 1.12938 3.65446C1.66078 3.23071 2.32033 2.99995 3 3H21C21.6797 2.99995 22.3392 3.23071 22.8706 3.65446C23.402 4.07822 23.7738 4.66986 23.925 5.3325L12 12.621L0.075 5.3325ZM0 7.0455V17.7015L8.7045 12.3645L0 7.0455ZM10.1415 13.245L0.2865 19.2855C0.52999 19.7989 0.91429 20.2326 1.39467 20.5362C1.87505 20.8397 2.43176 21.0005 3 21H21C21.5681 21.0001 22.1246 20.8389 22.6048 20.5351C23.0849 20.2313 23.4688 19.7975 23.712 19.284L13.857 13.2435L12 14.379L10.1415 13.245ZM15.2955 12.366L24 17.7015V7.0455L15.2955 12.366Z"
                fill="#475569"
              />
            </svg>
          </a>
        </LinkGroup>
      </div>
    </Footer>
  );
};

export default PageFooter;
