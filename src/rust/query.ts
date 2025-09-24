"use server";

import { GameDig } from "gamedig";

export async function getServerState(host: string, port: number) {
  return await GameDig.query({
    type: "rust",
    host,
    port,
  })
    .then((state) => {
      return state;
    })
    .catch((error) => {
      return error;
    });
}
