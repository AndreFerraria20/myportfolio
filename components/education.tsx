import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
 
export function Education() {
  const data = [
    { date: "2014 – 2018", title: 'IT Equipment Management and Maintenance Technician ', description: "Installing, configuring, and maintaining computer hardware, software, and networks. Includes troubleshooting and coding." },
    { date: "2018 - 2022", title: 'Computer science degree', description: "Software development, planning and configuration of networks and services, security, mobile computing, administration and intelligent data analysis, among other skills." },
    { date: "01/01/2023 – 31/03/2023", title: 'Research Grant for Optimizing the Picking Process in a Warehouse', description: "Developing agents that navigate the warehouse while avoiding collisions through advanced pathfinding algorithms and code optimization techniques." },
    { date: "2024- ", title: 'Freelance Developer', description: "Developing websites and web applications." },

  ];



  return (
    <div className="w-full items-center flex flex-col">
      <h2 className="text-2xl font-semibold mb-4">Education</h2>
      <p className="text-sm text-muted-foreground mb-8 md:text-lg text-center">My education path with my formal education, certificates and readings:</p>
      <Timeline data={data} title="" className="" />
    </div>
  );
}