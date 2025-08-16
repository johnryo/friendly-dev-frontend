import type { Project } from '~/types';
import ProjectCard from './ProjectCard';
import { GlowingStar } from './icons/Star';

type FeaturedProjectsProps = {
  projects: Project[];
  count: number;
};

const FeaturedProjects = ({ projects, count = 4 }: FeaturedProjectsProps) => {
  if (projects.length === 0) return null;

  return (
    <div>
      <h2 className='flex items-center gap-3 text-gray-200 text-2xl font-bold mb-6'>
        <GlowingStar /> Featured Projects
      </h2>

      <div className='grid gap-6 sm:grid-cols-2'>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
