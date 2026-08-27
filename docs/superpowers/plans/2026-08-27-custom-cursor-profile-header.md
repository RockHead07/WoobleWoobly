# Custom Cursor & Profile Header Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement Curzr ArrowPointer (Option 1) cursor and integrate `profilePicture.png` in ProfileHeader.

**Architecture:** Replace existing cursor with Curzr ArrowPointer SVG and JavaScript class adapted for viewport scrolling & interactive element scaling; update ProfileHeader to import `profilePicture.png` into the circular glowing avatar badge with verified icon.

**Tech Stack:** Astro v7, Tailwind CSS v4, TypeScript

## Global Constraints
- Keep styling responsive and mobile-friendly
- Maintain clean TypeScript/Astro components

---

### Task 1: Update Global CSS Cursor Configuration
**Files:**
- Modify: `src/styles/global.css`

- [ ] **Step 1: Add cursor hiding rules for fine pointer devices**
Add `@media (hover: hover) and (pointer: fine) { * { cursor: none !important; } }` in `src/styles/global.css`.

- [ ] **Step 2: Verify CSS syntax**

---

### Task 2: Implement Curzr ArrowPointer Cursor Component
**Files:**
- Modify: `src/components/cursor/CustomCursor.astro`

- [ ] **Step 1: Write ArrowPointer component with SVG & script**
Update `src/components/cursor/CustomCursor.astro` with Curzr SVG arrow and velocity rotation logic.

- [ ] **Step 2: Verify cursor behavior and hover interactions**

---

### Task 3: Implement `profilePicture.png` in ProfileHeader
**Files:**
- Modify: `src/components/profile/ProfileHeader.astro`

- [ ] **Step 1: Import profilePicture.png in ProfileHeader**
Update `src/components/profile/ProfileHeader.astro` to use `profilePicture.png` with glowing aura and verified badge.

- [ ] **Step 2: Verify rendering in build / preview**
