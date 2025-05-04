'use client';

import { useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

/**
 * Component to handle redirection for GitHub Pages SPA setup.
 * Reads the 'p' query parameter (set by 404.html) on the root page
 * and redirects the user to the intended path using Next.js router.
 */
export function GithubPagesRedirect() {
  const router = useRouter();
  const pathname = usePathname(); // Path relative to basePath (e.g., '/' or '/about')
  const searchParams = useSearchParams();

  useEffect(() => {
    // Only run this logic on the client-side
    if (typeof window === 'undefined') {
      return;
    }

    const redirectPath = searchParams?.get('p');

    // Check if we are on the root path relative to the basePath
    // (which is '/' according to usePathname) AND if the 'p' query param exists.
    // This ensures we only redirect when the 404.html script has triggered.
    if (pathname === '/' && redirectPath) {
      // Use replace to avoid adding the intermediate "?p=..." URL to the browser history.
      // router.replace preserves the basePath automatically.
      router.replace(redirectPath);
    }
  }, [pathname, searchParams, router]); // Depend on these values

  return null; // This component does not render anything visible
}
