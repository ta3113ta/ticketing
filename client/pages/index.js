import axios from "axios";

const LandingPage = ({ currentUser }) => {
  return <h1>Landing Page</h1>;
};

LandingPage.getInitialProps = async () => {
  if (typeof window === "undefined") {
    // we are on the server!
  } else {
    // we are on the browser!
  }

  return {};
};

export default LandingPage;
