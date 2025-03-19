import { MapPin, Mail } from "lucide-react";
import { FC } from "react";

const Contacts: FC = () => {
  return (
    <ul className="contacts">
      <li className="contacts__contact">
        <MapPin />
        <p>Kremenchuck, UA</p>
      </li>
      <li className="contacts__contact">
        <a href="mailto:example@email.com">
          <Mail />
          <p>nktisai@gmail.com</p>
        </a>
      </li>
    </ul>
  );
};

export default Contacts;
