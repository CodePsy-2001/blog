export interface ExperienceProps {
  date: string;
  title: string;
  skills: string[];
  description: string[];
}

export const Experience = ({
  date,
  title,
  skills,
  description,
}: ExperienceProps) => (
  <div className="grid grid-cols-[auto_1fr] gap-4">
    <p>{date}</p>
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
  </div>
);
