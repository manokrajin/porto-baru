import React from "react";
import Image from 'next/image'
import manokPika from '/public/image/manokpika.jpg'
import { CardBody, CardContainer, CardItem } from "./ui/3d-cards";



export function ThirdPart() {

    const cardProfile = (
        <CardContainer className="inter-var">
            <CardBody className="bg-slate-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                    Make things float in air
                </CardItem>
            
                <CardItem
                    translateZ="100"

                    className="w-full mt-4"
                >
                    <Image
                        src={manokPika}
                        width={300}
                        height={300}
                        alt="Picture of the author"
                    />

                </CardItem>
                <div className="flex justify-between items-center mt-20">
                    <CardItem
                        translateZ={20}
                        translateX={-40}
                        as="button"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                        Try now →
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        translateX={40}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                        Sign up
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    )


    return (
        <div className="bg-slate-950 h-screen w-full">
            <div className="flex flex-row">
                <span className="text-white w-1/2 text-center">Third Part</span>
                <div className="flex flex-col items-center justify-center w-1/2">
                    {cardProfile}
                </div>
              
            </div>

        </div>
    );
}