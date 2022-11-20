import Image from "next/image";

import Container from "components/Container";
import SocialContact from "components/SocialContact";
import avatar from "public/avatar.jpg";
import ReactCertImage from "public/react-cert.png";
import CssCertImage from "public/css-cert.png";
import { getClient } from "lib/sanity-server";
import { bioQuery } from "lib/queries";
import { PortableText } from "@portabletext/react";
import { avatarUrl } from "helpers/constants";

export default function About({ aboutBio }) {
  console.log("aboutBio", aboutBio);

  return (
    <Container title="About – Minh Le">
      <div className="flex flex-col justify-center items-start max-2-xl md:max-w-5xl  mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-16 text-black dark:text-white">
          About Me
        </h1>

        <div className="grid md:grid-cols-3 gap-10">
          <figure className="col-span-1">
            <Image
              alt="avatar"
              width={400}
              height={400}
              src={avatarUrl}
              className="rounded-2xl aspect-square mb-10 md:mb-16"
            />

            <SocialContact />
          </figure>

          <div className="col-span-2 mb-8 prose prose-a:m-0 dark:prose-dark leading-6">
            <PortableText value={aboutBio.bio} />

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
                  src={`https://res.cloudinary.com/dlfxcpjvo/image/upload/v1668925514/portfolio/react-cert_s9c6mx.png`}
                  width={200}
                  quality={100}
                  alt="cert-image"
                  className="rounded-lg m-0"
                />
              </a>

              <a href="/css-cert.png">
                <Image
                  src={`https://res.cloudinary.com/dlfxcpjvo/image/upload/v1668925508/portfolio/css-cert_jnvdqo.png`}
                  width={200}
                  quality={100}
                  alt="cert-image"
                  className="rounded-lg m-0"
                />
              </a>
            </div>

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

export async function getStaticProps({ preview = false }) {
  const aboutBio = await getClient(preview).fetch(bioQuery);

  return { props: { aboutBio: aboutBio[0] } };
}
