import { Github, Linkedin, FileText } from "lucide-react";
import { FC } from "react";

import useDownload from "../hooks/useDonwload";

const SocialList: FC = () => {
  const { downloadFile } = useDownload();

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
      <li className="social-list__link" onClick={() => downloadFile("/NikitaIsaiResume.pdf", "NikitaIsaiResume.pdf")}>
        <FileText/>
      </li>
    </ul>
  );
};

export default SocialList;
