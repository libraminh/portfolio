import ExperiencePost from './ExperiencePost';
import { Heading3 } from './Heading3';

const Experience = ({ experiences }) => {
  return (
    <section className="mb-16">
      <Heading3>Experience</Heading3>

      <div className="grid gap-10 md:gap-16">
        {experiences?.map((exp) => (
          <ExperiencePost
            position={exp.position}
            company={exp.company_name}
            content={exp.experience_content}
            date={exp.working_date}
            key={exp._id}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
