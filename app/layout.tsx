import "@styles/globals.css";
import { Sacramento , Dancing_Script } from "next/font/google";

const ibm_plex_mono = Dancing_Script({
  weight: ["400", "400", "500", "700"],
  subsets: ["latin"],
});

const poppins = Dancing_Script({
  weight: ["400", "400", "600", "700", "500"],
  subsets: ["latin"],
});

export const metadata = {
  title: "E Portfolio",
  description: "E Personal Portfolio Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ibm_plex_mono.className}>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
