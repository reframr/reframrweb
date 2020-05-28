export function signIn() {
    userSession.redirectToSignIn();
  }
  
  function doMainActionWhenUserIsSignedIn() {
    location.href = '/app';
  }
  
  window.addEventListener('load', (event) => {
    if (userSession.isUserSignedIn()) {
      doMainActionWhenUserIsSignedIn();
    } else if ((userSession.isSignInPending())) {
      userSession.handlePendingSignIn().then(function() {
        doMainActionWhenUserIsSignedIn();
      });
    }
  });