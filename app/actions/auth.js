'use server';

import { cookies } from 'next/headers';
import { createClient } from '../../lib/supabase';
import { z } from 'zod';

const signupSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid neural email address"),
  password: z.string().min(8, "Security protocol requires at least 8 characters"),
  goal: z.string().min(1, "Evolution goal selection is mandatory"),
  sector: z.string().min(1, "Laboratory sector mapping is required"),
});

export async function signUp(formData) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  // Extract and validate data
  const rawData = {
    fullName: formData.get('fullName'),
    email: formData.get('email'),
    password: formData.get('password'),
    goal: formData.get('goal'),
    sector: formData.get('sector'),
  };

  const validated = signupSchema.safeParse(rawData);

  if (!validated.success) {
    return { error: validated.error.errors[0].message };
  }

  const { fullName, email, password, goal, sector } = validated.data;

  // 1. Sign up user via Supabase Auth
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      }
    }
  });

  if (authError) {
    return { error: authError.message };
  }

  // 2. Create profile in public.profiles table
  if (authData.user) {
    const { error: profileError } = await supabase
      .from('profiles')
      .insert([
        {
          id: authData.user.id,
          full_name: fullName,
          evolution_goal: goal,
          sector: sector,
        }
      ]);

    if (profileError) {
      // In a real app, you might want to rollback the auth user or handle this specifically
      return { error: "Failed to initialize neural profile: " + profileError.message };
    }
  }

  return { success: true };
}
