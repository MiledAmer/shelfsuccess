"use server";

import { format } from "date-fns";
import { revalidatePath } from "next/cache";
import { mailerlite } from "~/lib/mailerLite";


export const subscribeToNewsletter = async (email: string) => {
  const params = {
    email: email,
  };
  try {
    await mailerlite.subscribers.createOrUpdate(params);
    revalidatePath("/");
    return { ok: true };
  } catch (error) {
    console.error(error);
    return { ok: false };
  }
};
