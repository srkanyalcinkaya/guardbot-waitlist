import React, { forwardRef, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { FadeText } from "@/components/magicui/fade-text";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import confetti from "canvas-confetti"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { BorderBeam } from "@/components/magicui/border-beam";
import OrbitingCircles from "@/components/magicui/orbiting-circles";
import { MagicCard } from "@/components/magicui/magic-card";
import { icon1, icon2, icon3, icon4, icon5 } from "@/assets/images";
import BlurFade from "@/components/magicui/blur-fade";
import axios from "axios";


const Circle = forwardRef(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
                className
            )}
        >
            {children}
        </div>
    )
})

const services = [
    {
        id: 1,
        icon: icon1,
        title: "AML/KYT screening",
        caption: "API solutions that empower AML compliance tools within your current system. All transactions are automatically verified to comply with AML and FATF requirements and reduce your business risk exposure."
    },
    {
        id: 2,
        icon: icon2,
        title: "KYC for business",
        caption: "The streamlined and automated verification process empowers your business to swiftly onboard customers, reducing manual effort and mitigating identity fraud and illicit activity risks."
    },
    {
        id: 3,
        icon: icon3,
        title: "AML/KYC procedures",
        caption: "Launch your crypto venture with ease, simplicity, and confidence through our streamlined AML and KYC consulting, ensuring smooth compliance and effective risk management right from the beginning."
    },
    {
        id: 4,
        icon: icon4,
        title: "Corporate accounts at CEX/EMI",
        caption: "Streamline corporate account opening on CEX EMI with our expert assistance, ensuring your focus remains on business growth in the crypto industry."
    },
    {
        id: 5,
        icon: icon5,
        title: "Blockchain investigations",
        caption: "Recover stolen cryptocurrencies with AMLBot's expert blockchain investigations, swiftly identifying culprits and tracing funds for effective recovery."
    },
]


export default function Home() {
    const containerRef = useRef(null)
    const div1Ref = useRef(null)
    const div2Ref = useRef(null)
    const div3Ref = useRef(null)
    const div4Ref = useRef(null)
    const div5Ref = useRef(null)
    const div6Ref = useRef(null)
    const div7Ref = useRef(null)
    const [email, setEmail] = useState("")



    const handleClick = async () => {
        if (email != "") {
            await axios.post(`https://script.google.com/macros/s/${import.meta.env.VITE_SCRIPT_KEY}`, email)
                .then(res => {
                    console.log("You sent to us email. Thank you :)")
                    const duration = 5 * 1000
                    const animationEnd = Date.now() + duration
                    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

                    const randomInRange = (min, max) => Math.random() * (max - min) + min

                    const interval = window.setInterval(() => {
                        const timeLeft = animationEnd - Date.now()

                        if (timeLeft <= 0) {
                            return clearInterval(interval)
                        }

                        const particleCount = 50 * (timeLeft / duration)
                        confetti({
                            ...defaults,
                            particleCount,
                            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
                        })
                        confetti({
                            ...defaults,
                            particleCount,
                            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
                        })
                    }, 250)
                })
                .catch(err => console.log(err))
        }

    }


    return (

        <>
            <DotPattern
                className={cn(
                    "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
                )}
            />
            <main className="mx-auto flex-1 px-6 overflow-hidden relative  md:px-8 mt-20 max-w-[90rem] space-y-20 md:space-y-0  ">
                <section className=" text-center min-h-screen">

                    <div className="z-10 relative flex min-h-[4rem] items-center justify-center mb-10">
                        <a href="#faq"
                            className={cn(
                                "group rounded-full border border-black/5 bg-neutral-100 text-xs text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                            )}
                        >
                            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                                <span>✨ Introducing GuardAMLBot</span>
                                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                            </AnimatedShinyText>
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 mb-20 h-auto">
                        <div className="text-start">
                            <FadeText
                                className="z-10 relative py-6  text-5xl md:text-6xl  lg:text-7xl font-bold   items-center flex bg-gradient-to-br dark:from-white   from-30% dark:to-white/40  "
                                direction="down"
                                framerProps={{
                                    show: { transition: { delay: 0.8 } },
                                }}
                                text="Kripto işlemleriniz için tek noktadan çözüm."
                            />
                            <FadeText
                                className="z-10 relative text-base  md:text-xl text-balance text-gray-400"
                                direction="down"
                                framerProps={{
                                    show: { transition: { delay: 1 } },
                                }}
                                text="GuardAMLBot ile AML/KYC süreclerinizi hızlı ve otomatik hale getirin, uyum maliyetlerinizi azaltın. Güvenli, hızlı ve kolayca yöntilebilir işlemlerle hem işinizi koruyun."
                            />
                            <div className="z-10 relative  w-full md:max-w-sm  items-center space-x-2 flex mt-10 ">
                                <Input type="email" name="email" onChange={e => setEmail(e.target.value)} value={email} placeholder="Email adress" className="h-14" />
                                <Button type="submit" className="h-14" onClick={handleClick}>Join waitlist</Button>
                            </div>
                        </div>

                        <div>
                            <div
                                className="z-20 relative flex md:h-[500px] h-[360px] w-full items-center justify-center overflow-hidden rounded-lg  bg-white/60  p-4 md:shadow-xl "
                                ref={containerRef}
                            >
                                <BorderBeam size={250} duration={12} delay={9} />
                                <div className="flex  size-full flex-col max-w-lg max-h-[200px] items-stretch justify-between gap-10">
                                    <div className="flex flex-row items-center justify-between">
                                        <Circle ref={div1Ref}>
                                            <Icons.googleDrive />
                                        </Circle>
                                        <Circle ref={div5Ref}>
                                            <Icons.googleDocs />
                                        </Circle>
                                    </div>
                                    <div className="flex flex-row items-center justify-between">
                                        <Circle ref={div2Ref}>
                                            <Icons.notion />
                                        </Circle>
                                        <Circle ref={div4Ref} className="size-16">
                                            <Icons.openai />
                                        </Circle>
                                        <Circle ref={div6Ref}>
                                            <Icons.zapier />
                                        </Circle>
                                    </div>
                                    <div className="flex flex-row items-center justify-between">
                                        <Circle ref={div3Ref}>
                                            <Icons.whatsapp />
                                        </Circle>
                                        <Circle ref={div7Ref}>
                                            <Icons.messenger />
                                        </Circle>
                                    </div>
                                </div>

                                <AnimatedBeam
                                    containerRef={containerRef}
                                    fromRef={div1Ref}
                                    toRef={div4Ref}
                                    curvature={-75}
                                    endYOffset={-10}
                                />
                                <AnimatedBeam
                                    containerRef={containerRef}
                                    fromRef={div2Ref}
                                    toRef={div4Ref}
                                />
                                <AnimatedBeam
                                    containerRef={containerRef}
                                    fromRef={div3Ref}
                                    toRef={div4Ref}
                                    curvature={75}
                                    endYOffset={10}
                                />
                                <AnimatedBeam
                                    containerRef={containerRef}
                                    fromRef={div5Ref}
                                    toRef={div4Ref}
                                    curvature={-75}
                                    endYOffset={-10}
                                    reverse
                                />
                                <AnimatedBeam
                                    containerRef={containerRef}
                                    fromRef={div6Ref}
                                    toRef={div4Ref}
                                    reverse
                                />
                                <AnimatedBeam
                                    containerRef={containerRef}
                                    fromRef={div7Ref}
                                    toRef={div4Ref}
                                    curvature={75}
                                    endYOffset={10}
                                    reverse
                                />
                            </div>
                        </div>

                    </div>



                </section>
                <section className=" min-h-screen flex flex-col text-center items-center gap-10 ">
                    <FadeText
                        className="text-3xl md:text-5xl  font-bold text-black text-center dark:text-white "
                        direction="down"
                        framerProps={{
                            show: { transition: { delay: 0.6 } },
                        }}
                        text="AMLBot’s services"
                    />
                    <FadeText
                        className="text-xl font-medium text-center text-gray-4  00 dark:text-white "
                        direction="down"
                        framerProps={{
                            show: { transition: { delay: 0.6 } },
                        }}
                        text="We provide full pack of options for safe work with crypto"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 h-full w-full ">
                        {
                            services.map(item => (
                                <BlurFade delay={0.25 + item.id / 30} inView className={"w-full max-h-[420px] h-auto "}>
                                    <MagicCard
                                        className="cursor-pointer flex flex-1 text-start rounded-2xl  flex-col items-start  shadow-2xl p-9  "
                                        gradientColor={"#D9D9D955"}
                                        key={item.id}
                                    >
                                        <div className="w-full h-full flex flex-col items-start justify-start ">
                                            <div className="max-w-16 mb-8">
                                                <img src={item.icon} alt="" className="w-full" loading="lazy" width={"144"} height={"139"} />
                                            </div>
                                            <h3 className="text-2xl font-semibold  mb-5">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm">{item.caption}</p>
                                        </div>
                                    </MagicCard>
                                </BlurFade>
                            ))
                        }

                    </div>
                </section>
                <section className="mx-auto container  min-h-screen flex items-center justify-center" id="faq">
                    <div className="w-full h-full">
                        <FadeText
                            className="text-4xl font-bold text-black dark:text-white "
                            direction="down"
                            framerProps={{
                                show: { transition: { delay: 0.6 } },
                            }}
                            text="FAQs"
                        />
                        <BlurFade delay={0.25} inView>
                            <div className="flex flex-col md:flex-row items-center gap-12">

                                <Accordion type="single" collapsible className="w-full mt-10">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                        <AccordionContent>
                                            Yes. It adheres to the WAI-ARIA design pattern.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>Is it styled?</AccordionTrigger>
                                        <AccordionContent>
                                            Yes. It comes with default styles that matches the other
                                            components&apos; aesthetic.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>Is it animated?</AccordionTrigger>
                                        <AccordionContent>
                                            Yes. It&apos;s animated by default, but you can disable it if you
                                            prefer.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                                <div className="relative md:flex hidden h-[500px] w-full flex-col items-center justify-center overflow-hidden   ">

                                    {/* Inner Circles */}
                                    <OrbitingCircles
                                        className="size-[30px] border-none bg-transparent"
                                        duration={20}
                                        delay={20}
                                        radius={80}
                                    >
                                        <Icons.whatsapp />
                                    </OrbitingCircles>
                                    <OrbitingCircles
                                        className="size-[30px] border-none bg-transparent"
                                        duration={20}
                                        delay={10}
                                        radius={80}
                                    >
                                        <Icons.notion />
                                    </OrbitingCircles>

                                    {/* Outer Circles (reverse) */}
                                    <OrbitingCircles
                                        className="size-[50px] border-none bg-transparent"
                                        radius={190}
                                        duration={20}
                                        reverse
                                    >
                                        <Icons.googleDrive />
                                    </OrbitingCircles>
                                    <OrbitingCircles
                                        className="size-[50px] border-none bg-transparent"
                                        radius={190}
                                        duration={20}
                                        delay={20}
                                        reverse
                                    >
                                        <Icons.googleDocs />
                                    </OrbitingCircles>
                                </div>
                            </div>
                        </BlurFade>
                    </div>
                </section>
            </main >
        </>
    )
}


const Icons = {
    notion: () => (
        <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z"
                fill="#ffffff"
            />
            <path
                d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zm59.6 -54.827c0.387 1.75 0 3.5 -1.75 3.7l-2.91 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.02 1.363s0 3.5 -4.857 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.4 -0.78z"
                fill="#000000"
                fillRule="evenodd"
                clipRule="evenodd"
            />
        </svg>
    ),
    openai: () => (
        <svg width={180} height={180} viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M101.821 26.3584L25.4538 102.726C21.9391 106.241 21.9391 111.939 25.4538 115.454C28.9685 118.969 34.667 118.969 38.1817 115.454L114.549 39.0863C118.064 35.5716 118.064 29.8731 114.549 26.3583C111.035 22.8436 105.336 22.8436 101.821 26.3584Z" fill="#3A57E8" />
            <path d="M140.001 64.538L63.6336 140.906C60.1189 144.42 60.1189 150.119 63.6336 153.633C67.1483 157.148 72.8468 157.148 76.3615 153.633L152.729 77.2659C156.244 73.7512 156.244 68.0527 152.729 64.538C149.214 61.0233 143.516 61.0233 140.001 64.538Z" fill="#3A57E8" />
            <path d="M114.456 140.823L76.2723 102.639C72.7576 99.1246 67.0591 99.1246 63.5444 102.639C60.0296 106.154 60.0296 111.853 63.5444 115.367L101.728 153.551C105.243 157.066 110.941 157.066 114.456 153.551C117.971 150.036 117.971 144.338 114.456 140.823Z" fill="#3A57E8" />
            <path d="M152.736 102.735L76.3687 26.3679C72.854 22.8532 67.1555 22.8531 63.6408 26.3679C60.1261 29.8826 60.1261 35.5811 63.6408 39.0958L140.008 115.463C143.523 118.978 149.222 118.978 152.736 115.463C156.251 111.949 156.251 106.25 152.736 102.735Z" fill="#3A57E8" />
        </svg>


    ),
    googleDrive: () => (
        <svg
            width="100"
            height="100"
            viewBox="0 0 87.3 78"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"
                fill="#0066da"
            />
            <path
                d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z"
                fill="#00ac47"
            />
            <path
                d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"
                fill="#ea4335"
            />
            <path
                d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z"
                fill="#00832d"
            />
            <path
                d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"
                fill="#2684fc"
            />
            <path
                d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z"
                fill="#ffba00"
            />
        </svg>
    ),
    whatsapp: () => (
        <svg
            width="100"
            height="100"
            viewBox="0 0 175.216 175.552"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient
                    id="b"
                    x1="85.915"
                    x2="86.535"
                    y1="32.567"
                    y2="137.092"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#57d163" />
                    <stop offset="1" stopColor="#23b33a" />
                </linearGradient>
                <filter
                    id="a"
                    width="1.115"
                    height="1.114"
                    x="-.057"
                    y="-.057"
                    colorInterpolationFilters="sRGB"
                >
                    <feGaussianBlur stdDeviation="3.531" />
                </filter>
            </defs>
            <path
                d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0"
                fill="#b3b3b3"
                filter="url(#a)"
            />
            <path
                d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
                fill="#ffffff"
            />
            <path
                d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"
                fill="url(#linearGradient1780)"
            />
            <path
                d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
                fill="url(#b)"
            />
            <path
                d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
                fill="#ffffff"
                fillRule="evenodd"
            />
        </svg>
    ),
    googleDocs: () => (
        <svg
            width="47px"
            height="65px"
            viewBox="0 0 47 65"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <path
                    d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
                    id="path-1"
                />
                <path
                    d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
                    id="path-3"
                />
                <linearGradient
                    x1="50.0053945%"
                    y1="8.58610612%"
                    x2="50.0053945%"
                    y2="100.013939%"
                    id="linearGradient-5"
                >
                    <stop stopColor="#1A237E" stopOpacity="0.2" offset="0%" />
                    <stop stopColor="#1A237E" stopOpacity="0.02" offset="100%" />
                </linearGradient>
                <path
                    d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
                    id="path-6"
                />
                <path
                    d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
                    id="path-8"
                />
                <path
                    d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
                    id="path-10"
                />
                <path
                    d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
                    id="path-12"
                />
                <path
                    d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
                    id="path-14"
                />
                <radialGradient
                    cx="3.16804688%"
                    cy="2.71744318%"
                    fx="3.16804688%"
                    fy="2.71744318%"
                    r="161.248516%"
                    gradientTransform="translate(0.031680,0.027174),scale(1.000000,0.723077),translate(-0.031680,-0.027174)"
                    id="radialGradient-16"
                >
                    <stop stopColor="#FFFFFF" stopOpacity="0.1" offset="0%" />
                    <stop stopColor="#FFFFFF" stopOpacity="0" offset="100%" />
                </radialGradient>
            </defs>
            <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
            >
                <g transform="translate(-451.000000, -463.000000)">
                    <g id="Hero" transform="translate(0.000000, 63.000000)">
                        <g id="Personal" transform="translate(277.000000, 309.000000)">
                            <g id="Docs-icon" transform="translate(174.000000, 91.000000)">
                                <g id="Group">
                                    <g id="Clipped">
                                        <mask id="mask-2" fill="white">
                                            <use xlinkHref="#path-1" />
                                        </mask>
                                        <g id="SVGID_1_" />
                                        <path
                                            d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L36.71875,10.3409091 L29.375,0 Z"
                                            id="Path"
                                            fill="#4285F4"
                                            fillRule="nonzero"
                                            mask="url(#mask-2)"
                                        />
                                    </g>
                                    <g id="Clipped">
                                        <mask id="mask-4" fill="white">
                                            <use xlinkHref="#path-3" />
                                        </mask>
                                        <g id="SVGID_1_" />
                                        <polygon
                                            id="Path"
                                            fill="url(#linearGradient-5)"
                                            fillRule="nonzero"
                                            mask="url(#mask-4)"
                                            points="30.6638281 16.4309659 47 32.8582386 47 17.7272727"
                                        ></polygon>
                                    </g>
                                    <g id="Clipped">
                                        <mask id="mask-7" fill="white">
                                            <use xlinkHref="#path-6" />
                                        </mask>
                                        <g id="SVGID_1_" />
                                        <path
                                            d="M11.75,47.2727273 L35.25,47.2727273 L35.25,44.3181818 L11.75,44.3181818 L11.75,47.2727273 Z M11.75,53.1818182 L29.375,53.1818182 L29.375,50.2272727 L11.75,50.2272727 L11.75,53.1818182 Z M11.75,32.5 L11.75,35.4545455 L35.25,35.4545455 L35.25,32.5 L11.75,32.5 Z M11.75,41.3636364 L35.25,41.3636364 L35.25,38.4090909 L11.75,38.4090909 L11.75,41.3636364 Z"
                                            id="Shape"
                                            fill="#F1F1F1"
                                            fillRule="nonzero"
                                            mask="url(#mask-7)"
                                        />
                                    </g>
                                    <g id="Clipped">
                                        <mask id="mask-9" fill="white">
                                            <use xlinkHref="#path-8" />
                                        </mask>
                                        <g id="SVGID_1_" />
                                        <g id="Group" mask="url(#mask-9)">
                                            <g transform="translate(26.437500, -2.954545)">
                                                <path
                                                    d="M2.9375,2.95454545 L2.9375,16.25 C2.9375,18.6985795 4.90929688,20.6818182 7.34375,20.6818182 L20.5625,20.6818182 L2.9375,2.95454545 Z"
                                                    id="Path"
                                                    fill="#A1C2FA"
                                                    fillRule="nonzero"
                                                />
                                            </g>
                                        </g>
                                    </g>
                                    <g id="Clipped">
                                        <mask id="mask-11" fill="white">
                                            <use xlinkHref="#path-10" />
                                        </mask>
                                        <g id="SVGID_1_" />
                                        <path
                                            d="M4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,4.80113636 C0,2.36363636 1.9828125,0.369318182 4.40625,0.369318182 L29.375,0.369318182 L29.375,0 L4.40625,0 Z"
                                            id="Path"
                                            fillOpacity="0.2"
                                            fill="#FFFFFF"
                                            fillRule="nonzero"
                                            mask="url(#mask-11)"
                                        />
                                    </g>
                                    <g id="Clipped">
                                        <mask id="mask-13" fill="white">
                                            <use xlinkHref="#path-12" />
                                        </mask>
                                        <g id="SVGID_1_" />
                                        <path
                                            d="M42.59375,64.6306818 L4.40625,64.6306818 C1.9828125,64.6306818 0,62.6363636 0,60.1988636 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,60.1988636 C47,62.6363636 45.0171875,64.6306818 42.59375,64.6306818 Z"
                                            id="Path"
                                            fillOpacity="0.2"
                                            fill="#1A237E"
                                            fillRule="nonzero"
                                            mask="url(#mask-13)"
                                        />
                                    </g>
                                    <g id="Clipped">
                                        <mask id="mask-15" fill="white">
                                            <use xlinkHref="#path-14" />
                                        </mask>
                                        <g id="SVGID_1_" />
                                        <path
                                            d="M33.78125,17.7272727 C31.3467969,17.7272727 29.375,15.7440341 29.375,13.2954545 L29.375,13.6647727 C29.375,16.1133523 31.3467969,18.0965909 33.78125,18.0965909 L47,18.0965909 L47,17.7272727 L33.78125,17.7272727 Z"
                                            id="Path"
                                            fillOpacity="0.1"
                                            fill="#1A237E"
                                            fillRule="nonzero"
                                            mask="url(#mask-15)"
                                        />
                                    </g>
                                </g>
                                <path
                                    d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
                                    id="Path"
                                    fill="url(#radialGradient-16)"
                                    fillRule="nonzero"
                                />
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    ),
    zapier: () => (
        <svg
            width="105"
            height="28"
            viewBox="0 0 244 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M57.1877 45.2253L57.1534 45.1166L78.809 25.2914V15.7391H44.0663V25.2914H64.8181L64.8524 25.3829L43.4084 45.2253V54.7775H79.1579V45.2253H57.1877Z"
                fill="#201515"
            />
            <path
                d="M100.487 14.8297C96.4797 14.8297 93.2136 15.434 90.6892 16.6429C88.3376 17.6963 86.3568 19.4321 85.0036 21.6249C83.7091 23.8321 82.8962 26.2883 82.6184 28.832L93.1602 30.3135C93.5415 28.0674 94.3042 26.4754 95.4482 25.5373C96.7486 24.5562 98.3511 24.0605 99.9783 24.136C102.118 24.136 103.67 24.7079 104.634 25.8519C105.59 26.9959 106.076 28.5803 106.076 30.6681V31.7091H95.9401C90.7807 31.7091 87.0742 32.8531 84.8206 35.1411C82.5669 37.429 81.442 40.4492 81.4458 44.2014C81.4458 48.0452 82.5707 50.9052 84.8206 52.7813C87.0704 54.6574 89.8999 55.5897 93.3089 55.5783C97.5379 55.5783 100.791 54.1235 103.067 51.214C104.412 49.426 105.372 47.3793 105.887 45.2024H106.27L107.723 54.7546H117.275V30.5651C117.275 25.5659 115.958 21.6936 113.323 18.948C110.688 16.2024 106.409 14.8297 100.487 14.8297ZM103.828 44.6475C102.312 45.9116 100.327 46.5408 97.8562 46.5408C95.8199 46.5408 94.4052 46.1843 93.6121 45.4712C93.2256 45.1338 92.9182 44.7155 92.7116 44.246C92.505 43.7764 92.4043 43.2671 92.4166 42.7543C92.3941 42.2706 92.4702 41.7874 92.6403 41.3341C92.8104 40.8808 93.071 40.4668 93.4062 40.1174C93.7687 39.7774 94.1964 39.5145 94.6633 39.3444C95.1303 39.1743 95.6269 39.1006 96.1231 39.1278H106.093V39.7856C106.113 40.7154 105.919 41.6374 105.527 42.4804C105.134 43.3234 104.553 44.0649 103.828 44.6475Z"
                fill="#201515"
            />
            <path
                d="M175.035 15.7391H163.75V54.7833H175.035V15.7391Z"
                fill="#201515"
            />
            <path
                d="M241.666 15.7391C238.478 15.7391 235.965 16.864 234.127 19.1139C232.808 20.7307 231.805 23.1197 231.119 26.2809H230.787L229.311 15.7391H219.673V54.7775H230.959V34.7578C230.959 32.2335 231.55 30.2982 232.732 28.9521C233.914 27.606 236.095 26.933 239.275 26.933H243.559V15.7391H241.666Z"
                fill="#201515"
            />
            <path
                d="M208.473 17.0147C205.839 15.4474 202.515 14.6657 198.504 14.6695C192.189 14.6695 187.247 16.4675 183.678 20.0634C180.108 23.6593 178.324 28.6166 178.324 34.9352C178.233 38.7553 179.067 42.5407 180.755 45.9689C182.3 49.0238 184.706 51.5592 187.676 53.2618C190.665 54.9892 194.221 55.8548 198.344 55.8586C201.909 55.8586 204.887 55.3095 207.278 54.2113C209.526 53.225 211.483 51.6791 212.964 49.7211C214.373 47.7991 215.42 45.6359 216.052 43.3377L206.329 40.615C205.919 42.1094 205.131 43.4728 204.041 44.5732C202.942 45.6714 201.102 46.2206 198.521 46.2206C195.451 46.2206 193.163 45.3416 191.657 43.5837C190.564 42.3139 189.878 40.5006 189.575 38.1498H216.201C216.31 37.0515 216.367 36.1306 216.367 35.387V32.9561C216.431 29.6903 215.757 26.4522 214.394 23.4839C213.118 20.7799 211.054 18.5248 208.473 17.0147ZM198.178 23.9758C202.754 23.9758 205.348 26.2275 205.962 30.731H189.775C190.032 29.2284 190.655 27.8121 191.588 26.607C193.072 24.8491 195.268 23.972 198.178 23.9758Z"
                fill="#201515"
            />
            <path
                d="M169.515 0.00366253C168.666 -0.0252113 167.82 0.116874 167.027 0.421484C166.234 0.726094 165.511 1.187 164.899 1.77682C164.297 2.3723 163.824 3.08658 163.512 3.87431C163.2 4.66204 163.055 5.50601 163.086 6.35275C163.056 7.20497 163.201 8.05433 163.514 8.84781C163.826 9.64129 164.299 10.3619 164.902 10.9646C165.505 11.5673 166.226 12.0392 167.02 12.3509C167.814 12.6626 168.663 12.8074 169.515 12.7762C170.362 12.8082 171.206 12.6635 171.994 12.3514C172.782 12.0392 173.496 11.5664 174.091 10.963C174.682 10.3534 175.142 9.63077 175.446 8.83849C175.75 8.04621 175.89 7.20067 175.859 6.35275C175.898 5.50985 175.761 4.66806 175.456 3.88115C175.151 3.09424 174.686 2.37951 174.09 1.78258C173.493 1.18565 172.779 0.719644 171.992 0.414327C171.206 0.109011 170.364 -0.0288946 169.521 0.00938803L169.515 0.00366253Z"
                fill="#201515"
            />
            <path
                d="M146.201 14.6695C142.357 14.6695 139.268 15.8764 136.935 18.2902C135.207 20.0786 133.939 22.7479 133.131 26.2981H132.771L131.295 15.7563H121.657V66H132.942V45.3054H133.354C133.698 46.6852 134.181 48.0267 134.795 49.3093C135.75 51.3986 137.316 53.1496 139.286 54.3314C141.328 55.446 143.629 56.0005 145.955 55.9387C150.68 55.9387 154.277 54.0988 156.748 50.419C159.219 46.7392 160.455 41.6046 160.455 35.0153C160.455 28.6509 159.259 23.6689 156.869 20.0691C154.478 16.4694 150.922 14.6695 146.201 14.6695ZM147.345 42.9602C146.029 44.8668 143.97 45.8201 141.167 45.8201C140.012 45.8735 138.86 45.6507 137.808 45.1703C136.755 44.6898 135.832 43.9656 135.116 43.0574C133.655 41.2233 132.927 38.7122 132.931 35.5243V34.7807C132.931 31.5432 133.659 29.0646 135.116 27.3448C136.572 25.625 138.59 24.7747 141.167 24.7937C144.02 24.7937 146.092 25.6994 147.385 27.5107C148.678 29.322 149.324 31.8483 149.324 35.0896C149.332 38.4414 148.676 41.065 147.356 42.9602H147.345Z"
                fill="#201515"
            />
            <path d="M39.0441 45.2253H0V54.789H39.0441V45.2253Z" fill="#FF4F00" />
        </svg>
    ),
    messenger: () => (
        <svg
            width="100"
            height="100"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
        >
            <radialGradient
                id="8O3wK6b5ASW2Wn6hRCB5xa_YFbzdUk7Q3F8_gr1"
                cx="11.087"
                cy="7.022"
                r="47.612"
                gradientTransform="matrix(1 0 0 -1 0 50)"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0" stopColor="#1292ff"></stop>
                <stop offset=".079" stopColor="#2982ff"></stop>
                <stop offset=".23" stopColor="#4e69ff"></stop>
                <stop offset=".351" stopColor="#6559ff"></stop>
                <stop offset=".428" stopColor="#6d53ff"></stop>
                <stop offset=".754" stopColor="#df47aa"></stop>
                <stop offset=".946" stopColor="#ff6257"></stop>
            </radialGradient>
            <path
                fill="url(#8O3wK6b5ASW2Wn6hRCB5xa_YFbzdUk7Q3F8_gr1)"
                d="M44,23.5C44,34.27,35.05,43,24,43c-1.651,0-3.25-0.194-4.784-0.564	c-0.465-0.112-0.951-0.069-1.379,0.145L13.46,44.77C12.33,45.335,11,44.513,11,43.249v-4.025c0-0.575-0.257-1.111-0.681-1.499	C6.425,34.165,4,29.11,4,23.5C4,12.73,12.95,4,24,4S44,12.73,44,23.5z"
            />
            <path
                d="M34.992,17.292c-0.428,0-0.843,0.142-1.2,0.411l-5.694,4.215	c-0.133,0.1-0.28,0.15-0.435,0.15c-0.15,0-0.291-0.047-0.41-0.136l-3.972-2.99c-0.808-0.601-1.76-0.918-2.757-0.918	c-1.576,0-3.025,0.791-3.876,2.116l-1.211,1.891l-4.12,6.695c-0.392,0.614-0.422,1.372-0.071,2.014	c0.358,0.654,1.034,1.06,1.764,1.06c0.428,0,0.843-0.142,1.2-0.411l5.694-4.215c0.133-0.1,0.28-0.15,0.435-0.15	c0.15,0,0.291,0.047,0.41,0.136l3.972,2.99c0.809,0.602,1.76,0.918,2.757,0.918c1.576,0,3.025-0.791,3.876-2.116l1.211-1.891	l4.12-6.695c0.392-0.614,0.422-1.372,0.071-2.014C36.398,17.698,35.722,17.292,34.992,17.292L34.992,17.292z"
                opacity=".05"
            />
            <path
                d="M34.992,17.792c-0.319,0-0.63,0.107-0.899,0.31l-5.697,4.218	c-0.216,0.163-0.468,0.248-0.732,0.248c-0.259,0-0.504-0.082-0.71-0.236l-3.973-2.991c-0.719-0.535-1.568-0.817-2.457-0.817	c-1.405,0-2.696,0.705-3.455,1.887l-1.21,1.891l-4.115,6.688c-0.297,0.465-0.32,1.033-0.058,1.511c0.266,0.486,0.787,0.8,1.325,0.8	c0.319,0,0.63-0.107,0.899-0.31l5.697-4.218c0.216-0.163,0.468-0.248,0.732-0.248c0.259,0,0.504,0.082,0.71,0.236l3.973,2.991	c0.719,0.535,1.568,0.817,2.457,0.817c1.405,0,2.696-0.705,3.455-1.887l1.21-1.891l4.115-6.688c0.297-0.465,0.32-1.033,0.058-1.511	C36.051,18.106,35.531,17.792,34.992,17.792L34.992,17.792z"
                opacity=".07"
            />
            <path
                fill="#ffffff"
                d="M34.394,18.501l-5.7,4.22c-0.61,0.46-1.44,0.46-2.04,0.01L22.68,19.74	c-1.68-1.25-4.06-0.82-5.19,0.94l-1.21,1.89l-4.11,6.68c-0.6,0.94,0.55,2.01,1.44,1.34l5.7-4.22c0.61-0.46,1.44-0.46,2.04-0.01	l3.974,2.991c1.68,1.25,4.06,0.82,5.19-0.94l1.21-1.89l4.11-6.68C36.434,18.901,35.284,17.831,34.394,18.501z"
            />
        </svg>
    )
}
