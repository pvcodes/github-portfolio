'use client'
import Link from "next/link";
import Image from "next/image";

import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import {
    Card,
    CardContent
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import useMediaQuery from "@/hook/useMediaQuery";
const socials = [
    {
        name: "Github",
        link: "https://github.com/pvcodes",
        icon: <FaGithub className="size-4" />
    },
    {
        name: "LinkedIn",
        link: "https://linkedin.com/in/pvcodes",
        icon: <FaLinkedin className="size-4" />
    },
    {
        name: "X (Twitter)",
        link: "https://x.com/undefined810",
        icon: <FaXTwitter className="size-4" />
    }
    // TODO: Add more socials here
]

export const Profile = () => {
    const isDesktopOrLaptop = useMediaQuery("(min-width: 1224px)");

    return (
        <Card>
            <CardContent className="pt-6">
                <div className="flex flex-col items-start gap-2 ">
                    <div className="w-full flex flex-row justify-between items-top ">
                        <div className="flex flex-row md:flex-col items-center md:items-start w-full gap-4">
                            <Image
                                width={300}
                                height={300}
                                quality={100}
                                src="/me.png"
                                alt="Profile Picture"
                                className="rounded-full size-12 md:w-full h-auto object-cover border-2"
                            />
                            <div className="flex flex-col items-start justify-center">
                                <h1 className="font-bold md:mt-4 text-xl md:text-2xl">Pranjal Verma</h1>
                                <p className="text-sm md:text-base text-muted-foreground">
                                    Software Developer
                                </p>
                            </div>
                        </div>
                        {!isDesktopOrLaptop && <ThemeSwitcher />}
                    </div>

                    <p className="mt-2 text-start text-sm text-muted-foreground">
                        I am a software developer with a passion for building products that solve real-world problems.
                    </p>
                    <Button className="mt-4 w-full" asChild disabled>
                        {/* TODO: Add resume link */}
                        {/* or link to schedule a meeting using Calendly or Cal*/}
                        <Link
                            target="_blank"
                            // href="/resume.pdf"
                            href='mailto:pvcodes@gmail.com'

                            className="font-semibold"
                        >
                            CONTACT ME
                        </Link>
                    </Button>
                    <div className="mt-4 flex flex-col space-y-2 border-t border-border pt-4 w-full">
                        {socials.map((s, i) => {
                            const parts = s.link.split('/')
                            const username = parts[parts.length - 1]
                            return (
                                <Link
                                    key={i}
                                    href={s.link}
                                    target="_blank"
                                    aria-label={`${s.name} Logo`}
                                    className="cursor-pointer flex items-center gap-2 group"
                                >
                                    {s.icon}
                                    <p className="text-sm text-muted-foreground group-hover:text-primary transition-color duration-200 ease-linear">
                                        /{username}
                                    </p>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}