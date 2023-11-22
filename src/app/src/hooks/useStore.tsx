import { createContext, FC, PropsWithChildren, useContext, useState } from 'react';
// import { toast } from 'react-toastify';
// import { ActorSubclass, Identity } from '@dfinity/agent';
// import { AuthClient, AuthClientCreateOptions, AuthClientLoginOptions } from '@dfinity/auth-client';
// import { Principal } from '@dfinity/principal';

// const IS_MAINNET = process.env.DFX_NETWORK === 'ic';

// const LEDGER_HOST = process.env.LEDGER_HOST;

// const defaultOptions: {
//   createOptions: AuthClientCreateOptions;
//   loginOptions: AuthClientLoginOptions;
// } = {
//   createOptions: {
//     idleOptions: {
//       // Set to true if you do not want idle functionality
//       disableIdle: true,
//     },
//   },
//   loginOptions: {
//     identityProvider: IS_MAINNET
//       ? 'https://identity.ic0.app/#authorize'
//       : `http://${LEDGER_HOST}?canisterId=rdmx6-jaaaa-aaaaa-aaadq-cai#authorize`,
//   },
// };

const useStore_ = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [paidLessons, setPaidLessons] = useState<number[]>([]);
  // const [authClient, setAuthClient] = useState<AuthClient | null>(null);
  // const [identity, setIdentity] = useState<Identity | null>(null);
  // const [principal, setPrincipal] = useState<Principal | null>(null);

  // const updateClient = async (client = authClient!) => {
  //   const isAuthenticated_ = await client.isAuthenticated();
  //   setIsAuthenticated(isAuthenticated_);
  //
  //   const identity_ = client.getIdentity();
  //   setIdentity(identity_);
  //
  //   const principal_ = identity_.getPrincipal();
  //   setPrincipal(principal_);
  // };

  // const initAuthClient = async () => {
  //   try {
  //     const authClient_ = await AuthClient.create(options.createOptions);
  //     setAuthClient(authClient_);
  //     updateClient(authClient_);
  //   } catch (error) {
  //     console.error(error);
  //     toast.error('Error while initializing Internet Identity');
  //     setIsAuthenticated(false);
  //   }
  // };

  // useEffect(() => {
  //   initAuthClient();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const login = async () => {
    // await authClient!.login({
    //   ...options.loginOptions,
    //   onSuccess: () => {
    //     updateClient();
    //   },
    //   onError: (errorMessage) => {
    //     toast.error(`Error while trying to login: ${errorMessage}`);
    //   },
    // });
    setIsAuthenticated(true);
  };

  const logout = async () => {
    // await authClient!.logout();
    // await initAuthClient();
    setIsAuthenticated(false);
  };

  const payForLesson = (id: number) => {
    setPaidLessons((prev) => [...prev, id]);
  };

  return {
    isAuthenticated,
    login,
    logout,
    paidLessons,
    payForLesson,
    // authClient,
    // identity: identity!,
    // principal: principal!,
  };
};

const StoreContext = createContext<ReturnType<typeof useStore_>>({} as any);

export const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const store = useStore_();

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export const useStore = () => useContext(StoreContext);
