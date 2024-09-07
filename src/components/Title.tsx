import Head from "next/head";

export default function Title({ route }: { route: string }) {
  return (
    <Head>
      <title>{`니어니어 Nior Near | ${route}`}</title>
    </Head>
  );
}
