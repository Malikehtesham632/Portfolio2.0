import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number | string };

function IconBase({ size = 16, width, height, ...rest }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? size}
      height={height ?? size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    />
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M3 21l1.4-4.6A8.4 8.4 0 1 1 8 19.6L3 21Z" />
      <path d="M9 10.3c0 2.9 2.1 5 5 5 .3 0 .6-.2.7-.5l.3-.9c.1-.3-.1-.6-.4-.8l-1-.6c-.3-.2-.6-.1-.8.1l-.2.3a5 5 0 0 1-1.7-1.7l.3-.2c.2-.2.3-.5.1-.8l-.6-1c-.2-.3-.5-.5-.8-.4l-.9.3c-.3.1-.5.4-.5.7Z" />
    </IconBase>
  );
}

export function FiverrIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.3 12.3l2.4 2.4 5-5.4" />
    </IconBase>
  );
}
