import { Metadata } from 'next';
import ServicesTemplate from '@/components/ServicesTemplate';
import { AllServices } from '@/data/AllServices';

type ParamsType = { slug: string };

interface Props {
  params: Promise<ParamsType>;
}

// ✅ Dynamic SEO Metadata with detailed fields
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const service = AllServices.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found | Velra Agency',
      description: 'This service does not exist on Velra.',
      openGraph: {
        title: 'Service Not Found | Velra',
        description: 'This service does not exist on Velra.',
        url: 'https://velra.co.uk/services',
        siteName: 'Velra',
      },
    };
  }

  // You can add a keywords array to each service object in AllServices
  const keywords = service.keywords || [
    service.slug,
    'creative agency Derby',
    'branding Derby',
    'web design Derby',
    'digital marketing Derby',
  ];

  return {
    title: `${service.eyebrow} | Velra Agency`,
    description: service.subtext,
    keywords,
    openGraph: {
      title: `${service.eyebrow} | Velra Agency`,
      description: service.subtext,
      url: `https://velra.co.uk/services/${service.slug}`,
      siteName: 'Velra',
      images: [
        {
          url: service.background,
          width: 1200,
          height: 630,
          alt: service.eyebrow,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.eyebrow} | Velra Agency`,
      description: service.subtext,
      images: [service.background],
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