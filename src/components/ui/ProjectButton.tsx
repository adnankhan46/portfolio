import { MoveUpRight } from "lucide-react";
import Link from "next/link";

interface ProjectButtonProps {
  href: string;
  label: string;
}
 // Common projct button
export const ProjectButton = ({ href, label }: ProjectButtonProps) => {
  return (
    <Link
      href={href}
      className="text-sm bg-gray-50 px-2 py-1 rounded-lg inline cursor-pointer border-dashed border-2 border-gray-400 hover:bg-gray-100 transition-colors"
    >
      {label}
    </Link>
  );
};

// Custom Buttons
export const ProjectButtonBuildSpace = ({
  href,
  label,
}: ProjectButtonProps) => {
  return (
    <div className="flex justify-center items-center border-2 border-white bg-gray-800 rounded-lg gap-1 px-1">
    <Link
      href={href}
      className="text-sm text-white py-1 inline cursor-pointer"
    >
      {label}
    </Link>
      <MoveUpRight size={14} color="white"/>
    </div>
  );
};
