import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import manokPika from "/public/image/manokpika.jpg";
import { CardBody, CardContainer, CardItem } from "./ui/3d-cards";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Link } from "lucide-react";

export function ThirdPart() {
  const cardProfile = (
    <CardContainer className="inter-var w-3/4">
      <CardBody className="bg-slate-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Hi, I am manok, with a pikachu
        </CardItem>

        <CardItem translateZ="100" className=" mt-4">
          <Image
            src={manokPika}
            width={300}
            height={300}
            alt="Picture of the author"
          />
        </CardItem>

        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Curious about me?
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            translateX={-20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Reach me on linkedIn →
          </CardItem>

          <CardItem
            translateZ={20}
            translateX={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-blue-600 dark:bg-white dark:text-black text-white text-xs font-bold"
          >
          
              <a className="block w-full h-full" href="https://www.linkedin.com/in/mahranradifanz/" target="_blank">LinkedIn</a>
            
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );

  const wordToGenerate =
    `Come build some cool apps with me!,  I am a software engineer with a passion for building scalable and maintainable software systems.
    I am passionate about front-end development and committed to delivering exceptional user experiences.
    `;

  const TextGenerator = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.disconnect();
            }
          });
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);

    return (
      <div ref={ref} className="flex flex-col items-center text-white">
        {isVisible ? (
          <TextGenerateEffect
            duration={2}
            filter={false}
            words={wordToGenerate}
            className="text-white justify-end items-center"
          />
        ) : (
          <div className=" w-full text-white justify-end">Loading...</div>
        )}
      </div>
    );
  };

  const textGenerator = <TextGenerator />;

  return (
    <div className=" mx-3">
      <div className="flex lg:flex-row md:flex-row flex-col">
        <div className="flex flex-col items-center justify-center w-full md:w-1/3">
          {cardProfile}
        </div>
        <div className="flex lg:w-full md:w-2/3 md:m-3 mx-10 justify-end text-white items-center my-auto text-justify">
          {textGenerator}
        </div>
      </div>
    </div>
  );
}
