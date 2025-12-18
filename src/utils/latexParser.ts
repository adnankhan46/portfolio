import katex from 'katex';
import 'katex/dist/katex.min.css';

/**
 * Parses LaTeX string to HTML using KaTeX
 * @param latex LaTeX string to parse
 * @returns HTML string (safe to render via dangerouslySetInnerHTML)
 */
export function parseLatexToHTML(latex: string): string {
  try {
    return katex.renderToString(latex, {
      throwOnError: false,
      displayMode: true,
    });
  } catch (error) {
    console.error('KaTeX render error:', error);
    return `<span style="color: red;">Invalid LaTeX</span>`;
  }
}

