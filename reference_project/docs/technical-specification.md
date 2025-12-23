# 108 PERFORMANCE
## Website Technical Specification & Design System

**Version:** 1.0
**Date:** December 2025
**Source:** Extracted from Stitch mockup

---

# TABLE OF CONTENTS

1. [Development Framework](#development-framework)
2. [Tailwind Configuration](#tailwind-configuration)
3. [Typography System](#typography-system)
4. [Color System](#color-system)
5. [Component Library](#component-library)
6. [Animation System](#animation-system)
7. [Layout Patterns](#layout-patterns)
8. [Section Templates](#section-templates)
9. [Dependencies & CDN Links](#dependencies--cdn-links)

---

# DEVELOPMENT FRAMEWORK

## Stack Overview

| Layer | Technology |
|-------|------------|
| CSS Framework | Tailwind CSS (CDN) |
| Plugins | `@tailwindcss/forms`, `@tailwindcss/container-queries` |
| Fonts | Google Fonts (Inter, Anton, Oswald) |
| Icons | Material Symbols Outlined |
| Build | CDN-based (no build step required for prototype) |

## CDN Script

```html
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
```

## Production Recommendation

For production, migrate to:
- Next.js or Astro with Tailwind CSS installed via npm
- PostCSS for optimization
- Font self-hosting for performance

---

# TAILWIND CONFIGURATION

## Complete Config Object

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                navy: {
                    950: '#020617',   // Near black
                    900: '#0b1120',   // Main dark background
                    800: '#1e293b',   // Dark gray
                    700: '#334155',   // Medium dark
                },
                brand: {
                    dark: '#0f172a',      // Slate 900-ish for text
                    blue: '#1e3a8a',      // Dark blue
                    primary: '#2563eb',   // Vivid blue (CTA)
                    accent: '#ef4444',    // Red accent (optional)
                },
                offwhite: '#f5f5f7',      // Apple-style off-white
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                display: ["Anton", "sans-serif"],
                athletic: ["Oswald", "sans-serif"],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'texture': "url('https://www.transparenttextures.com/patterns/cubes.png')",
            },
        },
    },
}
```

---

# TYPOGRAPHY SYSTEM

## Font Stack

### Primary Font: Inter
- **Use:** Body text, navigation, labels, descriptions
- **Weights:** 400, 500, 600, 700, 800, 900
- **Class:** `font-sans` (default)

```css
font-family: "Inter", sans-serif;
```

### Display Font: Anton
- **Use:** Headlines, hero text, section titles
- **Weights:** 400 (single weight)
- **Class:** `font-display`
- **Style:** All uppercase, tight leading

```css
font-family: "Anton", sans-serif;
```

### Athletic Font: Oswald
- **Use:** Subheaders, labels, badges
- **Weights:** 500, 700
- **Class:** `font-athletic`

```css
font-family: "Oswald", sans-serif;
```

## Type Scale

| Element | Class | Size | Weight | Transform |
|---------|-------|------|--------|-----------|
| Hero H1 | `text-7xl sm:text-8xl lg:text-[7rem]` | 7-8rem | `font-display` | `uppercase` |
| Section H2 | `text-5xl md:text-7xl lg:text-8xl` | 5-8rem | `font-display` | `uppercase` |
| Card H4 | `text-3xl` | 1.875rem | `font-display` | `uppercase` |
| Body | `text-lg` | 1.125rem | `font-medium` | — |
| Small Body | `text-sm` | 0.875rem | `font-medium` | — |
| Label | `text-xs` | 0.75rem | `font-bold` | `uppercase tracking-widest` |
| Nav Link | `text-xs` | 0.75rem | `font-bold` | `uppercase tracking-widest` |

## Leading (Line Height)

| Context | Class | Value |
|---------|-------|-------|
| Display Headlines | `leading-[0.9]` or `leading-[0.85]` | 0.85-0.9 |
| Body Text | `leading-relaxed` | 1.625 |
| None (single line) | `leading-none` | 1 |

## Letter Spacing

| Context | Class |
|---------|-------|
| Standard Uppercase | `tracking-wider` |
| Wide Labels | `tracking-widest` |
| Extra Wide | `tracking-[0.2em]` |
| Display Tight | `tracking-tighter` |

---

# COLOR SYSTEM

## Primary Palette

### Navy Scale (Dark Theme)

| Token | Hex | Tailwind Class | Use |
|-------|-----|----------------|-----|
| `navy-950` | `#020617` | `bg-navy-950`, `text-navy-950` | Near black, primary text |
| `navy-900` | `#0b1120` | `bg-navy-900` | Main dark background |
| `navy-800` | `#1e293b` | `bg-navy-800` | Card backgrounds |
| `navy-700` | `#334155` | `bg-navy-700` | Borders, dividers |

### Brand Colors

| Token | Hex | Tailwind Class | Use |
|-------|-----|----------------|-----|
| `brand-dark` | `#0f172a` | `text-brand-dark` | Dark text on light |
| `brand-blue` | `#1e3a8a` | `text-brand-blue`, `bg-brand-blue` | Hover states |
| `brand-primary` | `#2563eb` | `text-brand-primary`, `bg-brand-primary` | CTAs, accents |
| `brand-accent` | `#ef4444` | `text-brand-accent` | Optional highlights |

### Neutrals

| Token | Hex | Tailwind Class | Use |
|-------|-----|----------------|-----|
| `offwhite` | `#f5f5f7` | `bg-offwhite` | Light section backgrounds |
| `white` | `#ffffff` | `bg-white` | Cards, header |
| `gray-100` | System | `border-gray-100` | Light borders |
| `gray-200` | System | `border-gray-200` | Card borders |
| `gray-400` | System | `text-gray-400` | Muted text (dark bg) |
| `gray-500` | System | `text-gray-500` | Body text (light bg) |

## Gradient Patterns

### Hero Overlay (Dark to Transparent)

```html
<div class="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/80 to-transparent"></div>
<div class="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent"></div>
```

### Text Gradient

```html
<span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
    Feel It,
</span>
```

### Accent Gradient

```html
<span class="text-transparent bg-clip-text bg-gradient-to-br from-gray-400 to-gray-600">
    Coach Approved.
</span>
```

---

# COMPONENT LIBRARY

## Buttons

### Primary CTA (Skewed)

```html
<button class="bg-white hover:bg-gray-200 text-navy-950 text-sm font-black uppercase tracking-widest px-10 py-4 rounded-none skew-x-[-10deg] transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] border border-white group">
    <div class="skew-x-[10deg]">Experience 108</div>
</button>
```

### Secondary CTA (Pill)

```html
<button class="bg-navy-950 hover:bg-brand-blue text-white text-xs font-bold uppercase tracking-wider py-3 px-6 rounded-full transition-all duration-300 shadow-md">
    Experience 108
</button>
```

### Ghost Button (Text + Arrow)

```html
<button class="text-white hover:text-brand-primary font-bold uppercase tracking-widest px-6 py-4 flex items-center gap-3 group transition-colors">
    Watch Film
    <span class="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">arrow_forward</span>
</button>
```

### Glow CTA (Dark Section)

```html
<button class="bg-brand-primary hover:bg-white hover:text-navy-950 text-white text-lg font-black uppercase tracking-widest px-12 py-5 rounded-full transition-all duration-300 shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)]">
    Experience 108
</button>
```

---

## Cards

### Light Card (White Background)

```html
<div class="group bg-white p-10 rounded-none border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-[28rem] justify-between relative overflow-hidden">
    <!-- Decorative corner -->
    <div class="absolute top-0 right-0 w-24 h-24 bg-offwhite rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-500"></div>

    <div class="relative z-10">
        <!-- Icon -->
        <div class="w-14 h-14 bg-brand-primary/10 flex items-center justify-center rounded-lg mb-8 group-hover:bg-brand-primary transition-colors duration-300">
            <span class="material-symbols-outlined text-brand-primary text-3xl group-hover:text-white transition-colors">speed</span>
        </div>

        <!-- Content -->
        <h4 class="font-display text-3xl uppercase text-navy-950 mb-4">Dramatic<br/>Results. Fast.</h4>
        <p class="text-gray-500 leading-relaxed font-medium text-sm">
            Description text here...
        </p>
    </div>

    <!-- Footer -->
    <div class="relative z-10 flex justify-between items-end border-t border-gray-100 pt-6">
        <span class="text-xs font-black text-gray-300 group-hover:text-brand-primary transition-colors">01</span>
        <button class="text-navy-950 group-hover:translate-x-2 transition-transform duration-300">
            <span class="material-symbols-outlined">arrow_forward</span>
        </button>
    </div>
</div>
```

### Dark Card (Navy Background)

```html
<div class="group bg-navy-950 text-white p-10 rounded-none shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-[28rem] justify-between relative overflow-hidden">
    <!-- Texture overlay -->
    <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
    <!-- Glow effect -->
    <div class="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-primary/30 rounded-full blur-[80px]"></div>

    <div class="relative z-10">
        <!-- Icon -->
        <div class="w-14 h-14 bg-white/10 flex items-center justify-center rounded-lg mb-8 group-hover:bg-brand-primary transition-colors duration-300">
            <span class="material-symbols-outlined text-white text-3xl">ecg_heart</span>
        </div>

        <!-- Content -->
        <h4 class="font-display text-3xl uppercase text-white mb-4">Play Without<br/>Pain.</h4>
        <p class="text-gray-400 leading-relaxed font-medium text-sm">
            Description text here...
        </p>
    </div>

    <!-- Footer -->
    <div class="relative z-10 flex justify-between items-end border-t border-white/10 pt-6">
        <span class="text-xs font-black text-gray-500 group-hover:text-white transition-colors">02</span>
        <button class="text-white group-hover:translate-x-2 transition-transform duration-300">
            <span class="material-symbols-outlined">arrow_forward</span>
        </button>
    </div>
</div>
```

### Photo Card (Polaroid Style)

```html
<div class="absolute top-0 right-10 w-64 h-80 bg-gray-800 border-4 border-white overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 z-10">
    <img alt="Athlete focus" class="w-full h-full object-cover filter grayscale contrast-125" src="image.jpg"/>
    <div class="absolute bottom-0 left-0 w-full bg-navy-900/90 p-3">
        <p class="text-white font-display text-2xl uppercase tracking-wider">Drafted</p>
    </div>
</div>
```

---

## Header / Navigation

### Fixed Header with Blur

```html
<header class="fixed top-0 z-50 w-full backdrop-blur-xl bg-white/80 border-b border-gray-200/50 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <!-- Logo -->
        <div class="flex items-center gap-2 text-brand-blue group cursor-pointer">
            <span class="material-symbols-outlined text-[32px] font-black transform group-hover:-rotate-12 transition-transform duration-300">bolt</span>
            <span class="text-xl font-display tracking-wider text-navy-950 uppercase">108 Performance</span>
        </div>

        <!-- Nav Links -->
        <nav class="hidden md:flex items-center gap-10">
            <a class="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-brand-blue transition-colors" href="#">Guide</a>
            <a class="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-brand-blue transition-colors" href="#">Services</a>
            <a class="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-brand-blue transition-colors" href="#">About</a>
        </nav>

        <!-- CTA -->
        <div class="flex items-center">
            <button class="bg-navy-950 hover:bg-brand-blue text-white text-xs font-bold uppercase tracking-wider py-3 px-6 rounded-full transition-all duration-300 shadow-md">
                Experience 108
            </button>
        </div>

    </div>
</header>
```

---

## Footer

```html
<footer class="bg-white py-20 border-t border-gray-200">
    <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">

            <!-- Brand Column -->
            <div class="col-span-1">
                <div class="flex items-center gap-2 mb-6 text-navy-950">
                    <span class="material-symbols-outlined text-3xl">bolt</span>
                    <span class="font-display text-2xl uppercase tracking-tighter">108 Performance</span>
                </div>
                <p class="text-gray-500 mb-6 font-medium">
                    Master Service Offerings Guide<br/>December 2025
                </p>
            </div>

            <!-- Link Column -->
            <div>
                <h4 class="font-bold text-navy-950 mb-6 uppercase tracking-widest text-xs">Services</h4>
                <ul class="space-y-4 text-gray-500 font-medium">
                    <li><a class="hover:text-brand-primary transition-colors" href="#">Performance Training</a></li>
                    <li><a class="hover:text-brand-primary transition-colors" href="#">Biomechanics Lab</a></li>
                    <li><a class="hover:text-brand-primary transition-colors" href="#">Remote Coaching</a></li>
                </ul>
            </div>

            <!-- Social Icons -->
            <div>
                <h4 class="font-bold text-navy-950 mb-6 uppercase tracking-widest text-xs">Connect</h4>
                <div class="flex gap-4">
                    <a class="w-10 h-10 rounded-full bg-offwhite flex items-center justify-center text-navy-950 hover:bg-navy-950 hover:text-white transition-all duration-300" href="#">
                        <span class="material-symbols-outlined text-lg">photo_camera</span>
                    </a>
                </div>
            </div>

        </div>

        <!-- Bottom Bar -->
        <div class="mt-16 pt-8 border-t border-gray-100 text-xs font-bold text-gray-400 flex flex-col md:flex-row justify-between uppercase tracking-wider">
            <p>© 2025 108 Performance. All rights reserved.</p>
            <p class="flex gap-6"><span>Privacy Policy</span> <span>Terms of Use</span></p>
        </div>
    </div>
</footer>
```

---

# ANIMATION SYSTEM

## Custom CSS Animations

### Fade In Up

```css
.fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
    opacity: 0;
    transform: translateY(20px);
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

**Usage with Staggered Delays:**

```html
<div class="fade-in-up" style="animation-delay: 0.1s;">Element 1</div>
<div class="fade-in-up" style="animation-delay: 0.2s;">Element 2</div>
<div class="fade-in-up" style="animation-delay: 0.3s;">Element 3</div>
```

## Tailwind Transition Classes

| Effect | Classes |
|--------|---------|
| Standard | `transition-all duration-300` |
| Long | `transition-all duration-500` |
| Transform | `transition-transform duration-300` |
| Colors | `transition-colors` |

## Hover Effects

### Card Lift

```html
class="hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
```

### Arrow Slide

```html
class="group-hover:translate-x-2 transition-transform duration-300"
```

### Icon Rotate

```html
class="transform group-hover:-rotate-12 transition-transform duration-300"
```

### Scale on Hover

```html
class="transition-transform group-hover:scale-150 duration-500"
```

### Photo Rotation

```html
class="rotate-3 hover:rotate-0 transition-transform duration-500"
```

---

# LAYOUT PATTERNS

## Container

```html
<div class="max-w-7xl mx-auto px-6">
    <!-- Content -->
</div>
```

## Section Spacing

| Section Type | Padding |
|--------------|---------|
| Standard | `py-24` or `py-32` |
| Hero | `pt-20` (accounts for fixed header) |
| Full-height | `min-h-screen` |

## Grid Layouts

### 12-Column Hero Grid

```html
<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
    <div class="lg:col-span-7"><!-- Content --></div>
    <div class="lg:col-span-5"><!-- Visual --></div>
</div>
```

### 3-Column Card Grid

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <!-- Cards -->
</div>
```

### 4-Column Footer Grid

```html
<div class="grid grid-cols-1 md:grid-cols-4 gap-12">
    <!-- Columns -->
</div>
```

---

# SECTION TEMPLATES

## Hero Section (Dark + Image)

```html
<section class="relative min-h-screen flex flex-col justify-center overflow-hidden bg-navy-900 text-white pt-20">
    <!-- Background Layer -->
    <div class="absolute inset-0 z-0">
        <div class="w-full h-full bg-cover bg-center" style="background-image: url('hero-bg.jpg'); opacity: 0.25; filter: grayscale(100%) contrast(125%); mix-blend-mode: luminosity;"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/80 to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent"></div>
    </div>

    <!-- Content Layer -->
    <div class="relative z-10 w-full max-w-7xl mx-auto px-6">
        <!-- Content here -->
    </div>
</section>
```

## Statement Section (Centered Text)

```html
<section class="relative py-32 bg-white overflow-hidden">
    <!-- Ghost Text Background -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03]">
        <span class="font-display text-[15vw] leading-none text-navy-950 uppercase">Performance</span>
    </div>

    <!-- Content -->
    <div class="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div class="inline-flex items-center justify-center w-16 h-16 mb-8 rounded-full bg-navy-950 text-white shadow-xl">
            <span class="material-symbols-outlined text-3xl">verified</span>
        </div>
        <h2 class="font-display text-5xl md:text-7xl uppercase text-navy-950 mb-8 leading-[0.9]">
            Lab Tested.<br/><span class="text-transparent bg-clip-text bg-gradient-to-br from-gray-400 to-gray-600">Coach Approved.</span>
        </h2>
        <p class="max-w-2xl mx-auto text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">
            Description text here.
        </p>
    </div>
</section>
```

## Cards Section (Off-White Background)

```html
<section class="py-24 bg-offwhite border-t border-gray-200">
    <div class="max-w-7xl mx-auto px-6">
        <!-- Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
                <h3 class="font-display text-4xl md:text-5xl uppercase text-navy-950 mb-2">The 108 Standard</h3>
                <p class="text-gray-500 text-lg font-medium tracking-wide">Precision training designed for the elite.</p>
            </div>
            <a class="hidden md:flex items-center gap-2 text-navy-950 font-bold uppercase tracking-widest text-sm hover:text-brand-primary transition-colors" href="#">
                View All Services <span class="material-symbols-outlined text-lg">arrow_right_alt</span>
            </a>
        </div>

        <!-- Card Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Cards here -->
        </div>
    </div>
</section>
```

## Full-Bleed Image Section (Parallax)

```html
<section class="relative h-[85vh] w-full overflow-hidden flex items-center bg-navy-900">
    <!-- Background -->
    <div class="absolute inset-0 z-0">
        <div class="w-full h-full bg-cover bg-fixed bg-center" style="background-image: url('image.jpg'); filter: grayscale(100%); opacity: 0.4;"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/50 to-transparent"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div class="max-w-3xl border-l-4 border-brand-primary pl-8 md:pl-12">
            <h2 class="font-display text-white text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.85] mb-8 drop-shadow-lg">
                Precision<br/>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">Is Not An</span><br/>
                Accident
            </h2>
            <div class="flex flex-col sm:flex-row gap-6 mt-12">
                <button class="bg-white text-navy-950 hover:bg-brand-primary hover:text-white px-8 py-4 text-sm font-black uppercase tracking-widest transition-all duration-300 skew-x-[-10deg]">
                    <div class="skew-x-[10deg]">Explore The Science</div>
                </button>
            </div>
        </div>
    </div>
</section>
```

## CTA Section (Dark + Glow)

```html
<section class="py-32 bg-navy-950 text-white text-center relative overflow-hidden">
    <!-- Ghost Text Background -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03]">
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-display text-[20vw] whitespace-nowrap text-white">
            108 PERFORMANCE
        </div>
    </div>

    <!-- Content -->
    <div class="max-w-4xl mx-auto px-6 relative z-10">
        <h2 class="font-display text-6xl md:text-8xl uppercase mb-6 leading-none">
            Unlock Your<br/><span class="text-brand-primary">Potential</span>
        </h2>
        <p class="text-xl text-gray-400 mb-12 font-medium max-w-2xl mx-auto">
            Join the elite athletes redefining their limits at 108 Performance.
        </p>
        <button class="bg-brand-primary hover:bg-white hover:text-navy-950 text-white text-lg font-black uppercase tracking-widest px-12 py-5 rounded-full transition-all duration-300 shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)]">
            Experience 108
        </button>
    </div>
</section>
```

---

# DEPENDENCIES & CDN LINKS

## Required Head Tags

```html
<!DOCTYPE html>
<html class="scroll-smooth" lang="en">
<head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>108 PERFORMANCE</title>

    <!-- Material Icons -->
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com" rel="preconnect"/>
    <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Anton&family=Oswald:wght@500;700&display=swap" rel="stylesheet"/>

    <!-- Tailwind CSS with Plugins -->
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
</head>
```

## Custom CSS (Required)

```html
<style>
    /* Material Icons Configuration */
    .material-symbols-outlined {
        font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    }

    /* Fade In Animation */
    .fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
        opacity: 0;
        transform: translateY(20px);
    }

    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Vertical Text (if needed) */
    .vertical-text {
        writing-mode: vertical-rl;
        text-orientation: mixed;
    }
</style>
```

## Body Classes

```html
<body class="bg-offwhite text-navy-950 font-sans antialiased selection:bg-brand-primary selection:text-white">
```

---

# ICON REFERENCE

## Material Symbols Used

| Icon Name | Context |
|-----------|---------|
| `bolt` | Logo/brand icon |
| `verified` | Trust badge |
| `speed` | Performance card |
| `ecg_heart` | Health/longevity card |
| `monitoring` | Data card |
| `arrow_forward` | Card CTAs |
| `arrow_right_alt` | Link arrows |
| `photo_camera` | Instagram social |
| `alternate_email` | Email/Twitter social |
| `play_circle` | YouTube social |

## Icon Styling

```html
<!-- Standard Icon -->
<span class="material-symbols-outlined text-3xl">icon_name</span>

<!-- Small Icon -->
<span class="material-symbols-outlined text-lg">icon_name</span>

<!-- Icon with Hover Color Change -->
<span class="material-symbols-outlined text-brand-primary text-3xl group-hover:text-white transition-colors">icon_name</span>
```

---

# IMAGE TREATMENT

## Grayscale + Contrast Filter

```css
filter: grayscale(100%) contrast(125%);
```

```html
<img class="w-full h-full object-cover filter grayscale contrast-125" src="image.jpg"/>
```

## Background Image Opacity Overlay

```html
<div class="w-full h-full bg-cover bg-center" style="background-image: url('image.jpg'); opacity: 0.25; filter: grayscale(100%) contrast(125%); mix-blend-mode: luminosity;"></div>
```

## Parallax Background

```html
<div class="w-full h-full bg-cover bg-fixed bg-center" style="background-image: url('image.jpg');"></div>
```

---

# RESPONSIVE BREAKPOINTS

Tailwind default breakpoints used:

| Breakpoint | Min Width | Prefix |
|------------|-----------|--------|
| Default | 0px | — |
| `sm` | 640px | `sm:` |
| `md` | 768px | `md:` |
| `lg` | 1024px | `lg:` |
| `xl` | 1280px | `xl:` |

## Common Responsive Patterns

```html
<!-- Typography Scale -->
class="text-5xl md:text-7xl lg:text-8xl"

<!-- Grid Columns -->
class="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

<!-- Hidden on Mobile -->
class="hidden md:flex"

<!-- Spacing -->
class="px-6 md:px-8 lg:px-12"
```

---

**END OF TECHNICAL SPECIFICATION**

---

*This document serves as the complete technical reference for implementing the 108 Performance website design system.*
