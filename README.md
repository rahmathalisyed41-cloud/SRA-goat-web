# SRA Goat for Sale Hyderabad - Web Platform

## Production-Ready Marketplace Web Dashboard

A complete web-based admin dashboard and user portal for the SRA Goat for Sale marketplace.

### Features

- **Admin Master Control Center** - User management, listing moderation, feature controls
- **User Dashboard** - Profile management, listing creation, activity tracking
- **Real-time Analytics** - Live statistics, user metrics, platform health
- **Listing Management** - Create, edit, publish, and moderate listings
- **Media Management** - Upload, optimize, and manage photos and videos
- **Search & Filters** - Advanced search with real-time filtering
- **Reports & Monitoring** - User reports, admin logs, audit trails
- **Multi-language Support** - English, Hindi, Urdu, Telugu

### Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Backend**: Firebase (Firestore, Authentication, Cloud Storage)
- **Build Tool**: Vite

### Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── stores/             # Zustand state management
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── types/              # TypeScript types
├── styles/             # Global styles
└── App.tsx            # Main app component
```

### Getting Started

#### Prerequisites
- Node.js 18+
- npm or yarn
- Firebase project configured

#### Installation

```bash
# Install dependencies
npm install

# Create .env.local with Firebase config
cp .env.example .env.local

# Run development server
npm run dev

# Build for production
npm run build
```

### Environment Variables

Create `.env.local`:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### Firebase Security Rules

See `firebase/firestore.rules` and `firebase/storage.rules` for comprehensive security configuration.

### Admin Features

- User management (restrict, suspend, restore accounts)
- Listing moderation and removal
- Feature flag control system
- Statistics and analytics dashboard
- Audit logs and admin activity tracking
- Advertisement and sponsored content management

### Performance & Scalability

Optimized for approximately 100,000 simultaneous users:

- Firestore pagination and query optimization
- Lazy loading and code splitting
- Image and video optimization
- Real-time listener optimization
- Database indexing strategy

### License

Private - SRA Goat for Sale

### Support

For issues and feature requests, contact the development team.
