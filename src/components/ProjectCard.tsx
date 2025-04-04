import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tags: string[];
}
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  description,
  imageUrl,
  tags
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return <div className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="aspect-video w-full bg-gray-800 overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <span className="text-xs font-medium text-purple-400 mb-1 uppercase tracking-wider">
          {category}
        </span>
        <h3 className="text-xl font-bold text-white mb-2 transition-transform duration-300 group-hover:-translate-y-1">
          {title}
        </h3>
        <div className="overflow-hidden transition-all duration-500 ease-in-out max-h-0 group-hover:max-h-24">
          <p className="text-gray-300 text-sm mb-3">{description}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => <span key={index} className="text-xs px-2 py-1 rounded-full bg-purple-900/60 text-purple-200">
                {tag}
              </span>)}
          </div>
        </div>
      
      </div>
    </div>;
};
export default ProjectCard;