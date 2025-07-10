# Work Page Styling Updates

## Issue 1: Missing Icons
The `/company/work` page had missing icons for "Discovery First" and "Measure Impact" items. The SVG sprite references were pointing to non-existent icon IDs.

### Root Cause
The WorkApproachList component was referencing:
- `search-24` (which doesn't exist in the sprite)
- `chart-24` (which doesn't exist in the sprite)

### Solution
Updated the SVG sprite references in `app/company/work/components/WorkApproachList.tsx`:

1. **Discovery First**: Changed from `search-24` to `networking-24`
2. **Measure Impact**: Changed from `chart-24` to `metrics-24`

## Issue 2: Styling Inconsistency
The work page styling didn't match the consistent theme used on the about page.

### Root Cause
The WorkApproachList component used different styling patterns than the PrinciplesList component on the about page:
- Different icon container colors
- Different vertical line colors using CSS variables
- Different title text colors

### Solution
Updated the styling in `app/company/work/components/WorkApproachList.tsx` to match `/company/about`:

1. **Icon Container**: 
   - Light mode: `bg-[#e5e5e5] text-[#ecbb5a]`
   - Dark mode: `bg-[#3d3019] text-[#f5b944]`
   - Removed hover effects

2. **Vertical Line**: Fixed color `bg-[#ecbb5a]` for both modes

3. **Title Text**:
   - Light mode: `text-[#7d8384]`
   - Dark mode: `text-[var(--content-raise-p3)]`

## Files Modified
- `app/company/work/components/WorkApproachList.tsx`: Updated icon references and styling

## Verification
- Page loads correctly at `/company/work`
- Icons display properly in both light and dark modes
- "Our Approach" and "How We Work" sections are visible
- Styling now matches `/company/about` page consistency
- Theme switching works properly between light and dark modes