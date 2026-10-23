---
title: GrowingPlate
slug: growingplate
order: 1
role: Solo project. Product design, data model, nutrition engine and front end.
lede: Parents are told to make sure their kids get enough iron, calcium and protein, but nobody tells them how to check. GrowingPlate turns a day of meals into a clear picture of what a child got, and what they missed.
---

## The problem

Children's nutrition targets change with age and sex, and they cover dozens of nutrients. The official tables (ICMR 2020 and WHO recommended daily allowances) exist, but turning "two idlis, a glass of milk and some dal" into numbers you can compare against those tables is not something a busy parent will do by hand.

## What it does

- **Log meals in everyday portions.** Parents enter food the way they think about it, and the app does the conversion to grams.
- **See the day at a glance.** Charts show food-group balance and progress against more than 30 nutrient targets for that child's age and sex.
- **Get alerts that make sense.** Shortfalls are sorted into four severity levels, so a slightly low day reads differently from a pattern worth talking to a doctor about.
<figure class="placeholder" data-label="Screenshot: daily dashboard with nutrient progress"></figure>

## Under the hood

**A nutrition engine with no dependencies.** The core is a self-contained TypeScript module that handles unit conversion, per-item nutrient calculation and the severity rules. It processes a full day of meals in under 50 ms, entirely in the browser, so the dashboard updates the moment you log something.

**Privacy built into the database.** A child's eating habits are sensitive data. The PostgreSQL schema on Supabase uses row-level security on every table, so each family can only ever read its own records. The rule is enforced by the database itself, not just by the app.

**Validated at the edges.** Every form and API boundary is checked with Zod, so bad input is caught before it reaches the engine.

<figure class="placeholder" data-label="Screenshot: meal logging flow"></figure>

## Stack

Next.js 14, TypeScript, Supabase (PostgreSQL with row-level security), Tailwind CSS, shadcn/ui, Recharts, Framer Motion and Zod, deployed on Vercel.
