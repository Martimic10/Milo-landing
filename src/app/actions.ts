"use server";

import { supabase } from "@/lib/supabase";

export async function joinWaitlist(firstName: string, email: string) {
  const { error } = await supabase
    .from("waitlist")
    .insert({ first_name: firstName, email });

  if (error) {
    if (error.code === "23505") {
      return { success: false, error: "That email is already on the list." };
    }
    return {
      success: false,
      error: "Something went wrong. Please try again.",
    };
  }

  return { success: true };
}
