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
      robots: 'noindex, nofollow',
    };
  }

  // Prepare keywords string if available
  const keywords = project.keywords ? project.keywords.join(', ') : 'web design, branding, portfolio, Velra';

  const canonicalUrl = `https://velra.co.uk/portfolio/${slug}`;

  return {
    title: `${project.title} | Velra`,
    description: project.brief,
    keywords,  // add keywords metadata
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${project.title} | Velra`,
      description: project.brief,
      url: canonicalUrl,
      siteName: 'Velra',
      images: [
        {
          url: project.images.cover,
          width: 1200,
          height: 630,
          alt: `${project.title} cover`,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Velra`,
      description: project.brief,
      images: [project.images.cover],
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