import BackgroundEffect from "./components/BackgroundEffect";
import "./styles/globals.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="relative bg-lbrown">
        <BackgroundEffect />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
