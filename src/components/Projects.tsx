import Link from "next/link";
import { cn } from "@/lib/utils";

import { ExternalLink } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export const projects = [
    {
        title: "Pi Wallet",
        description: "PiWallet is a Next.js application designed to securely manage your credentials using Solana wallet integration",
        tech: "React",
        link: "https://github.com/pvcodes/piwallet",
    },
    {
        title: "Realtime Chat App",
        description: "Realtime chat using GraphQL Live Queries, Next.js and NextAuth.js",
        tech: "GraphQL",
        link: "https://github.com/pvcodes/realtime-chat-app",
    },
    {
        title: "Native Websocket",
        description: "A vanila websocket server implementation.",
        tech: "Typescript",
        link: "https://github.com/pvcodes/ws",
    },
    {
        title: "PDF Chatbot",
        description: "A machine learning powered pdf chatbot using Python and TensorFlow",
        tech: "Python",
        link: "https://github.com/pvcodes/pdf-chatbot",
    },
]

const techColors = {
    "React": "bg-blue-500",
    "GraphQL": "bg-green-500",
    "Typescript": "bg-purple-500",
    "Python": "bg-yellow-500",
}

export const Projects = () => {
    return (
        <>
            <h2 className="text-xl font-bold mb-4">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {projects.map((p, i) => (
                    <Card key={i}>
                        <CardContent className="pt-6 h-full">
                            <div className="flex flex-col h-full">
                                <Link
                                    href={p.link}
                                    className="font-semibold text-primary hover:underline"
                                >
                                    {p.title}
                                </Link>
                                <p className="text-sm text-muted-foreground mt-1 mb-4">
                                    {p.description}
                                </p>
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div
                                            className={cn(
                                                "size-4 rounded-full",
                                                techColors[p.tech as keyof typeof techColors]
                                            )}
                                        />
                                        <span className="text-xs font-medium text-muted-foreground">
                                            {p.tech}
                                        </span>
                                    </div>
                                    <Link
                                        href={p.link}
                                        className="flex items-center gap-2 text-sm text-primary hover:underline"
                                    >
                                        View Project
                                        <ExternalLink className="inline-block size-3" />
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    )
}