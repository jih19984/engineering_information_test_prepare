create extension if not exists pgcrypto;

create table if not exists public.problems (
  id uuid primary key default gen_random_uuid(),
  question text not null,
  answer text not null,
  category text not null,
  year int,
  problem_type text not null default 'theory',
  language text,
  created_at timestamptz not null default now()
);

create table if not exists public.user_answers (
  id uuid primary key default gen_random_uuid(),
  user_id text not null default (auth.jwt()->>'sub'),
  problem_id uuid not null references public.problems(id) on delete cascade,
  user_answer text not null,
  is_correct boolean not null,
  created_at timestamptz not null default now()
);

create table if not exists public.notes (
  id uuid primary key default gen_random_uuid(),
  user_id text not null default (auth.jwt()->>'sub'),
  problem_id uuid not null references public.problems(id) on delete cascade,
  memo text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint notes_user_problem_unique unique (user_id, problem_id)
);

create index if not exists problems_category_year_idx
  on public.problems (category, year desc);

create index if not exists problems_problem_type_language_year_idx
  on public.problems (problem_type, language, year desc);

create index if not exists user_answers_user_problem_created_idx
  on public.user_answers (user_id, problem_id, created_at desc);

create index if not exists user_answers_user_created_idx
  on public.user_answers (user_id, created_at desc);

create index if not exists notes_user_created_idx
  on public.notes (user_id, created_at desc);

alter table public.problems enable row level security;
alter table public.user_answers enable row level security;
alter table public.notes enable row level security;

drop policy if exists "Authenticated users can read problems" on public.problems;
create policy "Authenticated users can read problems"
on public.problems
for select
to authenticated
using (true);

drop policy if exists "Users can read own answers" on public.user_answers;
create policy "Users can read own answers"
on public.user_answers
for select
to authenticated
using ((select auth.jwt()->>'sub') = user_id);

drop policy if exists "Users can insert own answers" on public.user_answers;
create policy "Users can insert own answers"
on public.user_answers
for insert
to authenticated
with check ((select auth.jwt()->>'sub') = user_id);

drop policy if exists "Users can read own notes" on public.notes;
create policy "Users can read own notes"
on public.notes
for select
to authenticated
using ((select auth.jwt()->>'sub') = user_id);

drop policy if exists "Users can insert own notes" on public.notes;
create policy "Users can insert own notes"
on public.notes
for insert
to authenticated
with check ((select auth.jwt()->>'sub') = user_id);

drop policy if exists "Users can update own notes" on public.notes;
create policy "Users can update own notes"
on public.notes
for update
to authenticated
using ((select auth.jwt()->>'sub') = user_id)
with check ((select auth.jwt()->>'sub') = user_id);

drop policy if exists "Users can delete own notes" on public.notes;
create policy "Users can delete own notes"
on public.notes
for delete
to authenticated
using ((select auth.jwt()->>'sub') = user_id);

create or replace function public.set_notes_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_notes_updated_at_trigger on public.notes;
create trigger set_notes_updated_at_trigger
before update on public.notes
for each row
execute function public.set_notes_updated_at();
