import { FC } from "react";

import Contacts from "./Contacts";
import PhotoCard from "./PhotoCard";
import SocialList from "./SocialList";

const ProfileCard: FC = () => {
  return (
    <div className="profile-card">
      <PhotoCard />
      <hr />
      <Contacts />
      <hr />
      <SocialList />
    </div>
  );
};

export default ProfileCard;
