# 🍌 Is My Seed Phrase Safe?

An educational website designed to teach cryptocurrency users about the critical importance of seed phrase security.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Security Education](https://img.shields.io/badge/Purpose-Security%20Education-green)](https://ismyseedphrasesafe.com)
[![Made by Banana Intelligence](https://img.shields.io/badge/Made%20by-Banana%20Intelligence-yellow)](https://bananaintelligence.ai)

## 🎯 Purpose

This project serves as an interactive educational tool that demonstrates why users should **NEVER** enter their cryptocurrency seed phrases on any website. When users attempt to enter text, they immediately receive a comprehensive security warning explaining the risks.

## 🔒 Key Features

- **Immediate Security Education**: Triggers warning as soon as users start typing
- **No Data Collection**: Runs entirely client-side, no data is stored or transmitted
- **Comprehensive Security Lessons**: Explains what seed phrases are, what they allow, and best practices
- **SEO Optimized**: Helps users find critical security information when searching for "seed phrase checker" or similar terms
- **Mobile Responsive**: Works on all devices to reach the maximum audience

## 🚨 Important Security Notice

**This is an EDUCATIONAL website only.** It does not actually check seed phrases or perform any blockchain operations. The entire purpose is to intercept users who might be searching for dangerous "seed phrase checkers" and educate them about security risks.

## 📁 Project Structure

```
seed-phrase-check/
├── index.html          # Main HTML file with structured data and SEO optimization
├── script.js           # JavaScript for educational warning system
├── style.css           # Styling with crypto/security theme
├── robots.txt          # Search engine directives
└── sitemap.xml         # Sitemap for search engines
```

## 🛠️ Technical Details

### Technologies Used
- **HTML5** with semantic markup and structured data (Schema.org)
- **Vanilla JavaScript** for zero dependencies and maximum performance
- **CSS3** with animations and responsive design
- **SEO Best Practices** including meta tags, Open Graph, and Twitter Cards

### Key Components

1. **Educational Trigger System** (script.js)
   - Monitors input field for any typing or paste events
   - Immediately clears input and shows security warning
   - Prevents any actual seed phrase submission

2. **SEO & Discovery** (index.html)
   - Optimized for search terms like "seed phrase checker", "is my seed phrase safe"
   - Structured data for better search result display
   - Comprehensive FAQ schema for rich snippets

3. **Visual Design** (style.css)
   - Crypto-themed dark interface
   - Attention-grabbing animations for warnings
   - Mobile-first responsive design

## 🚀 Deployment

### Local Development
```bash
# Clone the repository
git clone [repository-url]
cd seed-phrase-check

# Open in browser (no build process needed)
open index.html
```

### Production Deployment
The site can be deployed to any static hosting service:
- **Netlify** (currently deployed) - Connected to GitHub for automatic deployments
- GitHub Pages
- Vercel
- Traditional web hosting

**Current Deployment**: The site is deployed on Netlify with automatic deployments from the `main` branch. Any push to the main branch will trigger a new deployment.

No server-side components or build process required.

## 📈 Impact & Analytics

Consider adding privacy-respecting analytics (like Plausible or Umami) to track:
- Number of users educated
- Common search terms that lead to the site
- Geographic distribution of visitors

## 🤝 Contributing

Contributions to improve the educational content or reach more users are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add new educational content'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Create a Pull Request

## 📜 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2025 Banana Intelligence, LLC

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 👥 Credits

Created by [Banana Intelligence](https://bananaintelligence.ai)
- Twitter: [@n8peace](https://twitter.com/n8peace)
- GitHub: [@n8peace](https://github.com/n8peace)

## 🔗 Related Resources

- [Ledger: How to Protect Your Seed Phrase](https://support.ledger.com/article/how-to-protect-your-secret-recovery-phrase-from-natural-disasters)
- [Trezor: Recovery Seed](https://support.trezor.io/mnemonic-seed/)
- [MetaMask Support](https://support.metamask.io)

---

**Remember**: Your seed phrase is your crypto. Never share it. Never enter it online. Stay safe! 🍌🔒