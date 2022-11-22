import Image from "next/image";

import { PortableText } from "@portabletext/react";
import Container from "components/Container";
import SocialContact from "components/SocialContact";
import { avatarUrl } from "helpers/constants";
import { bioQuery } from "lib/queries";
import { getClient } from "lib/sanity-server";
import ReactCertImage from "/public/react-cert.png";

export default function About({ aboutBio }) {
  return (
    <Container title="About – Minh Le">
      <div className="flex flex-col justify-center items-start max-2-xl md:max-w-5xl  mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-10 md:mb-16 text-black dark:text-white">
          About Me
        </h1>

        <div className="grid md:grid-cols-3 gap-10">
          <figure className="col-span-1">
            <Image
              alt="avatar"
              width={400}
              height={400}
              src={"/avatar.jpg"}
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

            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-5 space-y-5 sm:space-y-0">
              <a href="/react-cert.png" target={"_blank"}>
                <Image
                  src={ReactCertImage}
                  width={250}
                  height={150}
                  quality={100}
                  alt="cert-image"
                  className="rounded-lg m-0 w-full sm:w-auto"
                />
              </a>

              <a href="/css-cert.png" target={"_blank"}>
                <Image
                  src={`/css-cert.png`}
                  width={250}
                  height={150}
                  quality={100}
                  alt="cert-image"
                  className="rounded-lg m-0 w-full sm:w-auto"
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
