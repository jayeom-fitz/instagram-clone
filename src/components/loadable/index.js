import { Suspense } from "react";
import { RotatingLines } from "react-loader-spinner";

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<RotatingLines width="100" />}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
