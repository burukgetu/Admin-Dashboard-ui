// eslint-disable-next-line no-unused-vars
import React from 'react'
import ProjectStatistics from '../components/ProjectStatistics'
import Platforms from '../components/Platforms'
import ProjectCard from '../components/ProjectCard'
import ClientCard from '../components/ClientCard'
import MemberCard from '../components/MemberCard'

const projects = [
  {
    name: "Website Redesign",
    type: "Web development",
    date: "2024-03-25",
    members: ["Alice", "Bob","Charlie"],
    files: 4,
    progress: 20
  },
  {
    name: "Mobile App Development",
    type: "Web development",
    date: "2024-03-25",
    members: ["Alice", "Bob","Charlie"],
    files: 4,
    progress: 20
  },
  {
    name: "Marketing",
    type: "Web development",
    date: "2024-03-25",
    members: ["Alice", "Bob","Charlie"],
    files: 4,
    progress: 20
  },
  {
    name: "Project launch",
    type: "Web development",
    date: "2024-03-25",
    members: ["Alice", "Bob","Charlie"],
    files: 4,
    progress: 20
  },
]

const clients = [
  {
    name: "Abc corporation",
    title: "CEO",
    date: "2024-04-10T09:00:00Z"
  },
  {
    name: "XYZ Company",
    title: "Marketing director",
    date: "2024-04-20T14:00:00Z"
  },
  {
    name: "Yahoo! industries",
    title: "Project Manager",
    date: "2024-04-05T19:15:00Z"
  },
  {
    name: "Sheno Tech",
    title: "CEO",
    date: "2024-04-15T20:45:00Z"
  },
]

const members = [
  {
    total_members: 4,
    job: "UI Designer"
  },
  {
    total_members: 3,
    job: "Frontend developer"
  },
  {
    total_members: 6,
    job: "Backend  Developer"
  },
  {
    total_members: 2,
    job: "Mobile App Developer"
  },
]

const Home = () => {
  return (
    <div className='p-5'>
      <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-4'>
        <ProjectStatistics />
        <Platforms />
        <ProjectStatistics />
        <Platforms />
      </div>

      <div>
        <div className=' flex justify-between items-center py-4'>
          <h1 className='text-lg font-semibold'>Current Projects</h1>
          <p className=' text-sm underline text-indigo-600'>See all</p>
        </div>

        <div className=' grid md:grid-cols-2 xl:grid-cols-4 gap-4'>
          { projects && projects.map((project) => <ProjectCard project={project} /> )}
        </div>
      </div>
      
      <div>
        <div className=' flex justify-between items-center py-4'>
          <h1 className='text-lg font-semibold'>Current Clients</h1>
          <p className=' text-sm underline text-indigo-600'>See all</p>
        </div>

        <div className=' grid md:grid-cols-2 xl:grid-cols-4 gap-4'>
          { clients && clients.map((client) => <ClientCard client={client} /> )}
        </div>
      </div>
      
      <div>
        <div className=' flex justify-between items-center py-4'>
          <h1 className='text-lg font-semibold'>Members</h1>
          <p className=' text-sm underline text-indigo-600'>See all</p>
        </div>

        <div className=' grid md:grid-cols-2 xl:grid-cols-4 gap-4'>
          { members && members.map((member) => <MemberCard member={member} /> )}
        </div>
      </div>
    </div>
  )
}

export default Home