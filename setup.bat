@echo off
REM Miller's Digital Portfolio - Setup Script

echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║   Miller's Digital - Premium Web Portfolio Setup           ║
echo ║   Website Building & AI Receptionist Solutions             ║
echo ╚════════════════════════════════════════════════════════════╝
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed or not in PATH.
    echo    Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo ✓ Node.js version:
node --version
echo.

REM Navigate to project directory
cd /d "%~dp0"
echo ✓ Working directory: %CD%
echo.

REM Install dependencies
echo Installing dependencies...
echo.
call npm install

if %errorlevel% neq 0 (
    echo ❌ Dependency installation failed.
    pause
    exit /b 1
)

echo.
echo ✓ Dependencies installed successfully!
echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║                    Next Steps                              ║
echo ╚════════════════════════════════════════════════════════════╝
echo.
echo 1. Configure your admin password:
echo    - Edit: .env.local
echo    - Change: NEXT_PUBLIC_ADMIN_PASSWORD=admin123
echo.
echo 2. Add canvas animation frames:
echo    - Create 120 PNG files
echo    - Location: public/frames/
echo    - Name them: frame_0001.png to frame_0120.png
echo.
echo 3. Update contact information:
echo    - File: components/contact-section.tsx
echo    - Update phone, email, WhatsApp, Instagram
echo.
echo 4. Start development server:
echo    - Run: npm run dev
echo    - Main site: http://localhost:3000
echo    - Admin: http://localhost:3000/admin
echo.
echo 5. Build for production:
echo    - Run: npm run build
echo    - Then: npm start
echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║  For detailed info, see: README.md                         ║
echo ╚════════════════════════════════════════════════════════════╝
echo.
pause
