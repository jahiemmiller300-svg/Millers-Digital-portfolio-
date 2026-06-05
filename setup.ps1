# Miller's Digital Portfolio - Setup Script (PowerShell)

Write-Host ""
Write-Host "╔════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║   Miller's Digital - Premium Web Portfolio Setup           ║" -ForegroundColor Cyan
Write-Host "║   Website Building & AI Receptionist Solutions             ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
try {
    $nodeVersion = node --version 2>$null
    Write-Host "✓ Node.js version: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js is not installed or not in PATH." -ForegroundColor Red
    Write-Host "   Please install Node.js from https://nodejs.org/" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""
Write-Host "✓ Working directory: $(Get-Location)" -ForegroundColor Green
Write-Host ""

# Install dependencies
Write-Host "Installing dependencies..." -ForegroundColor Yellow
Write-Host ""
npm install

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "❌ Dependency installation failed." -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""
Write-Host "✓ Dependencies installed successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "╔════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║                    Next Steps                              ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Configure your admin password:" -ForegroundColor Yellow
Write-Host "   - Edit: .env.local" -ForegroundColor Gray
Write-Host "   - Change: NEXT_PUBLIC_ADMIN_PASSWORD=admin123" -ForegroundColor Gray
Write-Host ""
Write-Host "2. Add canvas animation frames:" -ForegroundColor Yellow
Write-Host "   - Create 120 PNG files" -ForegroundColor Gray
Write-Host "   - Location: public/frames/" -ForegroundColor Gray
Write-Host "   - Name them: frame_0001.png to frame_0120.png" -ForegroundColor Gray
Write-Host ""
Write-Host "3. Update contact information:" -ForegroundColor Yellow
Write-Host "   - File: components/contact-section.tsx" -ForegroundColor Gray
Write-Host "   - Update phone, email, WhatsApp, Instagram" -ForegroundColor Gray
Write-Host ""
Write-Host "4. Start development server:" -ForegroundColor Yellow
Write-Host "   - Run: npm run dev" -ForegroundColor Gray
Write-Host "   - Main site: http://localhost:3000" -ForegroundColor Gray
Write-Host "   - Admin: http://localhost:3000/admin" -ForegroundColor Gray
Write-Host ""
Write-Host "5. Build for production:" -ForegroundColor Yellow
Write-Host "   - Run: npm run build" -ForegroundColor Gray
Write-Host "   - Then: npm start" -ForegroundColor Gray
Write-Host ""
Write-Host "╔════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║  For detailed info, see: README.md                         ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""
Read-Host "Press Enter to exit"
