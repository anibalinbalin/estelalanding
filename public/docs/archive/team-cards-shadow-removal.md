# Team Cards Shadow Removal

## Task
Remove shadow from team member cards in light theme on /company/team page

## Problem
Team member cards have `shadow-[var(--elevation-1)]` applied regardless of theme, but shadows should only appear in dark theme.

## Solution
Make shadow conditional based on theme:
- Light theme: No shadow
- Dark theme: Keep existing shadow

## Files to Modify
- `/app/company/team/components/TeamGrid.tsx` - TeamMemberCard component (line 44)

## Implementation
Update the className to conditionally apply shadow based on `currentTheme !== 'light'`

## Date
2025-01-29

## Status
Completed

## Implementation Details
- Removed `shadow-[var(--elevation-1)]` from the base className
- Added it conditionally to the dark theme styling only
- Light theme: `bg-[#ffffff] border-[#e4e5e4]` (no shadow)
- Dark theme: `bg-[var(--surface-raise-p3)] border-[var(--stroke-secondary-p3)] shadow-[var(--elevation-1)]` (with shadow)

## Code Changes
Line 44-47: Updated className to conditionally apply shadow only in dark theme