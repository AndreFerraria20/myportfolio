'use client'

import { useState, useEffect } from 'react'

interface Skill {
  name: string
  level: number
}

interface SkillBarsProps {
  skills?: Skill[]
  title: string
  description: string
}

export function SkillBarsComponent({ skills = [], title, description }: SkillBarsProps) {
  const [animatedSkills, setAnimatedSkills] = useState(skills.map(skill => ({ ...skill, animatedLevel: 0 })))

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedSkills(skills.map(skill => ({ ...skill, animatedLevel: skill.level })))
    }, 100)

    return () => clearTimeout(timer)
  }, [skills])

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="space-y-6">
        {animatedSkills.map((skill) => (
          <div key={skill.name} className="relative">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-gray-700">{skill.name}</span>
              <span className="text-sm font-medium text-gray-500">{skill.animatedLevel.toFixed(0)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div 
                className="bg-black h-2.5 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${skill.animatedLevel}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}