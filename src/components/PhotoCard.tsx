import { FC } from "react";

const PhotoCard: FC = () => {
  return (
    <div className="photo-card">
      <div className="photo-card__image">
        <img src="./me.jpeg" alt="profile-image" />
      </div>
      <h2 className="photo-card__title">
        Nikita Isai
      </h2>
      <h3 className="photo-card__subtitle">
        Full Stack Engineer
      </h3>
    </div>
  );
};

export default PhotoCard;
