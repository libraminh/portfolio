import Image from "next/image";

import Container from "components/Container";
import SocialContact from "components/SocialContact";
import avatarBW from "public/avatar-bw.jpg";
import avatar from "public/avatar.jpg";
import ReactCertImage from "public/react-cert.png";
import CssCertImage from "public/css-cert.png";
import { avatarUrl } from "helpers/constants";

export default function About() {
  return (
    <Container title="About – Minh Le">
      <div className="flex flex-col justify-center items-start max-2-xl md:max-w-5xl  mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-16 text-black dark:text-white">
          About Me
        </h1>

        <div className="grid md:grid-cols-3 gap-10">
          <figure className="col-span-1">
            <Image
              alt="Minh Le headshot"
              width={400}
              src={avatarUrl}
              className="rounded-2xl aspect-square mb-10 md:mb-16"
            />
            <SocialContact />
          </figure>

          <div className="col-span-2 mb-8 prose prose-a:m-0 dark:prose-dark leading-6">
            <h3>Job Title</h3>
            <p>Minh Le, Website developer at Construct Digital.</p>

            <h3>Some details</h3>
            <p>
              Hey, I'm Minh. I'm the Website developer at{" "}
              <a href="https://www.constructdigital.com/">Construct Digital</a>,
              the company includes creatives, tinkerers, scientists, engineers
              and inventors, all in the pursuit of what’s next in marketing.
            </p>

            <div className="mb-5">
              <h3 className="mb-1">License & Certification</h3>

              <p className="text-sm italic">
                Just for reference, it means that my experiences DO NOT belong
                to these Certification dates.
              </p>
            </div>

            <div className="flex items-center space-x-5">
              <a href="/react-cert.png">
                <Image
                  src={ReactCertImage}
                  width={200}
                  quality={100}
                  alt="cert-image"
                  className="rounded-lg m-0"
                />
              </a>

              <a href="/css-cert.png">
                <Image
                  src={CssCertImage}
                  width={200}
                  quality={100}
                  alt="cert-image"
                  className="rounded-lg m-0"
                />
              </a>
            </div>

            <h3>Education</h3>
            <p>
              Minh Le graduated from Thu Duc college of Technology with a B.S.
              in Computer Engineering.
            </p>

            {/* <h2>Headshots</h2>
            <div className="flex space-x-8">
              <a href="/avatar.jpg">
                <Image
                  alt="Minh Le headshot"
                  width={400}
                  quality={100}
                  src={avatar}
                  className="rounded-md"
                />
              </a>
              <a href="/avatar-bw.jpg">
                <Image
                  alt="Minh Le headshot"
                  width={400}
                  quality={100}
                  src={avatarBW}
                  className="rounded-md"
                />
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </Container>
  );
}
