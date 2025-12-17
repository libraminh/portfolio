import { personalInfo, professionalSummary, workExperience, projects, education, certifications } from "@/lib/data";

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    address: {
      "@type": "PostalAddress",
      addressLocality: personalInfo.location,
    },
    email: personalInfo.email,
    telephone: personalInfo.phone,
    url: personalInfo.portfolio,
    sameAs: [
      personalInfo.github,
      personalInfo.portfolio,
    ].filter(Boolean),
    description: professionalSummary,
    alumniOf: {
      "@type": "EducationalOrganization",
      name: education.institution,
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Frontend Development",
      "Web Development",
    ],
    hasCredential: certifications.map((cert) => ({
      "@type": "EducationalOccupationalCredential",
      name: cert.name,
      credentialCategory: cert.name,
    })),
    worksFor: workExperience.map((exp) => ({
      "@type": "Organization",
      name: exp.company,
      jobTitle: exp.role,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

