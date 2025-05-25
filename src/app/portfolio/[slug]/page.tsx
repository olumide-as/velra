import { AllPortfolios } from '@/data/AllPortfolios';
import PortfolioTemplate from '@/components/PortfolioTemplate';
import type { Metadata } from 'next';

type ParamsType = { slug: string };

interface Props {
  params: Promise<ParamsType>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const project = AllPortfolios.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found | Velra',
      description: 'This portfolio project does not exist.',
    };
  }

  return {
    title: `${project.title} | Velra`,
    description: project.brief,
    openGraph: {
      title: `${project.title} | Velra`,
      description: project.brief,
      images: [
        {
          url: project.images.cover,
          width: 1200,
          height: 630,
          alt: `${project.title} cover`,
        },
      ],
    },
  };
}

export default async function PortfolioPage({ params }: Props) {
  const { slug } = await params;

  const project = AllPortfolios.find((p) => p.slug === slug);

  if (!project) {
    return <div className="text-white text-center py-20">Project not found</div>;
  }

  return <PortfolioTemplate project={project} />;
}