import ExperiencePost from './ExperiencePost';

const Experience = ({ experiences }) => {
  console.log('experiences', experiences);

  return (
    <section className="mb-16">
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-12 text-black dark:text-white underline underline-offset-4 decoration-dashed">
        Experience
      </h3>

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
