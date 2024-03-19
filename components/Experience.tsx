export interface ExperienceProps {
  date: string;
  title: string;
  skills: string[];
  description: string[];
}

export const Career = ({
  company,
  href,
  position,
  period,
}: {
  company: string;
  href?: string;
  position: string;
  period: string;
}) => (
  <h3 className="flex w-full items-center">
    {href ? (
      <a className="font-bold underline" href={href}>
        {company}
      </a>
    ) : (
      <strong className="font-bold">{company}</strong>
    )}
    , {position}
    <small className="ml-auto text-gray-500">{period}</small>
  </h3>
);

export const Experience = ({ title, skills, description }: ExperienceProps) => (
  <ul>
    <li className="flex flex-col">
      <strong>{title}</strong>
      <small>{skills.join(", ")}</small>
    </li>
    <ul>
      {description.map((desc, idx) => (
        <li key={idx} className="my-0">
          {desc}
        </li>
      ))}
    </ul>
  </ul>
);
