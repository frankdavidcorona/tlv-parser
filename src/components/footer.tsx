import Link from 'next/link';
import { Github, Star, GitFork, Heart, Code, AlertCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 mt-auto text-center text-sm text-muted-foreground w-full px-4">
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3">
          <Link
            href="https://github.com/frankdavidcorona/tlv-parser"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </Link>

          <Link
            href="https://github.com/frankdavidcorona/tlv-parser/stargazers"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Star className="h-4 w-4" />
            <span>Star</span>
          </Link>

          <Link
            href="https://github.com/frankdavidcorona/tlv-parser/fork"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <GitFork className="h-4 w-4" />
            <span>Fork</span>
          </Link>

          <Link
            href="https://github.com/frankdavidcorona/tlv-parser/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <AlertCircle className="h-4 w-4" />
            <span>Issues</span>
          </Link>

          <Link
            href="https://github.com/frankdavidcorona/tlv-parser/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Code className="h-4 w-4" />
            <span>v0.1.0</span>
          </Link>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-2">
          <span>Built with</span>
          <Heart className="h-3 w-3 text-red-500" />
          <span>by</span>
          <Link
            href="https://github.com/frankdavidcorona"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Frank Corona
          </Link>
        </div>

        <div className="text-xs">
          <span>Powered by Next.js, shadcn/ui, and EMV tag database</span>
        </div>
      </div>
    </footer>
  );
}
