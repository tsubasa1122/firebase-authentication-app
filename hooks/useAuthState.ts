import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

/**
 * useAuthState フックの戻り値の型。
 */
export type AuthState = {
  isSignedIn: boolean;
  isLoading: boolean;
  userId: string | undefined;
  userName: string | undefined;
  idToken: string | undefined;
};

/**
 * useAuthState が返す初期値。
 * Next.js のサーバーサイドレンダリング時もこの値になる。
 */
const INITIAL_AUTH_STATE: AuthState = {
  isSignedIn: false,
  isLoading: true,
  userId: undefined,
  userName: undefined,
  idToken: undefined,
};

/**
 * ユーザーのサインイン状態を取得するためのカスタムフック。
 */
export const useAuthState = (): AuthState => {
  const [authState, setAuthState] = useState(INITIAL_AUTH_STATE);

  // サインイン状態の変化を監視する
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), async (user) => {
      if (user) {
        const toekn = await user.getIdToken();

        setAuthState({
          isSignedIn: true,
          isLoading: false,
          userId: user.uid,
          userName: user.displayName || undefined,
          idToken: toekn,
        });
      } else {
        setAuthState({ ...INITIAL_AUTH_STATE, isLoading: false });
      }
    });

    // ページ遷移時にサインイン状態の監視を解除
    return () => unsubscribe();
  }, []);

  return authState;
};
