import { Metadata } from 'next';
import ServicesTemplate from '@/components/ServicesTemplate';
import { AllServices } from '@/data/AllServices';

type ParamsType = { slug: string };

interface Props {
  params: Promise<ParamsType>;
}

// ✅ Dynamic SEO Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const service = AllServices.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found | Velra',
      description: 'This service does not exist on Velra.',
    };
  }

  return {
    title: `${service.eyebrow} | Velra`,
    description: service.subtext,
    openGraph: {
      title: `${service.eyebrow} | Velra`,
      description: service.subtext,
      images: [
        {
          url: service.background,
          width: 1200,
          height: 630,
          alt: service.eyebrow,
        },
      ],
    },
  };
}

// ✅ Dynamic page component
export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  const service = AllServices.find((s) => s.slug === slug);

  if (!service) {
    return <div className="text-white text-center py-20">Service not found</div>;
  }

  return <ServicesTemplate service={service} />;
}