/* import { SERVER_DETAILS } from "@/consts/rust";
import { getServerState } from "@/rust/query"; */

export default async function ServerStatusPage() {
  /* const serverState = await getServerState(
    SERVER_DETAILS.host,
    SERVER_DETAILS.port
  );

  if (serverState instanceof Error) {
    return <div>Error: {serverState.message}</div>;
  } */

  return (
    <main className="relative flex min-h-[calc(100dvh-5rem)] flex-col items-center justify-center">
      <div className="container relative z-10 flex flex-col items-center justify-center gap-8 px-4 py-16">
        coming soon
      </div>
      {/* <pre>{JSON.stringify(serverState, null, 2)}</pre> */}
    </main>
  );
}
