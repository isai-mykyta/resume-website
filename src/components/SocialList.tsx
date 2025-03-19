import { Github, Linkedin, FileText } from "lucide-react";
import { FC } from "react";

const SocialList: FC = () => {
  return (
    <ul className="social-list">
      <li className="social-list__link">
        <a href="https://github.com/isai-mykyta" target="_blank" rel="noreferrer">
          <Github />
        </a>
      </li>
      <li className="social-list__link">
        <a href="https://www.linkedin.com/in/mykyta-isai-20a2651b5/" target="_blank" rel="noreferrer">
          <Linkedin />
        </a>
      </li>
      <li className="social-list__link">
        <FileText/>
      </li>
    </ul>
  );
};

export default SocialList;
