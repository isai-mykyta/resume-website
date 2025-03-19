import { FC, PropsWithChildren } from "react";

const Aside: FC<PropsWithChildren> = ({ children }) => {
  return (
    <aside className="aside">
      {children}
    </aside>
  );
};

export default Aside;
