import "@styles/globals.css";
import { Sacramento , Foldit } from "next/font/google";

const ibm_plex_mono = Foldit({
  weight: ["400", "400", "400", "400"],
  subsets: ["latin"],
});

const poppins = Foldit({
  weight: ["400", "400", "400", "400", "400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Eric",
  description: "E",
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
