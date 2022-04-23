import { EmailAuthProvider, getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const uiConfig = {
  signInFlow: "popup",
  signInOptions: [EmailAuthProvider.PROVIDER_ID],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
  signInSuccessUrl: "/",
};

export const SignInForm: React.FC = () => {
  const [renderAuth, setRenderAuth] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRenderAuth(true);
    }
  }, []);

  return (
    <div>
      {renderAuth ? (
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={getAuth()} />
      ) : null}
    </div>
  );
};
