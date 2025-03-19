import { FC, PropsWithChildren } from "react";

type SectionProps = {
  title: string;
}

const Section: FC<PropsWithChildren<SectionProps>> = ({ children, title }) => {
  return (
    <section className="section">
      <h5 className="section__title">{title}</h5>
      <hr />
      {children}
    </section>
  );
};

export default Section;
