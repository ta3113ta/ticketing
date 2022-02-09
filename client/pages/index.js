import buildClient from "../api/build-client";

const LandingPage = ({ currentUser }) => {
  return currentUser ? (
    <h1>Your are signed in</h1>
  ) : (
    <h1>Your are not signin</h1>
  );
};

LandingPage.getInitialProps = async (context) => {
  try {
    const client = buildClient(context);
    const { data } = await client.get("/api/users/currentuser");

    return data;
  } catch (err) {
    return {};
  }
};

export default LandingPage;
