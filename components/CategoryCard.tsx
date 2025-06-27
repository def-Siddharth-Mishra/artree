import Link from 'next/link';

// Define the interface for CategoryCard props
interface CategoryCardProps {
  title: string;
  icon: React.ReactNode; // Can be an SVG or an icon component
  href: string;
}

/**
 * CategoryCard component for displaying a category with an icon and a link.
 * Used on the homepage to showcase different artist categories.
 *
 * @param {CategoryCardProps} props - Props for the CategoryCard component.
 * @returns {JSX.Element} The CategoryCard component.
 */
export function CategoryCard({ title, icon, href }: CategoryCardProps) {
  return (
    <Link href={href} className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 text-center group">
      <div className="text-4xl text-blue-600 mb-4 group-hover:text-blue-700 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
        {title}
      </h3>
    </Link>
  );
}
