import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    console.log(err)
  return (
    <>
      <h2>Oops!! something went wrong...</h2>
      <h2>{err.status}</h2>
      <h2>{err.statusText}</h2>
    </>
  );
};
export default Error;
