# 🚀 Monta - Modern Fintech Application

Monta is a premium, production-level fintech web application built with **React**, **Vite**, and **Tailwind CSS**. It features a sleek, minimalist aesthetic inspired by industry leaders like Stripe, Paystack, and Lenco, specifically tailored for the Nigerian fintech landscape.

## ✨ Key Features

### 🏦 Sophisticated Onboarding (KYC)
- **Multi-Step Wizards**: Smooth, animated form flows for both **Individual** and **Corporate** account opening.
- **Dynamic Proprietor Management**: Add/remove directors and officers on the fly for business accounts.
- **Advanced Verification**: 
  - BVN & NIN validation UI.
  - Interactive **Signature Pad** for mandates.
  - **Simulated AI Facial Verification** with real-time feedback animations.
  - File upload system for utility bills and CAC documents.

### 📊 Professional Banking Dashboard
- **Interactive Data Visualizations**: Real-time Cash Flow charts (Inflow vs. Outflow) powered by **Recharts**.
- **Test Mode Toggle**: Industry-standard environment switching for simulating developer and live states.
- **Multi-Currency Wallets**: Manage NGN and USD balances with distinct visual identifiers.
- **Rich Data Grids**: Comprehensive transaction history with status tracking and detailed reference management.
- **Global Search & Notifications**: Accessible top-tier navigation for rapid action.

### 🎨 Design & UX
- **Fintech Aesthetic**: Dark/Light mode contrast using a custom-tuned `Inter` typography system.
- **Smooth Animations**: Page transitions and element micro-interactions powered by **Framer Motion**.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [Recharts](https://recharts.org/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Utilities**: `tailwind-merge`, `clsx`, `react-signature-canvas`

## 🚀 Getting Started

### Prerequisites
- Node.js (Latest Stable)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Sammy24083/monta-project.git
   cd monta-project
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

The application will typically be available at `http://localhost:5173` (or `http://localhost:5174` if the first port is busy).

## 📁 Project Structure

```bash
src/
├── components/
│   ├── layout/     # Navigation, Footer, Dashboard Shell
│   └── ui/         # Reusable atomic buttons, inputs, modals
├── pages/
│   ├── Auth/       # Login and onboarding entry
│   ├── Dashboard/  # Core overview and transaction grids
│   └── Verification/ # KYC wizards (Individual & Corporate)
├── utils/          # Tailwind merge and formatting helpers
└── App.jsx         # Routing and global state
```

## 📝 License
Distributed under the MIT License.

---
Built with ❤️ by [Sammy](https://github.com/Sammy24083)
