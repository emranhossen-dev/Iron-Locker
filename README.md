# Install# IronLocker 🛡️

**IronLocker** is a lightweight, high-security web-based tool designed for encrypting and managing sensitive files directly in your browser. By utilizing the Web Crypto API, it ensures that your data is processed locally, providing industry-standard AES-256-GCM encryption without ever sending your unencrypted files to a server.

**🌐 Live Demo:** [ironlocker.vercel.app](https://ironlocker.vercel.app)

---

## 🚀 Key Features

*   **Client-Side Processing:** All encryption and decryption happen in your browser. Your master password and raw data never leave your device.
*   **Military-Grade Security:** Uses AES-256-GCM for authenticated encryption, ensuring both confidentiality and data integrity.
*   **Zero-Knowledge Architecture:** No accounts, no databases, and no tracking. You are the only one with access to your keys.
*   **Instant Access:** No installation required. Works on any modern browser via the Vercel-hosted interface.
*   **Modern Tech Stack:** Built with React/Next.js for a fast, responsive, and intuitive user experience.

---

## 📖 How It Works

### 1. Encrypting Files
1. Navigate to [ironlocker.vercel.app](https://ironlocker.vercel.app).
2. Upload the file you wish to secure.
3. Enter a strong master password.
4. Download the resulting `.iron` (encrypted) file.

### 2. Decrypting Files
1. Upload your `.iron` file to the portal.
2. Enter the original master password used during encryption.
3. The browser will instantly decrypt the file for download.

---

## 🔒 Security Specifications

IronLocker leverages the browser's native cryptographic capabilities to ensure top-tier protection:

| Component | Implementation |
| :--- | :--- |
| **Cipher** | AES-256-GCM |
| **Key Derivation (KDF)** | PBKDF2 / Argon2 (WebAssembly) |
| **Environment** | Web Crypto API (SubtleCrypto) |
| **Hosting** | Vercel (Edge Optimized) |

> [!CAUTION]
> **Important:** IronLocker does not store your passwords. If you forget your master password, your encrypted files cannot be recovered.

---

 Run the development server
npm run dev
