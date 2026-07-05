type LogoProps = {
  onNavigate?: () => void;
};

export default function Logo({ onNavigate }: LogoProps) {
  return (
    <a
      href="#home"
      onClick={onNavigate}
      className="text-2xl font-black tracking-tight transition-opacity hover:opacity-80"
    >
      <span className="text-primary">S</span>aad
    </a>
  );
}
