import Head from "next/head";

export default function Title({ route }: { route: string }) {
  return (
    <Head>
      <title>{`${route} - 니어니어 Nior Near`}</title>
    </Head>
  );
}
