-- Create profiles table in the public schema
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users NOT NULL PRIMARY KEY,
  full_name TEXT,
  evolution_goal TEXT,
  sector TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Set up Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create policy: Users can view their own profile
CREATE POLICY "Users can view own profile" 
ON public.profiles FOR SELECT 
USING (auth.uid() = id);

-- Create policy: Users can update their own profile
CREATE POLICY "Users can update own profile" 
ON public.profiles FOR UPDATE 
USING (auth.uid() = id);

-- Create policy: System can insert profiles during signup
CREATE POLICY "System can insert profiles" 
ON public.profiles FOR INSERT 
WITH CHECK (true);

-- Create biometrics table
CREATE TABLE public.biometrics (
  id BIGSERIAL PRIMARY KEY,
  profile_id UUID REFERENCES public.profiles(id) NOT NULL,
  vo2_max NUMERIC(4,2),
  neural_load NUMERIC(4,2),
  power_output INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.biometrics ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own biometrics" 
ON public.biometrics FOR SELECT 
USING (auth.uid() = profile_id);

CREATE POLICY "Users can insert own biometrics" 
ON public.biometrics FOR INSERT 
WITH CHECK (auth.uid() = profile_id);
