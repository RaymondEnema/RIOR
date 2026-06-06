# RIOR - Hotel Management System

**RIOR** is a comprehensive, role-based hotel management platform designed to streamline operations across all hotel departments with beautiful animations and modern UI.

## 🏨 Features

### 17+ Specialized Modules
- **Front Office** - Reservations, Check-in/out, Guest Management
- **Admin** - System Configuration, User Management, Integrations
- **Housekeeping** - Room Status, Task Scheduling, Linen Management
- **Maintenance** - Work Orders, Preventive Maintenance, Asset Tracking
- **Cashier** - Billing, Payment Processing, Cash Management
- **Accountant** - General Ledger, Revenue Management, Payroll
- **HR** - Employee Management, Attendance, Training
- **Security** - Access Control, Incident Reporting
- **Night Auditor** - End-of-day Closing, Reconciliation
- **Revenue Manager** - Dynamic Pricing, Demand Forecasting
- **Sales & Marketing** - Corporate Accounts, Group Bookings
- **Guest Relations** - Loyalty Programs, CRM
- **F&B Manager** - Restaurant, Bar, Room Service
- **Spa & Recreation** - Appointments, Facility Booking
- **Events & Banqueting** - Conference Rooms, Weddings
- **Procurement** - Inventory, Purchase Orders
- **IT Support** - Helpdesk, System Maintenance

### Key Capabilities
✨ Beautiful animated UI with role-based dashboards
🔐 Multi-level authentication & authorization
📊 Real-time analytics and reporting
💰 Revenue & yield management
📱 Mobile-responsive design
🌍 Multi-property support
🔄 Third-party integrations
📝 Comprehensive audit trails

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript + Tailwind CSS + Framer Motion + Vite
- **Backend**: Node.js + Express + TypeScript
- **Database**: PostgreSQL
- **Cache**: Redis
- **Real-time**: Socket.IO
- **Authentication**: JWT
- **API**: RESTful

## 📦 Project Structure

```
RIOR/
├── frontend/                 # React SPA
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/            # Page components by module
│   │   ├── store/            # Zustand state management
│   │   ├── services/         # API client
│   │   ├── utils/            # Helper functions
│   │   └── App.tsx           # Main app component
│   └── public/
├── backend/                  # Express API
│   ├── src/
│   │   ├── routes/           # API endpoints
│   │   ├── middleware/       # Auth, error handling
│   │   ├── models/           # Database models
│   │   ├── services/         # Business logic
│   │   ├── utils/            # Logger, helpers
│   │   └── server.ts         # Entry point
│   ├── migrations/           # Database migrations
│   └── seeds/                # Sample data
├── docker-compose.yml        # Development environment
└── docs/                     # Documentation
```

## 🎬 Getting Started

### Prerequisites
- Node.js 16+
- PostgreSQL 12+
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/RaymondEnema/RIOR.git
cd RIOR

# Install dependencies
npm install

# Setup environment
cp .env.example .env

# Start with Docker
docker-compose up

# OR run locally
npm run dev
```

### Default Login
- **Email**: admin@rior.hotel
- **Password**: admin123

## 🌐 Available Routes

### Frontend (Port 5173)
- `/` - Dashboard
- `/reservations` - Reservation Management
- `/guests` - Guest Database
- `/rooms` - Room Management
- `/housekeeping` - Housekeeping Tasks
- `/maintenance` - Maintenance Work Orders
- `/cashier` - Payment Processing
- `/accounting` - Financial Management
- `/hr` - Human Resources
- `/revenue` - Revenue Management
- `/reports` - Analytics & Reports
- `/admin` - System Administration

### API (Port 3000)
- `/api/health` - Health check
- `/api/auth/*` - Authentication
- `/api/reservations/*` - Reservation CRUD
- `/api/guests/*` - Guest Management
- `/api/rooms/*` - Room Management
- `/api/housekeeping/*` - Housekeeping Tasks
- `/api/maintenance/*` - Work Orders
- `/api/cashier/*` - Payment Processing
- `/api/accounting/*` - Financial Data
- `/api/hr/*` - Employee Data
- `/api/revenue/*` - Revenue Analytics
- `/api/reports/*` - Business Reports

## 👥 Role-Based Access

RIOR supports 20+ roles with granular permissions:
- **Super Admin** - Full system control
- **Admin** - Hotel configuration & user management
- **Front Office Manager** - Guest operations
- **Receptionist** - Check-in/out
- **Housekeeper** - Room cleaning
- **Maintenance Tech** - Repairs & maintenance
- **Cashier** - Payment processing
- **Accountant** - Financial management
- **HR Manager** - Employee management
- **Security Officer** - Access control
- **Revenue Manager** - Pricing & forecasting
- **Sales Manager** - Corporate accounts
- **Guest Relations** - CRM & loyalty
- **F&B Manager** - Food & beverage
- **Chef** - Kitchen operations
- **Spa Therapist** - Spa bookings
- **Event Coordinator** - Banqueting
- **Procurement Officer** - Inventory
- **IT Support** - System maintenance
- **Night Auditor** - End-of-day closing

## 📊 Database Models

- Users & Roles
- Guests & Profiles
- Reservations & Bookings
- Rooms & Room Types
- Housekeeping Tasks
- Work Orders
- Transactions & Payments
- Employees & Attendance
- Departments
- Inventory & Stock
- Reports & Analytics

## 🔐 Security Features

- JWT-based authentication
- Role-based access control (RBAC)
- Password hashing with bcrypt
- Rate limiting
- CORS protection
- Request validation
- Audit logging
- Data encryption

## 📚 API Documentation

See [API.md](docs/API.md) for detailed endpoint documentation.

## 🐳 Docker

```bash
# Build images
docker-compose build

# Start services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

## 🧪 Testing

```bash
npm run test              # Run all tests
npm run test:backend      # Backend tests
npm run test:frontend     # Frontend tests
npm run test:watch        # Watch mode
```

## 📝 Development

```bash
npm run dev              # Start dev server
npm run lint             # Run linter
npm run lint:fix         # Fix lint issues
npm run build            # Build for production
```

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
npm run build:frontend
# Deploy dist/ folder
```

### Backend (Heroku/Railway)
```bash
npm run build:backend
npm start
```

## 📞 Support

For issues and questions:
1. Check existing documentation
2. Review API logs
3. Create an issue on GitHub
4. Contact support team

## 📄 License

Proprietary - All Rights Reserved © 2024

## 👨‍💻 Author

**Raymond Enema**  
RIOR Development Team

---

**RIOR** - Transforming Hotel Management with Technology ✨

Built with ❤️ for hoteliers worldwide.
