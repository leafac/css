import css from "tagged-template-noop";
export { css };
export type CSS = string;

export const preamble = css`
  /*
    https://necolas.github.io/normalize.css/8.0.1/normalize.css
    https://meyerweb.com/eric/tools/css/reset/
    https://github.com/twbs/bootstrap/blob/649c2bb0bf326db36cbbf7e72c0541b19749a70e/dist/css/bootstrap-reboot.css
    https://github.com/sindresorhus/modern-normalize/blob/1fc6b5a86676b7ac8abc62d04d6080f92debc70f/modern-normalize.css
    https://github.com/suitcss/base/blob/50d5ad1e0d6790eb3df29b705db3684a9909894f/lib/base.css
    https://github.com/tailwindlabs/tailwindcss/blob/b442c912e2d052ad026fd2e3d31bc450f620a784/src/plugins/css/preflight.css
    https://github.com/jensimmons/cssremedy/blob/468e31a7eda599eea2003ed7983c190828ffb5fd/css/remedy.css
    https://github.com/csstools/sanitize.css/tree/776bd4d72654ddb54aa5071b2cd10bb1957f7f97
    https://unpkg.com/browse/@tailwindcss/forms@0.3.2/dist/forms.css
  */

  *,
  ::before,
  ::after {
    font: inherit;
    text-decoration: inherit;
    text-size-adjust: 100%;
    color: inherit;
    background-color: transparent;
    box-sizing: border-box;
    padding: 0;
    border: 0;
    margin: 0;
    outline: 0;
    overflow-wrap: break-word;
    appearance: none;
    list-style: none;
    cursor: inherit;
  }

  [hidden] {
    display: none !important;
  }

  /*
    https://github.com/tailwindlabs/tailwindcss/blob/1d72dc269956bbdac96c33172bddf831b4f682ec/stubs/defaultConfig.stub.js
    https://github.com/tailwindlabs/tailwindcss/blob/1d72dc269956bbdac96c33172bddf831b4f682ec/colors.js
  */
  :root {
    --font-family--sans-serif: ui-sans-serif, system-ui, -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", "Noto Color Emoji";
    --font-family--serif: ui-serif, Georgia, Cambria, "Times New Roman", Times,
      serif;
    --font-family--monospace: ui-monospace, SFMono-Regular, Menlo, Monaco,
      Consolas, "Liberation Mono", "Courier New", monospace;

    --font-size--xs: 0.75rem;
    --line-height--xs: 1rem;
    --font-size--sm: 0.875rem;
    --line-height--sm: 1.25rem;
    --font-size--base: 1rem;
    --line-height--base: 1.5rem;
    --font-size--lg: 1.125rem;
    --line-height--lg: 1.75rem;
    --font-size--xl: 1.25rem;
    --line-height--xl: 1.75rem;
    --font-size--2xl: 1.5rem;
    --line-height--2xl: 2rem;
    --font-size--3xl: 1.875rem;
    --line-height--3xl: 2.25rem;
    --font-size--4xl: 2.25rem;
    --line-height--4xl: 2.5rem;
    --font-size--5xl: 3rem;
    --line-height--5xl: 1;
    --font-size--6xl: 3.75rem;
    --line-height--6xl: 1;
    --font-size--7xl: 4.5rem;
    --line-height--7xl: 1;
    --font-size--8xl: 6rem;
    --line-height--8xl: 1;
    --font-size--9xl: 8rem;
    --line-height--9xl: 1;

    --font-weight--thin: 100;
    --font-weight--extralight: 200;
    --font-weight--light: 300;
    --font-weight--normal: 400;
    --font-weight--medium: 500;
    --font-weight--semibold: 600;
    --font-weight--bold: 700;
    --font-weight--extrabold: 800;
    --font-weight--black: 900;

    --letter-spacing--tighter: -0.05em;
    --letter-spacing--tight: -0.025em;
    --letter-spacing--normal: 0em;
    --letter-spacing--wide: 0.025em;
    --letter-spacing--wider: 0.05em;
    --letter-spacing--widest: 0.1em;

    --space--auto: auto;
    --space---96: -24rem;
    --space---80: -20rem;
    --space---72: -18rem;
    --space---64: -16rem;
    --space---60: -15rem;
    --space---56: -14rem;
    --space---52: -13rem;
    --space---48: -12rem;
    --space---44: -11rem;
    --space---40: -10rem;
    --space---36: -9rem;
    --space---32: -8rem;
    --space---28: -7rem;
    --space---24: -6rem;
    --space---20: -5rem;
    --space---16: -4rem;
    --space---14: -3.5rem;
    --space---12: -3rem;
    --space---11: -2.75rem;
    --space---10: -2.5rem;
    --space---9: -2.25rem;
    --space---8: -2rem;
    --space---7: -1.75rem;
    --space---6: -1.5rem;
    --space---5: -1.25rem;
    --space---4: -1rem;
    --space---3-5: -0.875rem;
    --space---3: -0.75rem;
    --space---2-5: -0.625rem;
    --space---2: -0.5rem;
    --space---1-5: -0.375rem;
    --space---1: -0.25rem;
    --space---0-5: -0.125rem;
    --space---px: -1px;
    --space--0: 0px;
    --space--px: 1px;
    --space--0-5: 0.125rem;
    --space--1: 0.25rem;
    --space--1-5: 0.375rem;
    --space--2: 0.5rem;
    --space--2-5: 0.625rem;
    --space--3: 0.75rem;
    --space--3-5: 0.875rem;
    --space--4: 1rem;
    --space--5: 1.25rem;
    --space--6: 1.5rem;
    --space--7: 1.75rem;
    --space--8: 2rem;
    --space--9: 2.25rem;
    --space--10: 2.5rem;
    --space--11: 2.75rem;
    --space--12: 3rem;
    --space--14: 3.5rem;
    --space--16: 4rem;
    --space--20: 5rem;
    --space--24: 6rem;
    --space--28: 7rem;
    --space--32: 8rem;
    --space--36: 9rem;
    --space--40: 10rem;
    --space--44: 11rem;
    --space--48: 12rem;
    --space--52: 13rem;
    --space--56: 14rem;
    --space--60: 15rem;
    --space--64: 16rem;
    --space--72: 18rem;
    --space--80: 20rem;
    --space--96: 24rem;

    --border-width--0: 0px;
    --border-width--1: 1px;
    --border-width--2: 2px;
    --border-width--4: 4px;
    --border-width--8: 8px;

    --border-radius--none: 0px;
    --border-radius--sm: 0.125rem;
    --border-radius--base: 0.25rem;
    --border-radius--md: 0.375rem;
    --border-radius--lg: 0.5rem;
    --border-radius--xl: 0.75rem;
    --border-radius--2xl: 1rem;
    --border-radius--3xl: 1.5rem;
    --border-radius--full: 9999px;
    --border-radius--circle: 50%;

    --outline--none: 2px solid transparent;
    --outline--white: 2px dotted white;
    --outline--black: 2px dotted black;

    --box-shadow--none: none;
    --box-shadow--sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --box-shadow--base: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
      0 1px 2px 0 rgba(0, 0, 0, 0.06);
    --box-shadow--md: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --box-shadow--lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --box-shadow--xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    --box-shadow--2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    --box-shadow--inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);

    --stroke-width--0: 0;
    --stroke-width--1: 1;
    --stroke-width--2: 2;

    --opacity--0: 0;
    --opacity--5: 0.05;
    --opacity--10: 0.1;
    --opacity--20: 0.2;
    --opacity--25: 0.25;
    --opacity--30: 0.3;
    --opacity--40: 0.4;
    --opacity--50: 0.5;
    --opacity--60: 0.6;
    --opacity--70: 0.7;
    --opacity--75: 0.75;
    --opacity--80: 0.8;
    --opacity--90: 0.9;
    --opacity--95: 0.95;
    --opacity--100: 1;

    --order--none: 0;
    --order--first: -9999;
    --order--last: 9999;

    --z-index--auto: auto;
    --z-index---1: -1;
    --z-index--0: 0;
    --z-index--10: 10;
    --z-index--20: 20;
    --z-index--30: 30;
    --z-index--40: 40;
    --z-index--50: 50;

    --rotate---180: -180deg;
    --rotate---90: -90deg;
    --rotate---45: -45deg;
    --rotate---12: -12deg;
    --rotate---6: -6deg;
    --rotate---3: -3deg;
    --rotate---2: -2deg;
    --rotate---1: -1deg;
    --rotate--0: 0deg;
    --rotate--1: 1deg;
    --rotate--2: 2deg;
    --rotate--3: 3deg;
    --rotate--6: 6deg;
    --rotate--12: 12deg;
    --rotate--45: 45deg;
    --rotate--90: 90deg;
    --rotate--180: 180deg;

    --scale--0: 0;
    --scale--50: 0.5;
    --scale--75: 0.75;
    --scale--90: 0.9;
    --scale--95: 0.95;
    --scale--100: 1;
    --scale--105: 1.05;
    --scale--110: 1.1;
    --scale--125: 1.25;
    --scale--150: 1.5;

    --skew---12: -12deg;
    --skew---6: -6deg;
    --skew---3: -3deg;
    --skew---2: -2deg;
    --skew---1: -1deg;
    --skew--0: 0deg;
    --skew--1: 1deg;
    --skew--2: 2deg;
    --skew--3: 3deg;
    --skew--6: 6deg;
    --skew--12: 12deg;

    --brightness--0: 0;
    --brightness--50: 0.5;
    --brightness--75: 0.75;
    --brightness--90: 0.9;
    --brightness--95: 0.95;
    --brightness--100: 1;
    --brightness--105: 1.05;
    --brightness--110: 1.1;
    --brightness--125: 1.25;
    --brightness--150: 1.5;
    --brightness--200: 2;

    --contrast--0: 0;
    --contrast--50: 0.5;
    --contrast--75: 0.75;
    --contrast--100: 1;
    --contrast--125: 1.25;
    --contrast--150: 1.5;
    --contrast--200: 2;

    --saturate--0: 0;
    --saturate--50: 0.5;
    --saturate--100: 1;
    --saturate--150: 1.5;
    --saturate--200: 2;

    --blur--none: 0px;
    --blur--sm: 4px;
    --blur--base: 8px;
    --blur--md: 12px;
    --blur--lg: 16px;
    --blur--xl: 24px;
    --blur--2xl: 40px;
    --blur--3xl: 64px;

    --sepia--0: 0;
    --sepia--base: 100%;

    --drop-shadow--none: 0 0 #0000;
    --drop-shadow--sm: 0 1px 1px rgba(0, 0, 0, 0.05);
    --drop-shadow--base: 0 1px 2px rgba(0, 0, 0, 0.1),
      0 1px 1px rgba(0, 0, 0, 0.06);
    --drop-shadow--md: 0 4px 3px rgba(0, 0, 0, 0.07),
      0 2px 2px rgba(0, 0, 0, 0.06);
    --drop-shadow--lg: 0 10px 8px rgba(0, 0, 0, 0.04),
      0 4px 3px rgba(0, 0, 0, 0.1);
    --drop-shadow--xl: 0 20px 13px rgba(0, 0, 0, 0.03),
      0 8px 5px rgba(0, 0, 0, 0.08);
    --drop-shadow--2xl: 0 25px 25px rgba(0, 0, 0, 0.15);

    --transition-property--none: none;
    --transition-property--all: all;
    --transition-property--base: background-color, border-color, color, fill,
      stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    --transition-property--colors: background-color, border-color, color, fill,
      stroke;
    --transition-property--opacity: opacity;
    --transition-property--shadow: box-shadow;
    --transition-property--transform: transform;

    --transition-duration--75: 75ms;
    --transition-duration--100: 100ms;
    --transition-duration--150: 150ms;
    --transition-duration--200: 200ms;
    --transition-duration--300: 300ms;
    --transition-duration--500: 500ms;
    --transition-duration--700: 700ms;
    --transition-duration--1000: 1000ms;

    --transition-timing-function--base: cubic-bezier(0.4, 0, 0.2, 1);
    --transition-timing-function--linear: linear;
    --transition-timing-function--in: cubic-bezier(0.4, 0, 1, 1);
    --transition-timing-function--out: cubic-bezier(0, 0, 0.2, 1);
    --transition-timing-function--in-out: cubic-bezier(0.4, 0, 0.2, 1);

    --animation--none: none;
    --animation--spin: spin 1s linear infinite;
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    --animation--ping: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
    @keyframes ping {
      75%,
      100% {
        transform: scale(2);
        opacity: 0;
      }
    }
    --animation--pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    @keyframes pulse {
      0%,
      100% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
    }
    --animation--bounce: bounce 1s infinite;
    @keyframes bounce {
      0%,
      100% {
        transform: translateY(-25%);
        animationtimingfunction: cubic-bezier(0.8, 0, 1, 1);
      }
      50% {
        transform: translateY(0);
        animationtimingfunction: cubic-bezier(0, 0, 0.2, 1);
      }
    }

    --color--transparent: transparent;
    --color--current: currentColor;

    --color--black: #000000;
    --color--white: #ffffff;

    --color--gray--blue--50: #f8fafc;
    --color--gray--blue--100: #f1f5f9;
    --color--gray--blue--200: #e2e8f0;
    --color--gray--blue--300: #cbd5e1;
    --color--gray--blue--400: #94a3b8;
    --color--gray--blue--500: #64748b;
    --color--gray--blue--600: #475569;
    --color--gray--blue--700: #334155;
    --color--gray--blue--800: #1e293b;
    --color--gray--blue--900: #0f172a;

    --color--gray--cool--50: #f9fafb;
    --color--gray--cool--100: #f3f4f6;
    --color--gray--cool--200: #e5e7eb;
    --color--gray--cool--300: #d1d5db;
    --color--gray--cool--400: #9ca3af;
    --color--gray--cool--500: #6b7280;
    --color--gray--cool--600: #4b5563;
    --color--gray--cool--700: #374151;
    --color--gray--cool--800: #1f2937;
    --color--gray--cool--900: #111827;

    --color--gray--medium--50: #fafafa;
    --color--gray--medium--100: #f4f4f5;
    --color--gray--medium--200: #e4e4e7;
    --color--gray--medium--300: #d4d4d8;
    --color--gray--medium--400: #a1a1aa;
    --color--gray--medium--500: #71717a;
    --color--gray--medium--600: #52525b;
    --color--gray--medium--700: #3f3f46;
    --color--gray--medium--800: #27272a;
    --color--gray--medium--900: #18181b;

    --color--gray--true--50: #fafafa;
    --color--gray--true--100: #f5f5f5;
    --color--gray--true--200: #e5e5e5;
    --color--gray--true--300: #d4d4d4;
    --color--gray--true--400: #a3a3a3;
    --color--gray--true--500: #737373;
    --color--gray--true--600: #525252;
    --color--gray--true--700: #404040;
    --color--gray--true--800: #262626;
    --color--gray--true--900: #171717;

    --color--gray--warm--50: #fafaf9;
    --color--gray--warm--100: #f5f5f4;
    --color--gray--warm--200: #e7e5e4;
    --color--gray--warm--300: #d6d3d1;
    --color--gray--warm--400: #a8a29e;
    --color--gray--warm--500: #78716c;
    --color--gray--warm--600: #57534e;
    --color--gray--warm--700: #44403c;
    --color--gray--warm--800: #292524;
    --color--gray--warm--900: #1c1917;

    --color--red--50: #fef2f2;
    --color--red--100: #fee2e2;
    --color--red--200: #fecaca;
    --color--red--300: #fca5a5;
    --color--red--400: #f87171;
    --color--red--500: #ef4444;
    --color--red--600: #dc2626;
    --color--red--700: #b91c1c;
    --color--red--800: #991b1b;
    --color--red--900: #7f1d1d;

    --color--orange--50: #fff7ed;
    --color--orange--100: #ffedd5;
    --color--orange--200: #fed7aa;
    --color--orange--300: #fdba74;
    --color--orange--400: #fb923c;
    --color--orange--500: #f97316;
    --color--orange--600: #ea580c;
    --color--orange--700: #c2410c;
    --color--orange--800: #9a3412;
    --color--orange--900: #7c2d12;

    --color--amber--50: #fffbeb;
    --color--amber--100: #fef3c7;
    --color--amber--200: #fde68a;
    --color--amber--300: #fcd34d;
    --color--amber--400: #fbbf24;
    --color--amber--500: #f59e0b;
    --color--amber--600: #d97706;
    --color--amber--700: #b45309;
    --color--amber--800: #92400e;
    --color--amber--900: #78350f;

    --color--yellow--50: #fefce8;
    --color--yellow--100: #fef9c3;
    --color--yellow--200: #fef08a;
    --color--yellow--300: #fde047;
    --color--yellow--400: #facc15;
    --color--yellow--500: #eab308;
    --color--yellow--600: #ca8a04;
    --color--yellow--700: #a16207;
    --color--yellow--800: #854d0e;
    --color--yellow--900: #713f12;

    --color--lime--50: #f7fee7;
    --color--lime--100: #ecfccb;
    --color--lime--200: #d9f99d;
    --color--lime--300: #bef264;
    --color--lime--400: #a3e635;
    --color--lime--500: #84cc16;
    --color--lime--600: #65a30d;
    --color--lime--700: #4d7c0f;
    --color--lime--800: #3f6212;
    --color--lime--900: #365314;

    --color--green--50: #f0fdf4;
    --color--green--100: #dcfce7;
    --color--green--200: #bbf7d0;
    --color--green--300: #86efac;
    --color--green--400: #4ade80;
    --color--green--500: #22c55e;
    --color--green--600: #16a34a;
    --color--green--700: #15803d;
    --color--green--800: #166534;
    --color--green--900: #14532d;

    --color--emerald--50: #ecfdf5;
    --color--emerald--100: #d1fae5;
    --color--emerald--200: #a7f3d0;
    --color--emerald--300: #6ee7b7;
    --color--emerald--400: #34d399;
    --color--emerald--500: #10b981;
    --color--emerald--600: #059669;
    --color--emerald--700: #047857;
    --color--emerald--800: #065f46;
    --color--emerald--900: #064e3b;

    --color--teal--50: #f0fdfa;
    --color--teal--100: #ccfbf1;
    --color--teal--200: #99f6e4;
    --color--teal--300: #5eead4;
    --color--teal--400: #2dd4bf;
    --color--teal--500: #14b8a6;
    --color--teal--600: #0d9488;
    --color--teal--700: #0f766e;
    --color--teal--800: #115e59;
    --color--teal--900: #134e4a;

    --color--cyan--50: #ecfeff;
    --color--cyan--100: #cffafe;
    --color--cyan--200: #a5f3fc;
    --color--cyan--300: #67e8f9;
    --color--cyan--400: #22d3ee;
    --color--cyan--500: #06b6d4;
    --color--cyan--600: #0891b2;
    --color--cyan--700: #0e7490;
    --color--cyan--800: #155e75;
    --color--cyan--900: #164e63;

    --color--sky--50: #f0f9ff;
    --color--sky--100: #e0f2fe;
    --color--sky--200: #bae6fd;
    --color--sky--300: #7dd3fc;
    --color--sky--400: #38bdf8;
    --color--sky--500: #0ea5e9;
    --color--sky--600: #0284c7;
    --color--sky--700: #0369a1;
    --color--sky--800: #075985;
    --color--sky--900: #0c4a6e;

    --color--blue--50: #eff6ff;
    --color--blue--100: #dbeafe;
    --color--blue--200: #bfdbfe;
    --color--blue--300: #93c5fd;
    --color--blue--400: #60a5fa;
    --color--blue--500: #3b82f6;
    --color--blue--600: #2563eb;
    --color--blue--700: #1d4ed8;
    --color--blue--800: #1e40af;
    --color--blue--900: #1e3a8a;

    --color--indigo--50: #eef2ff;
    --color--indigo--100: #e0e7ff;
    --color--indigo--200: #c7d2fe;
    --color--indigo--300: #a5b4fc;
    --color--indigo--400: #818cf8;
    --color--indigo--500: #6366f1;
    --color--indigo--600: #4f46e5;
    --color--indigo--700: #4338ca;
    --color--indigo--800: #3730a3;
    --color--indigo--900: #312e81;

    --color--violet--50: #f5f3ff;
    --color--violet--100: #ede9fe;
    --color--violet--200: #ddd6fe;
    --color--violet--300: #c4b5fd;
    --color--violet--400: #a78bfa;
    --color--violet--500: #8b5cf6;
    --color--violet--600: #7c3aed;
    --color--violet--700: #6d28d9;
    --color--violet--800: #5b21b6;
    --color--violet--900: #4c1d95;

    --color--purple--50: #faf5ff;
    --color--purple--100: #f3e8ff;
    --color--purple--200: #e9d5ff;
    --color--purple--300: #d8b4fe;
    --color--purple--400: #c084fc;
    --color--purple--500: #a855f7;
    --color--purple--600: #9333ea;
    --color--purple--700: #7e22ce;
    --color--purple--800: #6b21a8;
    --color--purple--900: #581c87;

    --color--fuchsia--50: #fdf4ff;
    --color--fuchsia--100: #fae8ff;
    --color--fuchsia--200: #f5d0fe;
    --color--fuchsia--300: #f0abfc;
    --color--fuchsia--400: #e879f9;
    --color--fuchsia--500: #d946ef;
    --color--fuchsia--600: #c026d3;
    --color--fuchsia--700: #a21caf;
    --color--fuchsia--800: #86198f;
    --color--fuchsia--900: #701a75;

    --color--pink--50: #fdf2f8;
    --color--pink--100: #fce7f3;
    --color--pink--200: #fbcfe8;
    --color--pink--300: #f9a8d4;
    --color--pink--400: #f472b6;
    --color--pink--500: #ec4899;
    --color--pink--600: #db2777;
    --color--pink--700: #be185d;
    --color--pink--800: #9d174d;
    --color--pink--900: #831843;

    --color--rose--50: #fff1f2;
    --color--rose--100: #ffe4e6;
    --color--rose--200: #fecdd3;
    --color--rose--300: #fda4af;
    --color--rose--400: #fb7185;
    --color--rose--500: #f43f5e;
    --color--rose--600: #e11d48;
    --color--rose--700: #be123c;
    --color--rose--800: #9f1239;
    --color--rose--900: #881337;
  }

  /*
    https://github.com/twbs/bootstrap/blob/7d9adb702d96f9eb4706afb12cd73c9654979575/scss/mixins/_visually-hidden.scss
    https://tailwindcss.com/docs/screen-readers
    https://www.a11yproject.com/posts/2013-01-11-how-to-hide-content/
    https://hugogiraudel.com/2016/10/13/css-hide-and-seek/
    https://github.com/twbs/bootstrap/issues/25686
    https://accessibility.18f.gov/hidden-content/
  */
  .visually-hidden:not(:focus):not(:focus-within):not(:active) {
    width: 1px;
    height: 1px;
    padding: 0;
    border: 0;
    margin: -1px;
    position: absolute;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }
`;
