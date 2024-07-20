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
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"

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
        title: "Otomatik AML/KYC Süreçleri",
        caption: "İşlemler otomatik olarak denetlenir ve AML/KYC kontrolleri gerçekleştirilir. Bu sayede regülasyonlara uygun şekilde güvenli işlemler gerçekleştirilir."
    },
    {
        id: 2,
        icon: icon2,
        title: "Multichannel Yapısı",
        caption: "Platform, kullanıcılar, AML/KYC firmaları ve kurumlar arasındaki etkileşimleri yönetir. Tüm tarafların ihtiyaçlarına uygun çözümler sunulur ve işlemler kolaylaştırılır."
    },
    {
        id: 3,
        icon: icon3,
        title: "Şeffaflık ve İzlenebilirlik",
        caption: "İşlemler şeffaf ve izlenebilir hale getirilir. İşlemlerin her aşaması takip edebilir ve güvenle işlem gerçekleştirebilir."
    },
    {
        id: 4,
        icon: icon4,
        title: "Scoring Sistemi",
        caption: "Cüzdanların geçmiş işlemleri analiz edilir ve bir skor belirlenir. Bu skor kayıtta tutularak geçmiş skor her yeni işlemde güncellenir."
    },
    {
        id: 5,
        icon: icon5,
        title: "Raporlama ve Skorlamalar",
        caption: "İşlem sonuçları ve cüzdan skorları otomatik olarak raporlanır. İşlemlerinin detaylı analizlerine kolayca erişebilir."
    },
]

const faq_list = [
    {
        ask: "GuardAmlBot nasıl çalışır?",
        answer: "GuardAmlBot, kullanıcıların kripto para işlemlerini güvenli ve regülasyonlara uygun bir şekilde gerçekleştirmelerini sağlar. Kullanıcılar, platform üzerinden bir sohbet odası açarak işlem yapmak istedikleri kurumu ve para birimini seçerler. Bot, işlemleri otomatik olarak denetler, AML ve KYC kontrollerini gerçekleştirir ve işlemleri izler. Her işlemde, cüzdan geçmişi incelenir ve skorlanır."
    },
    {
        ask: "GuardAmlBot’un sağladığı avantajlar nelerdir?",
        answer: "GuardAmlBot, işlemlerin hızlı ve düşük maliyetli olmasını sağlar. Otomatik AML/KYC süreçleri sayesinde manuel işlem yapma ihtiyacını ortadan kaldırır. Ayrıca, her işlemde detaylı kontroller yaparak yasa dışı faaliyetlerin önüne geçer ve kullanıcıların güvenliğini artırır."
    },
    {
        ask: "GuardAmlBot regülasyon uyumunu nasıl sağlar?",
        answer: "GuardAmlBot, her işlemde otomatik AML ve KYC kontrolleri yaparak kullanıcıların ve kurumların regülasyonlara uygun olmasını sağlar. Platform, işlemlerin şeffaf ve izlenebilir olmasını sağlayarak, regülasyon otoritelerinin gereksinimlerini karşılar ve raporlamaları otomatik olarak gerçekleştirir."
    },
    {
        ask: "Cüzdan skorlama sistemi nasıl çalışır?",
        answer: "GuardAmlBot, her işlemde cüzdanların geçmişini analiz eder ve bir skor belirler. Bu skor, cüzdanın geçmiş işlemlerine, AML/KYC kontrollerine ve diğer faktörlere dayanarak belirlenir. Skor 90 üstü olduğunda işlem onaylanır. Bu şekilde, güvenli ve temiz para politikası sağlanmış olur."
    },
    {
        ask: "GuardAmlBot’un kullanımı kolay mı?",
        answer: "Evet, GuardAmlBot kullanıcı dostu bir arayüze sahiptir. Kullanıcılar, sadece birkaç adımda işlemlerini gerçekleştirebilirler. Sohbet odası açarak işlemi başlatabilir, gerekli bilgileri girerek AML ve KYC kontrollerinin yapılmasını sağlayabilirler. Bot, tüm süreci otomatik olarak yönetir."
    },
    {
        ask: "GuardAmlBot hangi tür kullanıcılar ve kurumlar için uygundur?",
        answer: "GuardAmlBot, kripto para işlemleri yapan bireysel kullanıcılar, finansal kurumlar ve AML/KYC hizmeti sağlayan firmalar için uygundur. Kullanıcılar, platform üzerinden güvenli ve regülasyonlara uygun işlemler gerçekleştirebilirken, finansal kurumlar ve AML/KYC firmaları da müşterilerine daha güvenli hizmetler sunabilirler."
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


    function Submit(e) {
        e.preventDefault();
        const formEle = document.querySelector("form");
        const formData = new FormData(formEle);
        fetch(
            `https://script.google.com/macros/s/${import.meta.env.VITE_SCRIPT_KEY}`,
            {
                method: "POST",
                body: formData
            }
        )

            .then((res) => {

                if (res.ok) {
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
                }
            })
            .catch((error) => {
                console.log(error);
            });
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
                                text="Otomatik AML/KYC Çözümleri"
                            />
                            <FadeText
                                className="z-10 relative text-base  md:text-xl text-balance text-gray-400"
                                direction="down"
                                framerProps={{
                                    show: { transition: { delay: 1 } },
                                }}
                                text="Kripto Varlıklar üzerindeki işlemlerde otomatik AML denetimini gerçekleştirerek regülasyon uyumu, hız ve güvenlik sağlayan en yenilikçi AML platformu"
                            />
                            <form onSubmit={(e) => Submit(e)} className="z-10 relative  w-full md:max-w-sm  items-center space-x-2 flex mt-10 ">
                                <Input type="email" name="Email" placeholder="Email adres" className="h-14" />
                                <Button type="submit" className="h-14">Bize Katılın</Button>
                            </form>
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
                                            <Icons.eth />
                                        </Circle>
                                        <Circle ref={div5Ref}>
                                            <Icons.sol />
                                        </Circle>
                                    </div>
                                    <div className="flex flex-row items-center justify-between">
                                        <Circle ref={div2Ref}>
                                            <Icons.btc />
                                        </Circle>
                                        <Circle ref={div4Ref} className="size-16">
                                            <Icons.guard />
                                        </Circle>
                                        <Circle ref={div6Ref}>
                                            <Icons.avax />
                                        </Circle>
                                    </div>
                                    <div className="flex flex-row items-center justify-between">
                                        <Circle ref={div3Ref}>
                                            <Icons.bnb />
                                        </Circle>
                                        <Circle ref={div7Ref}>
                                            <Icons.ltc />
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
                        text="GuardAmlBot Çözümleri"
                    />
                    {/* <FadeText
                        className="text-xl font-medium text-center text-gray-4  00 dark:text-white "
                        direction="down"
                        framerProps={{
                            show: { transition: { delay: 0.6 } },
                        }}
                        text="We provide full pack of options for safe work with crypto"
                    /> */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 h-full w-full ">
                        {
                            services.map(item => (
                                <BlurFade delay={0.25 + item.id / 30} inView className={"w-full max-h-[420px] h-auto "}>
                                    <MagicCard
                                        className="cursor-pointer flex flex-1 text-start rounded-2xl  flex-col items-start  shadow-2xl p-5  "
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
                <section className=" min-h-screen flex flex-col text-center items-center gap-10 ">
                    <FadeText
                        className="text-3xl md:text-5xl  font-bold text-black text-center dark:text-white "
                        direction="down"
                        framerProps={{
                            show: { transition: { delay: 0.6 } },
                        }}
                        text="Platformun Faydaları"
                    />
                    <ResizablePanelGroup
                        direction="horizontal"
                        className="   rounded-lg border"
                    >
                        <ResizablePanel defaultSize={400}>
                            <div className="flex h-[200px] items-center justify-center p-12 flex-col gap-4">
                                <span className="font-bold text-2xl">Düşük Ücretler</span>
                                <p  className="text-sm text-gray-400">
                                    Otomatikleştirilmiş AML/KYC süreçleri sayesinde manuel işlemlere kıyasla daha düşük maliyetler sunulur.
                                </p>
                            </div>
                        </ResizablePanel>
                        <ResizableHandle />
                        <ResizablePanel defaultSize={800}>
                            <ResizablePanelGroup direction="vertical">
                                <ResizablePanel defaultSize={400}>
                                    <div className="flex h-full items-center justify-center p-12 flex-col gap-4">
                                        <span className="font-bold text-2xl">Hız</span>
                                        <p className="text-sm text-gray-400">Gerçek zamanlı doğrulama ve otomatik süreçler ile işlemler çok daha hızlı bir şekilde gerçekleştirilir.</p>
                                    </div>
                                </ResizablePanel>
                                <ResizableHandle />
                                <ResizablePanel defaultSize={400}>
                                    <div className="flex h-full items-center justify-center p-12 flex-col gap-4">
                                        <span className="font-bold text-2xl">Temiz Para Politikası</span>
                                        <p  className="text-sm text-gray-400">Her işlemde detaylı AML/KYC kontrolleri yapılarak yasa dışı faaliyetlerin önüne geçilir. Temiz ve güvenli para politikası sağlanır.</p>
                                    </div>
                                </ResizablePanel>
                            </ResizablePanelGroup>
                        </ResizablePanel>
                    </ResizablePanelGroup>
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
                                    {
                                        faq_list.map((item, index) => (
                                            <AccordionItem value={`item-${index + 1}`} key={index}>
                                                <AccordionTrigger>{item.ask}</AccordionTrigger>
                                                <AccordionContent>
                                                    {item.answer}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))
                                    }

                                </Accordion>
                                <div className="relative md:flex hidden h-[500px] w-full flex-col items-center justify-center overflow-hidden   ">

                                    {/* Inner Circles */}
                                    <OrbitingCircles
                                        className="size-[30px] border-none bg-transparent"
                                        duration={20}
                                        delay={20}
                                        radius={80}
                                    >
                                        <Icons.bnb />
                                    </OrbitingCircles>
                                    <OrbitingCircles
                                        className="size-[30px] border-none bg-transparent"
                                        duration={20}
                                        delay={10}
                                        radius={80}
                                    >
                                        <Icons.btc />
                                    </OrbitingCircles>

                                    {/* Outer Circles (reverse) */}
                                    <OrbitingCircles
                                        className="size-[50px] border-none bg-transparent"
                                        radius={190}
                                        duration={20}
                                        reverse
                                    >
                                        <Icons.eth />
                                    </OrbitingCircles>
                                    <OrbitingCircles
                                        className="size-[50px] border-none bg-transparent"
                                        radius={190}
                                        duration={20}
                                        delay={20}
                                        reverse
                                    >
                                        <Icons.sol />
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
    btc: () => (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:xodm="http://www.corel.com/coreldraw/odm/2003" xmlSpace="preserve" width="100"
            height="100" version="1.1" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 4091.27 4091.73">
            <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer" />
                <g id="_1421344023328">
                    <path fill="#F7931A" fillRule="nonzero" d="M4030.06 2540.77c-273.24,1096.01 -1383.32,1763.02 -2479.46,1489.71 -1095.68,-273.24 -1762.69,-1383.39 -1489.33,-2479.31 273.12,-1096.13 1383.2,-1763.19 2479,-1489.95 1096.06,273.24 1763.03,1383.51 1489.76,2479.57l0.02 -0.02z" />
                    <path fill="white" fillRule="nonzero" d="M2947.77 1754.38c40.72,-272.26 -166.56,-418.61 -450,-516.24l91.95 -368.8 -224.5 -55.94 -89.51 359.09c-59.02,-14.72 -119.63,-28.59 -179.87,-42.34l90.16 -361.46 -224.36 -55.94 -92 368.68c-48.84,-11.12 -96.81,-22.11 -143.35,-33.69l0.26 -1.16 -309.59 -77.31 -59.72 239.78c0,0 166.56,38.18 163.05,40.53 90.91,22.69 107.35,82.87 104.62,130.57l-104.74 420.15c6.26,1.59 14.38,3.89 23.34,7.49 -7.49,-1.86 -15.46,-3.89 -23.73,-5.87l-146.81 588.57c-11.11,27.62 -39.31,69.07 -102.87,53.33 2.25,3.26 -163.17,-40.72 -163.17,-40.72l-111.46 256.98 292.15 72.83c54.35,13.63 107.61,27.89 160.06,41.3l-92.9 373.03 224.24 55.94 92 -369.07c61.26,16.63 120.71,31.97 178.91,46.43l-91.69 367.33 224.51 55.94 92.89 -372.33c382.82,72.45 670.67,43.24 791.83,-303.02 97.63,-278.78 -4.86,-439.58 -206.26,-544.44 146.69,-33.83 257.18,-130.31 286.64,-329.61l-0.07 -0.05zm-512.93 719.26c-69.38,278.78 -538.76,128.08 -690.94,90.29l123.28 -494.2c152.17,37.99 640.17,113.17 567.67,403.91zm69.43 -723.3c-63.29,253.58 -453.96,124.75 -580.69,93.16l111.77 -448.21c126.73,31.59 534.85,90.55 468.94,355.05l-0.02 0z" />
                </g>
            </g>
        </svg>

    ),
    guard: () => (
        <svg width={180} height={180} viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M101.821 26.3584L25.4538 102.726C21.9391 106.241 21.9391 111.939 25.4538 115.454C28.9685 118.969 34.667 118.969 38.1817 115.454L114.549 39.0863C118.064 35.5716 118.064 29.8731 114.549 26.3583C111.035 22.8436 105.336 22.8436 101.821 26.3584Z" fill="#3A57E8" />
            <path d="M140.001 64.538L63.6336 140.906C60.1189 144.42 60.1189 150.119 63.6336 153.633C67.1483 157.148 72.8468 157.148 76.3615 153.633L152.729 77.2659C156.244 73.7512 156.244 68.0527 152.729 64.538C149.214 61.0233 143.516 61.0233 140.001 64.538Z" fill="#3A57E8" />
            <path d="M114.456 140.823L76.2723 102.639C72.7576 99.1246 67.0591 99.1246 63.5444 102.639C60.0296 106.154 60.0296 111.853 63.5444 115.367L101.728 153.551C105.243 157.066 110.941 157.066 114.456 153.551C117.971 150.036 117.971 144.338 114.456 140.823Z" fill="#3A57E8" />
            <path d="M152.736 102.735L76.3687 26.3679C72.854 22.8532 67.1555 22.8531 63.6408 26.3679C60.1261 29.8826 60.1261 35.5811 63.6408 39.0958L140.008 115.463C143.523 118.978 149.222 118.978 152.736 115.463C156.251 111.949 156.251 106.25 152.736 102.735Z" fill="#3A57E8" />
        </svg>


    ),
    eth: () => (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:xodm="http://www.corel.com/coreldraw/odm/2003" xmlSpace="preserve" width="100" height="100" version="1.1" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 784.37 1277.39">
            <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer" />
                <g id="_1421394342400">
                    <g>
                        <polygon fill="#343434" fillRule="nonzero" points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54 " />
                        <polygon fill="#8C8C8C" fillRule="nonzero" points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33 " />
                        <polygon fill="#3C3C3B" fillRule="nonzero" points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89 " />
                        <polygon fill="#8C8C8C" fillRule="nonzero" points="392.07,1277.38 392.07,956.52 -0,724.89 " />
                        <polygon fill="#141414" fillRule="nonzero" points="392.07,882.29 784.13,650.54 392.07,472.33 " />
                        <polygon fill="#393939" fillRule="nonzero" points="0,650.54 392.07,882.29 392.07,472.33 " />
                    </g>
                </g>
            </g>
        </svg>

    ),
    bnb: () => (
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 2496 2496" style={{ enableBackground: 'new 0 0 2496 2496' }} xmlSpace="preserve">
            <g>
                <path style={{ fillRule: 'evenodd', clipRule: 'evenodd', fill: '#F0B90B' }} d="M1248,0c689.3,0,1248,558.7,1248,1248s-558.7,1248-1248,1248   S0,1937.3,0,1248S558.7,0,1248,0L1248,0z" />
                <path style={{ fill: '#FFFFFF' }} d="M685.9,1248l0.9,330l280.4,165v193.2l-444.5-260.7v-524L685.9,1248L685.9,1248z M685.9,918v192.3   l-163.3-96.6V821.4l163.3-96.6l164.1,96.6L685.9,918L685.9,918z M1084.3,821.4l163.3-96.6l164.1,96.6L1247.6,918L1084.3,821.4   L1084.3,821.4z" />
                <path style={{ fill: '#FFFFFF' }} d="M803.9,1509.6v-193.2l163.3,96.6v192.3L803.9,1509.6L803.9,1509.6z M1084.3,1812.2l163.3,96.6   l164.1-96.6v192.3l-164.1,96.6l-163.3-96.6V1812.2L1084.3,1812.2z M1645.9,821.4l163.3-96.6l164.1,96.6v192.3l-164.1,96.6V918   L1645.9,821.4L1645.9,821.4L1645.9,821.4z M1809.2,1578l0.9-330l163.3-96.6v524l-444.5,260.7v-193.2L1809.2,1578L1809.2,1578   L1809.2,1578z" />
                <polygon style={{ fill: '#FFFFFF' }} points="1692.1,1509.6 1528.8,1605.3 1528.8,1413 1692.1,1316.4 1692.1,1509.6  " />
                <path style={{ fill: '#FFFFFF' }} d="M1692.1,986.4l0.9,193.2l-281.2,165v330.8l-163.3,95.7l-163.3-95.7v-330.8l-281.2-165V986.4   L968,889.8l279.5,165.8l281.2-165.8l164.1,96.6H1692.1L1692.1,986.4z M803.9,656.5l443.7-261.6l444.5,261.6l-163.3,96.6   l-281.2-165.8L967.2,753.1L803.9,656.5L803.9,656.5z" />
            </g>
        </svg>

    ),
    sol: () => (
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 397.7 311.7" style={{ enableBackground: 'new 0 0 397.7 311.7' }} xmlSpace="preserve">
            <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n                .st0{fill:url(#SVGID_1_);}\n                .st1{fill:url(#SVGID_2_);}\n                .st2{fill:url(#SVGID_3_);}\n            " }} />
            <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="360.8791" y1="351.4553" x2="141.213" y2="-69.2936" gradientTransform="matrix(1 0 0 -1 0 314)">
                <stop offset={0} style={{ stopColor: '#00FFA3' }} />
                <stop offset={1} style={{ stopColor: '#DC1FFF' }} />
            </linearGradient>
            <path className="st0" d="M64.6,237.9c2.4-2.4,5.7-3.8,9.2-3.8h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5  c-5.8,0-8.7-7-4.6-11.1L64.6,237.9z" />
            <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="264.8291" y1="401.6014" x2="45.163" y2="-19.1475" gradientTransform="matrix(1 0 0 -1 0 314)">
                <stop offset={0} style={{ stopColor: '#00FFA3' }} />
                <stop offset={1} style={{ stopColor: '#DC1FFF' }} />
            </linearGradient>
            <path className="st1" d="M64.6,3.8C67.1,1.4,70.4,0,73.8,0h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5  c-5.8,0-8.7-7-4.6-11.1L64.6,3.8z" />
            <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="312.5484" y1="376.688" x2="92.8822" y2="-44.061" gradientTransform="matrix(1 0 0 -1 0 314)">
                <stop offset={0} style={{ stopColor: '#00FFA3' }} />
                <stop offset={1} style={{ stopColor: '#DC1FFF' }} />
            </linearGradient>
            <path className="st2" d="M333.1,120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8,0-8.7,7-4.6,11.1l62.7,62.7c2.4,2.4,5.7,3.8,9.2,3.8h317.4  c5.8,0,8.7-7,4.6-11.1L333.1,120.1z" />
        </svg>

    ),
    avax: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} viewBox="0 0 1503 1504" fill="none">
            <rect x={287} y={258} width={928} height={844} fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M1502.5 752C1502.5 1166.77 1166.27 1503 751.5 1503C336.734 1503 0.5 1166.77 0.5 752C0.5 337.234 336.734 1 751.5 1C1166.27 1 1502.5 337.234 1502.5 752ZM538.688 1050.86H392.94C362.314 1050.86 347.186 1050.86 337.962 1044.96C327.999 1038.5 321.911 1027.8 321.173 1015.99C320.619 1005.11 328.184 991.822 343.312 965.255L703.182 330.935C718.495 303.999 726.243 290.531 736.021 285.55C746.537 280.2 759.083 280.2 769.599 285.55C779.377 290.531 787.126 303.999 802.438 330.935L876.42 460.079L876.797 460.738C893.336 489.635 901.723 504.289 905.385 519.669C909.443 536.458 909.443 554.169 905.385 570.958C901.695 586.455 893.393 601.215 876.604 630.549L687.573 964.702L687.084 965.558C670.436 994.693 661.999 1009.46 650.306 1020.6C637.576 1032.78 622.263 1041.63 605.474 1046.62C590.161 1050.86 573.004 1050.86 538.688 1050.86ZM906.75 1050.86H1115.59C1146.4 1050.86 1161.9 1050.86 1171.13 1044.78C1181.09 1038.32 1187.36 1027.43 1187.92 1015.63C1188.45 1005.1 1181.05 992.33 1166.55 967.307C1166.05 966.455 1165.55 965.588 1165.04 964.706L1060.43 785.75L1059.24 783.735C1044.54 758.877 1037.12 746.324 1027.59 741.472C1017.08 736.121 1004.71 736.121 994.199 741.472C984.605 746.453 976.857 759.552 961.544 785.934L857.306 964.891L856.949 965.507C841.69 991.847 834.064 1005.01 834.614 1015.81C835.352 1027.62 841.44 1038.5 851.402 1044.96C860.443 1050.86 875.94 1050.86 906.75 1050.86Z" fill="#E84142" />
        </svg>

    ),
    ltc: () => (
        <svg width={100} height={100} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 82.6 82.6"><title>litecoin-ltc-logo</title><circle cx="41.3" cy="41.3" r="36.83" style={{ fill: '#fff' }} /><path d="M41.3,0A41.3,41.3,0,1,0,82.6,41.3h0A41.18,41.18,0,0,0,41.54,0ZM42,42.7,37.7,57.2h23a1.16,1.16,0,0,1,1.2,1.12v.38l-2,6.9a1.49,1.49,0,0,1-1.5,1.1H23.2l5.9-20.1-6.6,2L24,44l6.6-2,8.3-28.2a1.51,1.51,0,0,1,1.5-1.1h8.9a1.16,1.16,0,0,1,1.2,1.12v.38L43.5,38l6.6-2-1.4,4.8Z" style={{ fill: '#345d9d' }} /></svg>

    )
}
