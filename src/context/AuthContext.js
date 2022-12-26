import { createContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

import { isValidToken, setSession, renewToken } from '../utils/jwt.utils';
import { UserService } from '../services/user.service';

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user } = action.payload;
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  },
  LOGIN: (state, action) => {
    const { user } = action.payload;
    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  LOGOUT: (state) => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }),
  REGISTER: (state, action) => {
    const { tempUser } = action.payload;
    return {
      ...state,
      isAuthenticated: false,
      tempUser,
    };
  },
  REQUESTPASSWORDRESET: (state, action) => {
    const { tempUser } = action.payload;
    return {
      ...state,
      isAuthenticated: false,
      tempUser,
    };
  },
  VERIFYRESETPASSWORD: (state, action) => {
    const { tempUser } = action.payload;
    return {
      ...state,
      isAuthenticated: false,
      tempUser,
    };
  },
  RESET: (state, action) => {
    return {
      ...initialState,
    };
  },
  UPDATE: (state, action) => {
    const { user } = action.payload;
    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
};

const reducer = (state, action) => (handlers[action.type] ? handlers[action.type](state, action) : state);

const AuthContext = createContext({
  ...initialState,
  method: 'jwt',
  login: () => Promise.resolve(),
  register: () => Promise.resolve(),
  verifyAccount: () => Promise.resolve(),
  resetPassword: () => Promise.resolve(),
  clearTempUser: () => Promise.resolve(),
  verifyResetPassword: () => Promise.resolve(),
  requestResetPassword: () => Promise.resolve(),
  resendAccountVerificationOtp: () => Promise.resolve(),
});

AuthProvider.propTypes = {
  children: PropTypes.node,
};

function AuthProvider({ children }) {

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initialize = async () => {
      try {
        const refreshToken = localStorage.getItem('refreshToken');
        if (isValidToken(refreshToken)) {
          await renewToken(refreshToken);
          const user = await UserService.getProfile();
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: true,
              user,
            },
          });
        } else {
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: false
            },
          });
        }

      } catch (err) {
        console.error(err);
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: false,
            isInitialized: true,
            user: null,
          },
        });
      }
    };
    initialize();
  }, []);

  const login = async (email, password) => {
    const user = await UserService.login(email, password);
    const { access, refresh } = user;
    setSession(access, refresh);
    dispatch({
      type: 'LOGIN',
      payload: {
        user,
      },
    });
  };

  const register = async (form) => {
    const userData = await UserService.register(form);
    dispatch({
      type: 'REGISTER',
      payload: {
        tempUser: userData.user,
      },
    });
  };

  const logout = async () => {
    setSession({});
    dispatch({ type: 'LOGOUT' });
  };

  const verifyAccount = async (userId, otp) => {
    const response = await UserService.verifyAccount(userId, otp);
    dispatch({
      type: 'RESET',
      payload: {
        isAuthenticated: false,
        isInitialized: false,
        user: null,
        tempUser: null,
      },
    });
  };

  const requestResetPassword = async (email) => {
    const response = await UserService.requestResetPassword(email)
    dispatch({
      type: 'REQUESTPASSWORDRESET',
      payload: {
        isAuthenticated: false,
        isInitialized: false,
        tempUser: response.user,
      },
    });
  };

  const verifyResetPassword = async (email, otp) => {
    const response = await UserService.verifyResetPassword(email, otp);
    dispatch({
      type: 'VERIFYRESETPASSWORD',
      payload: {
        isAuthenticated: false,
        isInitialized: false,
        user: null,
        tempUser: response,
      },
    });
  };

  const resetPassword = async (token, newPassword) => {
    const response = await UserService.resetPassword(token, newPassword)
    dispatch({
      type: 'RESET',
      payload: {
        isAuthenticated: false,
        isInitialized: false,
        user: null,
      },
    });
  };

  const resendAccountVerificationOtp = async (userId) => {
    const response = await UserService.resendVerificationOtp(userId)
  };

  const clearTempUser = () => {
    dispatch({
      type: 'RESET',
      payload: {
        isAuthenticated: false,
        isInitialized: false,
        user: null,
        tempUser: null,
      },
    });
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'jwt',
        login,
        logout,
        register,
        clearTempUser,
        verifyAccount,
        resetPassword,
        verifyResetPassword,
        requestResetPassword,
        resendAccountVerificationOtp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
