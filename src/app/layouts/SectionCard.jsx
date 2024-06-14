import { cn } from "../utils";

/**
 * A reusable card component with rounded corners and a shadow effect.
 * Used for sections on the website.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The content of the card.
 * @param {string} props.className - Additional class names for the card.
 * @param {Object} props.style - Additional inline styles for the card.
 * @param {string} props.id - The id attribute for the card.
 * @returns {JSX.Element} The SectionCard component.
 */
export const SectionCard = ({ children, className, style, id }) => {
  // Returns a div element with rounded corners and a shadow effect.
  // The content of the card is passed as children.
  // Additional class names and inline styles can be provided.
  return (
    <div
      id={id}
      className={cn(
        "rounded-[20px] shadow-md hover:shadow-2xl transition-shadow duration-300",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};
