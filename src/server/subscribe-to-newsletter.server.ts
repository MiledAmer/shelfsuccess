"use server";

import { revalidatePath } from "next/cache";


export const subscribeToNewsletter = async (email: string) => {
  try {
   
    revalidatePath("/");
    return { ok: true };
  } catch (error) {
    console.error(error);
    return { ok: false };
  }
};
