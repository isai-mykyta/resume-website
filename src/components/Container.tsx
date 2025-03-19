import { FC, PropsWithChildren } from "react";

const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="container open-sans">
      {children}
    </div>
  );
};

export default Container;
