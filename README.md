# E D T R

A modern, web-based code editor built with Next.js 16 and CodeMirror 6.

## ✨ Features

- 🚀 **Modern Stack**: Built with Next.js 16 (App Router), React 19, and TypeScript
- 📝 **Powerful Editor**: CodeMirror 6 with JavaScript/TypeScript support
- 🎨 **Styled with Tailwind CSS**: Utility-first CSS framework
- ⚡ **Fast Development**: Hot module replacement with Turbopack
- 🔍 **Type-Safe**: Full TypeScript support with strict type checking
- 🎯 **Code Quality**: ESLint configured with custom rules
- 📦 **Efficient Package Management**: Uses pnpm for fast, disk-space efficient installs

## 🚀 Getting Started

### Prerequisites

- Node.js >= 24.x
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd edtr
```

2. Install dependencies:

```bash
pnpm install
```

3. Create environment variables:

```bash
cp .env.example .env.local
```

4. Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the editor.

## 📜 Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint errors automatically
- `pnpm type-check` - Run TypeScript type checking
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting
- `pnpm analyze` - Analyze bundle size

## 🏗️ Project Structure

```
edtr/
├── app/
│   ├── components/      # React components
│   │   ├── CodeEditor.tsx
│   │   ├── Layout.tsx
│   │   └── index.tsx
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── public/              # Static assets
├── .env.example         # Environment variables template
├── eslint.config.mjs    # ESLint configuration
├── next.config.ts       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── package.json         # Dependencies and scripts
```

## 🔧 Configuration

### CodeEditor Component

The `CodeEditor` component accepts the following props:

```typescript
interface CodeEditorProps {
  value?: string; // Editor content
  onChange?: (value: string) => void; // Change handler
  height?: string; // Editor height (default: "100vh")
  placeholder?: string; // Placeholder text
  readOnly?: boolean; // Read-only mode
}
```

### Environment Variables

See `.env.example` for available environment variables.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Editor**: [CodeMirror 6](https://codemirror.net/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Linting**: [ESLint](https://eslint.org/)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org)
- Powered by [CodeMirror](https://codemirror.net)
- Styled with [Tailwind CSS](https://tailwindcss.com)

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [CodeMirror Documentation](https://codemirror.net/docs/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🚀 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/edtr)
