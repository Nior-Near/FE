import "@/src/styles/globals.css";
import { QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Inter, Roboto } from "next/font/google";
import localFont from "next/font/local";
import { AxiosError } from "axios";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
});

const reeniebeanie = localFont({
  src: "../fonts/ReenieBeanie.woff2",
  variable: "--font-reeniebeanie",
  display: "swap",
});

const jalnan = localFont({
  src: "../fonts/Jalnan2TTF.woff2",
  variable: "--font-jalnan",
  display: "swap",
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <main
        className={`relative ${pretendard.variable} ${inter.variable} ${roboto.variable} ${reeniebeanie?.variable} ${jalnan?.variable}`}
      >
        <Component {...pageProps} />
      </main>
    </QueryClientProvider>
  );
}
