import { GameDig, type QueryResult } from "gamedig";

export async function getServerState(
  host: string,
  port: number,
): Promise<QueryResult | Error> {
  try {
    const state = await GameDig.query({
      type: "rust",
      host,
      port,
      requestRules: true,
    });
    return state;
  } catch (error) {
    return new Error(error instanceof Error ? error.message : "Unknown error");
  }
}
