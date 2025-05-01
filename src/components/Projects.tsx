import Link from "next/link";
// import { cn } from "@/lib/utils";

import { ExternalLink } from "lucide-react";

import { Card, CardContent, } from "@/components/ui/card";
import { Badge } from "./ui/badge";

export const projects = [
    {
        title: "LLMify",
        description: "An innovative AI platform enabling seamless interaction with advanced language models for enhanced productivity and creative workflows.",
        tech: ['OpenAI', 'Anthropic', 'NextJS'],
        link: "https://www.llmify.xyz",
    },
    {
        title: "Pi Wallet",
        description: "PiWallet is a Next.js application designed to securely manage your credentials using Solana wallet integration",
        tech: ["React"],
        link: "https://github.com/pvcodes/piwallet",
    },
    {
        title: "Realtime Chat App",
        description: "Realtime chat using GraphQL Live Queries, Next.js and NextAuth.js",
        tech: ["GraphQL"],
        link: "https://github.com/pvcodes/realtime-chat-app",
    },
    {
        title: "Native Websocket",
        description: "A vanila websocket server implementation.",
        tech: ["Typescript"],
        link: "https://github.com/pvcodes/ws",
    },
    {
        title: "PDF Chatbot",
        description: "A machine learning powered pdf chatbot using Python and TensorFlow",
        tech: ["Python"],
        link: "https://github.com/pvcodes/pdf-chatbot",
    },
]

export const Projects = () => {
    return (
        <>
            <h2 className="text-xl font-bold my-4">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {projects.map((p, i) => (
                    <Card key={i}>
                        <CardContent className="pt-6 h-full">
                            <div className="flex flex-col h-full">
                                <div className="flex justify-between items-baseline">
                                    <Link
                                        href={p.link}
                                        className="font-semibold text-primary hover:underline"
                                        target="_blank"
                                    >
                                        {p.title}
                                    </Link>
                                    <Link
                                        href={p.link}
                                        className="mt-2 flex items-center gap-2 text-sm text-primary hover:underline"
                                    >
                                        View Project
                                        <ExternalLink className="inline-block size-3" />
                                    </Link>
                                </div>
                                <p className="text-sm text-muted-foreground mt-1 mb-4">
                                    {p.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {p.tech.map((s, i) => (
                                        <Badge key={i} variant="secondary">
                                            {s}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    )
}