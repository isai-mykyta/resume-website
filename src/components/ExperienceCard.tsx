import { FC } from "react";

import { formatTimestamp } from "../utils";

type ExperienceCardProps = {
  position: string;
  companyName: string;
  location: string;
  url: string;
  period: {
    from: number;
    to?: number;
  };
  summary: string;
  insights: string[];
}

const ExperienceCard: FC<ExperienceCardProps> = ({ position, period, companyName, summary, insights, location, url }) => {
  const periodFrom = formatTimestamp(period.from);
  const periodTo = period.to ? formatTimestamp(period.to) : "Present";

  return (
    <div className="experience-card">
      <p className="experience-card__title"><strong>{position}</strong>, <a href={url} target="_blank" rel="noreferrer">{companyName}</a> ({location})</p>
      <p className="experience-card__period">{periodFrom} - {periodTo}</p>
      <p className="experience-card__summary">{summary}</p>
      <ul className="experience-card__insights">
        {insights.map((insight) => <li className="experience-card__insight" key={insight}><p>{insight}</p></li>)}
      </ul>
    </div>
  );
};

export default ExperienceCard;
