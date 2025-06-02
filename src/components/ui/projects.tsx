"use client";

import { motion } from "framer-motion";
import { Button } from "./button";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

interface Project {
	title: string;
	description: string;
	tags?: string[];
	source?: string;
	live?: string;
}

const projects: Project[] = [
	{
		title: "Portfolio",
		description: "You're looking at it!",
		tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Framer Motion"],
		source: "https://github.com/Cirkutry/portfolio",
	},
	{
		title: "SAB",
		description: "SAB or Simple Applications Bot is a Discord bot designed in Python to streamline and manage application processes within Discord servers.",
		tags: ["Python", "Discord.py", "HTML", "CSS", "JavaScript"],
		source: "https://github.com/Cirkutry/application-bot",
	},
	{
		title: "PartyChat",
		description:
			"PartyChat is a lightweight and efficient Minecraft plugin with private in-game party chats.",
		tags: ["Java"],
		source: "https://github.com/Cirkutry/PartyChat"
	}
];

export function Projects() {
	return (
		<section id="projects" className="py-20 bg-background/50">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="max-w-6xl mx-auto"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
						Projects (ᵔ◡ᵔ)
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{projects.map((project, index) => (
							<motion.div
								key={project.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="bg-background/50 rounded-lg p-6 border border-white/10 hover:border-primary/20 transition-colors"
							>
								<h3 className="text-xl font-bold mb-3">
									{project.title}
								</h3>
								<p className="text-muted-foreground mb-4">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2 mb-6">
									{project.tags?.map((tag) => (
										<span
											key={tag}
											className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
										>
											{tag}
										</span>
									))}
								</div>
								<div className="flex gap-4">
									{project.source && (
										<Button
											variant="outline"
											size="sm"
											className="flex items-center gap-2"
											onClick={() =>
												window.open(project.source, "_blank")
											}
										>
											<SiGithub className="w-4 h-4" />
											Source
										</Button>
									)}
									{project.live && (
										<Button
											variant="outline"
											size="sm"
											className="flex items-center gap-2"
											onClick={() =>
												window.open(project.live, "_blank")
											}
										>
											<ExternalLink className="w-4 h-4" />
											Live
										</Button>
									)}
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}