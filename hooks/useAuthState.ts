import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

/**
 * useAuthState フックの戻り値の型。
 */
export type AuthState = {
  isSignedIn: boolean;
  userId: string | undefined;
  userName: string | undefined;
};

/**
 * useAuthState が返す初期値。
 * Next.js のサーバーサイドレンダリング時もこの値になる。
 */
const INITIAL_AUTH_STATE: AuthState = {
  isSignedIn: false,
  userId: undefined,
  userName: undefined,
};

/**
 * ユーザーのサインイン状態を取得するためのカスタムフック。
 */
export function useAuthState(): AuthState {
  const [authState, setAuthState] = useState(INITIAL_AUTH_STATE);

  // サインイン状態の変化を監視する
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        setAuthState({
          isSignedIn: true,
          userId: user.uid,
          userName: user.displayName || undefined,
        });
      } else {
        setAuthState({ ...INITIAL_AUTH_STATE });
      }
    });

    // ページ遷移時にサインイン状態の監視を解除
    return () => unsubscribe();
  }, []);

  return authState;
}
